import {call, put, takeLatest, select} from 'redux-saga/effects';
import requestAPI from '../../configs/requestAPI';
import {getCategoryFromStore, getMarkFromStore} from './selectors';

import {
  CATEGORY_REQUEST,
  MARK_REQUEST,
  MODEL_REQUEST,
  getCategorySuccess,
  getCategoryFailure,
  getMarkSuccess,
  getMarkFailure,
  getModelSuccess,
  getModelFailure,
} from './actions';

function fetchCategoryApi() {
  return requestAPI('/categories');
}

function fetchMarkApi(categoryId: number) {
  return requestAPI(`/categories/${categoryId}/marks`);
}

function fetchModelApi(categoryId: number, markId: number) {
  return requestAPI(`/categories/${categoryId}/marks/${markId}/models`);
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

function* fetchModel() {
  try {
    const category = yield select(getCategoryFromStore);
    const mark = yield select(getMarkFromStore);
    const model = yield call(() => fetchModelApi(category, mark));
    yield put(getModelSuccess(model));
  } catch (error) {
    yield put(getModelFailure(error));
  }
}

export function* watchFetchCategory() {
  yield takeLatest<ActionRequest>(CATEGORY_REQUEST, fetchCategory);
}

export function* watchFetchMark() {
  yield takeLatest<ActionRequest>(MARK_REQUEST, fetchMark);
}

export function* watchFetchModel() {
  yield takeLatest<ActionRequest>(MODEL_REQUEST, fetchModel);
}
