import { Request, Response } from "express";
import { createUser } from "../data/CreateUser";
import { generateId } from "../services/generateId";

export default async function postUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'password' e 'email'");
    }
    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }

    const id = generateId();
    const userDB = await createUser(id, email, password);

    res.status(201).send(userDB);
  } catch (error: any) {
    res.send({ message: error.message });
  }
}
