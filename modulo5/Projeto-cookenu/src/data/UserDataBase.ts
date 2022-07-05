import { BaseDataBase } from "./BaseDataBase";
import { User } from "../entities/User";

export class UserDataBase extends BaseDataBase {
  //criando o usuário no banco de dados
  public async createUser(user: User) {
    console.log(user);

    try {
      await BaseDataBase.connection("cookenu_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  //serve para verificar se o usuários já existe no nosso banco de dados
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDataBase.connection("cookenu_user")
        .select("*")
        .where({ email });

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
  //Pegar dados do usuário
  public async getUserProfile(): Promise<User[]> {
    try {
      const user = await BaseDataBase.connection("cookenu_user").select(
        `id`,
        "name",
        "email"
      )
      return user.map((user) => User.toUserModel(user));
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
