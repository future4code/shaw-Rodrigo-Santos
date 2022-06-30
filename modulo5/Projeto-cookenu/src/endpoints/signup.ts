import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/HashManager";
import { User } from "../entities/User";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(422)
        .send("Insira corretamente os dados de `name`, `email` e `password`");
    }

    const userDataBase = new UserDataBase();
    const user = userDataBase.findUserByEmail(email);

    if (user) {
      res.status(409).send("Esse email já está cadastrado!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword);
    await userDataBase.createUser(newUser);

    if (password.length < 6) {
      res.status(422).send("A senha deve ter no mínimo 6 caracteres");
    }
    
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
