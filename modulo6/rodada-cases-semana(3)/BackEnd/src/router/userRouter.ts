import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import UserData from "../data/UserData";
import express from "express";

export const userRouter = express.Router();

const userBusiness = new UserBusiness(new UserData());

const userController = new UserController(userBusiness);

userRouter.post("/register", userController.createUser);
userRouter.get("/getUser", userController.getUsers);
