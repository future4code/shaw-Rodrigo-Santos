import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDataBase";
import { user } from "../types/user";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const { first_name, last_name, participation } = req.body;

      const input: user = {
        first_name,
        last_name,
        participation,
      };

      await this.userBusiness.createUser(input);

      res.status(200).send({
        message: "Usuário criado com sucesso",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no registro");
    }
    await BaseDatabase.destroyConnection();
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const resp = await this.userBusiness.getUsers();
      res.status(200).send(resp);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro na solicitação");
    }
    await BaseDatabase.destroyConnection();
  };
}
