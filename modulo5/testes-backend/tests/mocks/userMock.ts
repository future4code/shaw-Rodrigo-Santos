import { USER_ROLES, User } from "../../src/model/User";

export const userMocks = new User(
  "id_mock_admin",
  "astrodev",
  "astrodev@gmail.com",
  "123456",
  USER_ROLES.ADMIN
);
