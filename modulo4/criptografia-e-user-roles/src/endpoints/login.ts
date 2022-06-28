import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const userDB = new UserDatabase();

    const user = await userDB.getByEmail(email);

    if (!user) {
      throw new Error("Email ou senha inválidos");
    }
     //comparando senha com hash

     const hashManager = new HashManager();
     const passwordIsCorrect: boolean = 
       await hashManager.compare(password, user.password);
       if (!passwordIsCorrect) {
         throw new Error("Email ou senha inválidos");}
/* 
    if (user.password !== password) {
      throw new Error("Email ou senha inválidos");
    } */

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.id });

    res.status(200).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).end();
    }

    res.end();
  }
}