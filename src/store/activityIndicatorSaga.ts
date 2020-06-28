import {call, take, select} from 'redux-saga/effects';
import {ActivityIndicator} from '../screens/navigation';

export function* watchForPendingActivity() {
  const userPendingSelector = (state: GlobalState) => state.user.pending;
  const filtersPendingSelector = (state: GlobalState) => state.filters.pending;

  let prevUserPending = false;
  let prevFiltersPending = false;

  while (true) {
    const nextUserPending = yield select(userPendingSelector);
    const nextFiltersPending = yield select(filtersPendingSelector);

    if (nextUserPending !== prevUserPending) {
      yield call(ActivityIndicator, {action: nextUserPending});

      prevUserPending = nextUserPending;
    }

    if (nextFiltersPending !== prevFiltersPending) {
      yield call(ActivityIndicator, {action: nextFiltersPending});

      prevFiltersPending = nextFiltersPending;
    }
    yield take('*');
  }
}
