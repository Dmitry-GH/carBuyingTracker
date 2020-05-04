import {all} from 'redux-saga/effects';

import {fetchUserLogin, fetchUserRegister, userLogout} from './auth/sagas';

export default function* rootSaga() {
  yield all([fetchUserLogin(), fetchUserRegister(), userLogout()]);
}
