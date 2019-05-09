import { applyMiddleware, combineReducers, createStore } from "redux";
import * as userReducers from "./users/reducers/users.reducer";

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
