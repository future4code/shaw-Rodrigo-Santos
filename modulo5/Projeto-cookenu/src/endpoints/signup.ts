import { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(422)
        .send("Insira corretamente os dados de `name`, `email` e `password`");
    }

    if (password.length < 6) {
      res.status(422).send("A senha deve ter no mínimo 6 caracteres");
    }

    

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
