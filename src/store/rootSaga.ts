import {all} from 'redux-saga/effects';

import {fetchUserLogin, fetchUserRegister, userLogout} from './user/sagas';
import {
  watchFetchCategory,
  watchFetchMark,
  watchFetchModel,
} from './filters/sagas';

export default function* rootSaga() {
  yield all([
    fetchUserLogin(),
    fetchUserRegister(),
    userLogout(),
    watchFetchCategory(),
    watchFetchMark(),
    watchFetchModel(),
  ]);
}
