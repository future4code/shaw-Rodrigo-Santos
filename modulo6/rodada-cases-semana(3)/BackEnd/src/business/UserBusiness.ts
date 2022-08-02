import UserData from "../data/UserData";
import { BaseError } from "../error/BaseError";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  constructor(private userData: UserData) {}

  async createUser(user: user) {
    try {
      const { first_name, last_name, participation } = user;

      if (!first_name || !last_name || !participation) {
        throw new BaseError(422, "Por favor preencha todos os campos");
      }

    /*   if (Number.isInteger(user.participation) === false) {
        throw new BaseError(422, "Insira um valor sem pontos ou vírgulas");
      } */

      return await userDB.createUser(
        user.first_name,
        user.last_name,
        user.participation
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar usuário");
    }
  }

  async getUsers() {
    const usersFromDB = await userDB.getUsers();

    return usersFromDB;
  }
}
