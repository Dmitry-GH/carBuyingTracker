import {call, put, takeLatest} from 'redux-saga/effects';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {resetAnalyticsData} from '../../utils/analytics';
import {logLogin} from '../../utils/auth';
import Navigation from '../../services/Navigation';
import database from '@react-native-firebase/database';

import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  userLoginSuccess,
  userLoginFailure,
  userLoginRedirectToRegister,
  USER_REGISTER_REQUEST,
} from './actions';

const goToSignUp = () => {
  Navigation.mergeOptions('AUTH_BOTTOM_TABS', {
    bottomTabs: {
      currentTabIndex: 1,
    },
  });
};

async function fetchUserLoginRequest() {
  try {
    await GoogleSignin.signIn();

    const userCredentials = await GoogleSignin.getTokens();
    return userCredentials;
  } catch (error) {
    console.error(error);
  }
}

function* fetchUser() {
  try {
    const {accessToken, idToken} = yield call(fetchUserLoginRequest);
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    const userData = yield firebase.auth().signInWithCredential(credential);
    console.log(userData);
    const {uid} = userData.user;
    const snapshotUID = yield database()
      .ref(`/users/${uid}`)
      .once('value');

    console.log('User data: ', snapshotUID.val());
    if (snapshotUID.val()) {
      yield put(userLoginSuccess(userData));
      yield logLogin('google.com');
    } else {
      yield put(userLoginRedirectToRegister());
      yield goToSignUp();
    }
  } catch (e) {
    console.log(e);
    yield put(userLoginFailure(e));
  }
}

function* fetchNewUser() {
  try {
    const {accessToken, idToken} = yield call(fetchUserLoginRequest);
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    const userData = yield firebase.auth().signInWithCredential(credential);
    console.log(userData);
    const {uid, displayName, email, photoURL} = userData.user;

    yield database()
      .ref(`/users/${uid}`)
      .set({
        displayName,
        email,
        photoURL,
      });

    yield put(userLoginSuccess(userData));
    yield logLogin('google.com');
  } catch (e) {
    console.log(e);
    yield put(userLoginFailure(e));
  }
}

function* unsubscribeFromAnalytics() {
  yield GoogleSignin.signOut();
  yield auth().signOut();
  yield call(resetAnalyticsData);
}

export function* fetchUserLogin() {
  yield takeLatest<UserLoginAction>(USER_LOGIN_REQUEST, fetchUser);
}

export function* fetchUserRegister() {
  yield takeLatest<UserLoginAction>(USER_REGISTER_REQUEST, fetchNewUser);
}

export function* userLogout() {
  yield takeLatest<UserLogoutAction>(USER_LOGOUT, unsubscribeFromAnalytics);
}
