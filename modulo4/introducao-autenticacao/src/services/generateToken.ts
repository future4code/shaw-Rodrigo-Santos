import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types";

  const expiresIn = "1min";

   export function generateToken (input: AuthenticatorData): string {

    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );

    return token;
  }
