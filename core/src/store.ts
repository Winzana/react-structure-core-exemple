import { combineReducers, Reducer } from 'redux';
import * as userReducers from './users/reducers/users.reducer';

/**
 * Represent the global AppState
 */
export interface IAppState {
  /**
   * Users reducers
   */
  users: userReducers.State;
}

export const rootReducer = combineReducers<IAppState>({
  users: userReducers.reducer,
});

/**
 * Enable to create a custom rootReducer
 *
 * @export
 * @param {{
 *   [key: string]: Reducer<any, any>;
 * }} reducers
 * @returns
 */
export function createRootReducer<T>(r: { [key: string]: Reducer }) {
  const reducersMerged = {
    users: userReducers.reducer,
    ...r,
  };
  return (combineReducers(reducersMerged) as unknown) as Reducer<IAppState & T>;
}
