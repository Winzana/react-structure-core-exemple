import { all, fork } from "redux-saga/effects";
import { watchGetUsers } from "./users/sagas/users.saga";
/**
 * Root sagas, contains all sagas
 */
export function* rootSagas() {
  yield all([fork(watchGetUsers)]);
}
