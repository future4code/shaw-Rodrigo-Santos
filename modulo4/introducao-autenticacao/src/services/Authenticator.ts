import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types";

export class Authenticator {
  private static EXPIRES_IN = "10m";
  public generateToken = (payload: AuthenticatorData) => {
    const token = jwt.sign(payload, process.env.JWTKEY as string, {
      expiresIn: Authenticator.EXPIRES_IN,
    });
    return token;
  };
  public getData = (token: string): any => {
    const data = jwt.verify(token, process.env.JWTKEY as string) as {
      id: string;
    };
    return data;
  };
}
