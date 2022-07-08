import { deflate } from "zlib";
import { connection } from "../index";
import {user} from "../types/user"


class CreateUser(

    id: string,
    email: string,
    name: string,
    password: string,
		role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await connection()
        .insert({
          id,
          email,
          name,
          password,
					role
        })
        .into(User_Arq);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

export default createUser

  