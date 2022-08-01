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

      const resp = await this.userBusiness.createUser(input);

      res.status(200).send({
        message: "Usuário criado com sucesso",
        resp,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({
          message: error.message,
        });
      }
      return res.status(400).send("Erro no signup");
    }
    await BaseDatabase.destroyConnection()
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const result = await this.userBusiness.getUsers();
      res.status(200).send(result);

    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({
          message: error.message,
        });
      }
      return res.status(400).send("Erro na solicitação");
    }
    await BaseDatabase.destroyConnection()
  };
}
