import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../entities/User";

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
  public generate(input: AuthenticationData): string {

  }
}
