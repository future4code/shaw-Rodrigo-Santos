import UserData from "../data/UserData";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  async createUser(user: user) {
    try {
      if (!user.first_name || !user.last_name || !user.participation) {
        throw new Error("Preencha todos os campos");
      }

      if (Number.isInteger(user.participation) === false) {
        throw new Error("Participação deve ser um número");
      }

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
    try {
      return await userDB.getUsers();
    } catch (error: any) {
      throw new Error(error.message || "Erro ao buscar usuário");
    }
  }
}
