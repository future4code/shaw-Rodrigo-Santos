import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile(req: Request, res: Response){
    try {
        const token = req.headers.authorization

        if(!token){
            res
                .status(422)
                .send("Esse endpoint exige uma autorização a ser passada nos headers")
        }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if(tokenData.role !== "ADMIN"){
        res.status(401).send("Somente administradores podem acessar essa funcionalidade.")
    }

    const userDataBase = new UserDataBase()
    const user =  await userDataBase.getUserProfile()

    res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}