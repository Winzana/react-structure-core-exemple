import { call, put, takeEvery } from 'redux-saga/effects';
import { UsersActions, GET_USERS } from '../actions/users.action';
import { UsersApi } from '../api/users.api';

/**
 * Saga Get Users
 */
export function* getUsersSaga() {
  try {
    const { data } = yield call(UsersApi.getUsers);
    yield put(UsersActions.getUsersSucceeded(data));
  } catch (err) {
    yield put(UsersActions.getUsersFailed(err));
  }
}

/**
 * Watch for getUser then launch getUsersSaga
 */
export function* watchGetUsers() {
  yield takeEvery(GET_USERS, getUsersSaga);
}
