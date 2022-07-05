import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/HashManager";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        res.statusCode = 422
        throw new Error("Insira corretamente os dados de `name`, `email`, `password` e `role`");
        
    }

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (user) {
      res.statusCode = 409
      throw new Error("Esse email já está cadastrado!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    if (password.length < 6) {
      res.statusCode = 422
      throw new Error("A senha deve ter no mínimo 6 caracteres");
      
    }

    const newUser = new User(id, name, email, hashPassword, role);
    await userDataBase.createUser(newUser);
    
    const authenticator = new Authenticator()
    const token = authenticator.generate({id, role})

    res.status(200).send({message: "Usuário criado com sucesso!", token})
  
  } catch (error: any) {
    res.send(error.message);
  }
}
