import {call, put, takeLatest, select} from 'redux-saga/effects';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {resetAnalyticsData} from '../../utils/analytics';
import {logLogin} from '../../utils/auth';
import Navigation from '../../services/Navigation';
import {getUserCarFromStore} from './selectors';
import requestAPI from '../../configs/requestAPI';
import database from '@react-native-firebase/database';

import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  userLoginSuccess,
  userLoginFailure,
  userLoginRedirectToRegister,
  getAveragePriceSuccess,
  getAveragePriceFailure,
  USER_REGISTER_REQUEST,
  USER_AVERAGE_PRICE_REQUEST,
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
    const snapshotUID = yield database().ref(`/users/${uid}`).once('value');

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

    yield database().ref(`/users/${uid}`).set({
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

function fetchAveragePriceRequest(userCar: UserState['userCar']) {
  return requestAPI(
    `/average_price?category=${userCar.category?.value}&marka_id=${
      userCar.mark?.value
    }&model_id=${userCar.model?.value}${
      userCar.year_from ? `&yers=${userCar.year_from}` : ''
    }${userCar.year_to ? `&yers=${userCar.year_to}` : ''}`,
  );
}

function* fetchAveragePrice() {
  try {
    const userCar = yield select(getUserCarFromStore);
    const averagePrice = yield call(() => fetchAveragePriceRequest(userCar));
    yield put(getAveragePriceSuccess(averagePrice));
  } catch (error) {
    yield put(getAveragePriceFailure(error));
  }
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

export function* userFetchAveragePrice() {
  yield takeLatest<UserAveragePriceAction>(
    USER_AVERAGE_PRICE_REQUEST,
    fetchAveragePrice,
  );
}
