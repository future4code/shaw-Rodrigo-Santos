import { User } from "../../src/model/User";
import { userMocks } from "./userMock";

export class UserDatabaseMocks {
  public async createUser(user: User): Promise<void> {}

  public async getUserByEmail(email: string): Promise<User | undefined> {
    switch (email) {
      case "mock1@gmail.com":
        return userMocks;
      case "mock2@gmail.com":
        return userMocks;
      default:
        undefined;
    }
  }

  public async getUserById(): Promise<User | undefined> {
    return userMocks;
  }

  public async getAllUsers(): Promise<User[]> {
    return [userMocks];
  }
}
