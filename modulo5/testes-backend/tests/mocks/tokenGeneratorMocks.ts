import { USER_ROLES } from "../../src/model/User";

export class TokenGeneratorMocks {

  public generate = (): string => {
    return "TOKEN_QUALQUER";
  };

  public verify() {
    const objeto = {
      id: "id_mock",
      role: USER_ROLES.ADMIN
    }
    return objeto;
  }
}


