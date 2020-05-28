import {all} from 'redux-saga/effects';

import {fetchUserLogin, fetchUserRegister, userLogout} from './user/sagas';

export default function* rootSaga() {
  yield all([fetchUserLogin(), fetchUserRegister(), userLogout()]);
}
