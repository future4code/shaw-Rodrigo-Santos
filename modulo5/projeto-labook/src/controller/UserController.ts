import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { signupInputDTO } from "../types/signupInputDTO";

export default class UserController {
  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const input: signupInputDTO = {
      name,
      email,
      password,
    };
    try {
      const token = await this.userBusiness.signup(input);
      res.status(201).send({ message: "Usuário criado com sucesso", token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };
}
