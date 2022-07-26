import { UserBusiness } from "../src/business/UserBusiness";
import { HashGeneratorMocks } from "./mocks/hashGeneratorMocks";
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks";
import { TokenGeneratorMocks } from "./mocks/tokenGeneratorMocks";
import { UserDatabaseMocks } from "./mocks/UserDatabaseMocks";

const userBusinessMock = new UserBusiness(
  new IdGeneratorMocks(),
  new HashGeneratorMocks() as any,
  new UserDatabaseMocks() as any,
  new TokenGeneratorMocks()
);

// Mocks desenvolvidos no coding together da aula!

describe("getUserById", () => {
  // (a)
  test("Should catch error when id is not registered", async () => {
    expect.assertions(2);

    try {
      await userBusinessMock.getUserById("abc");
    } catch (error) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  // (b)
  test("Should return respective user when id is registered", async () => {

    try {
      const result = await userBusinessMock.getUserById("id_mock_admin");

      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      });

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  });
});
