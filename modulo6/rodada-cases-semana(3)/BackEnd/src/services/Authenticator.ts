import * as jwt from "jsonwebtoken";
import { authenticationData } from "../authData";

export class Authenticator {
  generateToken(info: authenticationData): string {
    const token = jwt.sign({ id: info.id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
    return token;
  }

  getTokenData(token: string): authenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string);

    return payload as authenticationData;
  }
}
