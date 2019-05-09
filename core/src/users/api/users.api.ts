import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 2000,
});
/**
 * All endpoints for user concerns
 */
export class UsersApi {
  /**
   * Get users resource
   */
  public static getUsers = () =>
    // tslint:disable-next-line: completed-docs
    instance.get<{ first_name: string }>("/users").catch(err => {
      throw err;
    });
}
