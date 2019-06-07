import { applyMiddleware, combineReducers, createStore } from 'redux';
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
export function createRootReducer<T>(r: T) {
  const reducersMerged = ({
    auth: authReducers.reducer,
    events: eventReducers.reducer,
    organizations: organizationReducers.reducer,
    users: userReducers.reducer,
    ...r,
  } as unknown) as ReducersMapObject<IAppState & T>;
  return combineReducers(reducersMerged);
}
