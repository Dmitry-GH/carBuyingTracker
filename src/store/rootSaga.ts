import {all} from 'redux-saga/effects';

import {fetchUserLogin, userLogout} from './auth/sagas';

export default function* rootSaga() {
  yield all([fetchUserLogin(), userLogout()]);
}
