import { BaseDataBase } from "./BaseDataBase";
import { User } from "../entities/User";

//serve para verificar se o usuários já existe no nosso banco de dados

export class UserDataBase extends BaseDataBase {
  public async findUserByEmail(email: string): User {
    try {
      const user = await BaseDataBase.connection(`lbn_user`)
        .select(`*`)
        .where({ email });

 
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
