import {call, put, takeLatest, select} from 'redux-saga/effects';
import requestAPI from '../../configs/requestAPI';
import {getCategoryFromStore} from './selectors';
import database from '@react-native-firebase/database';

import {
  CATEGORY_REQUEST,
  MARK_REQUEST,
  getCategorySuccess,
  getMarkSuccess,
  getCategoryFailure,
  getMarkFailure,
} from './actions';

function fetchCategoryApi() {
  return requestAPI('/categories');
}

function fetchMarkApi(categoryId: number) {
  return requestAPI(`/categories/${categoryId}/marks`);
}

function* fetchCategory() {
  try {
    const category = yield call(fetchCategoryApi);
    yield put(getCategorySuccess(category));
  } catch (error) {
    yield put(getCategoryFailure(error));
  }
}

function* fetchMark() {
  try {
    const category = yield select(getCategoryFromStore);
    const mark = yield call(() => fetchMarkApi(category));
    yield put(getMarkSuccess(mark));
  } catch (error) {
    yield put(getMarkFailure(error));
  }
}

export function* watchFetchCategory() {
  yield takeLatest<ActionRequest>(CATEGORY_REQUEST, fetchCategory);
}

export function* watchFetchMark() {
  yield takeLatest<ActionRequest>(MARK_REQUEST, fetchMark);
}
