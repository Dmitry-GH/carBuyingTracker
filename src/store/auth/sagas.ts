import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {resetAnalyticsData} from '../../utils/analytics';
import {logLogin} from '../../utils/auth';

import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  userLoginSuccess,
  userLoginFailure,
} from './actions';

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

    yield put(userLoginSuccess(accessToken, idToken, userData));
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
  yield takeEvery<UserLoginAction>(USER_LOGIN_REQUEST, fetchUser);
}

export function* userLogout() {
  yield takeLatest<UserLogoutAction>(USER_LOGOUT, unsubscribeFromAnalytics);
}
