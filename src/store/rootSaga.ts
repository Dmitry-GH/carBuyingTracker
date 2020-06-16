import {all} from 'redux-saga/effects';

import {
  fetchUserLogin,
  fetchUserRegister,
  userLogout,
  userFetchAveragePrice,
} from './user/sagas';
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
    userFetchAveragePrice(),
    watchFetchCategory(),
    watchFetchMark(),
    watchFetchModel(),
  ]);
}
