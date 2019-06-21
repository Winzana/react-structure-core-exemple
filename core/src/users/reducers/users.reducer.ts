import { IAppState } from "../../store";
import * as fromActions from "../actions/users.action";

export const initialState = {
  error: Object(),
  loading: false,
  users: Array<object>(),
};
export type State = typeof initialState;
export const usersSelector = (state: IAppState) => state.users.users;
export const reducer = (
  state = initialState,
  action: fromActions.UsersActionType,
): State => {
  switch (action.type) {
    case fromActions.GET_USERS: {
      return { ...state, loading: true };
    }
    case fromActions.GET_USERS_FAILED: {
      const {
        payload: { error },
      } = action;

      return { ...state, loading: false, error };
    }
    case fromActions.GET_USERS_SUCCEEDED: {
      const {
        payload: { users },
      } = action;
      return { ...state, loading: false, users };
    }
    default:
      return state;
  }
};
