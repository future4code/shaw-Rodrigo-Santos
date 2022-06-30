import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { HashManager } from "../services/HashManager";
import { User } from "../entities/User"
import { Authenticator } from "../services/Authenticator";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(422)
        .send("Insira corretamente os dados de `email` e `password`.");
    }

    const userDataBase = new UserDataBase();
    const user = userDataBase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Esse email não está cadastrado!");
    }

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(
      password,
      user.getPassword()
    );

    if (!passwordIsCorrect) {
      res.status(401).send("Senha ou email incorretos!");
    }

    if (password.length < 6) {
      res.status(422).send("A senha deve ter no mínimo 6 caracteres");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id: user.getId(), role: user.getRole() });

    res.status(200).send({ message: "Usuário logado com sucesso!", token });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
