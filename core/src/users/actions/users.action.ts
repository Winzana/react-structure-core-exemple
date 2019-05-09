import { ActionsUnion, createAction } from "@martin_hotell/rex-tils";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCEEDED = "GET_USERS_SUCCEEDED";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const UsersActions = {
  getUsers: () => createAction(GET_USERS),
  getUsersFailed: (error: object) => createAction(GET_USERS_FAILED, { error }),
  getUsersSucceeded: (users: object[]) =>
    createAction(GET_USERS_SUCCEEDED, { users }),
};

// we leverage TypeScript token merging, so our consumer can use `Actions` for both runtime and compile time types 💪
export type UsersActionType = ActionsUnion<typeof UsersActions>;
