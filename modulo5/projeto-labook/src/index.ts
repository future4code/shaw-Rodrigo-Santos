import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import UserController from "./controller/UserController";
import { UserData } from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/idGenerator";

const userBusiness = new UserBusiness(
  new UserData(),
  new IdGenerator(),
  new HashManager(),
  new Authenticator()
);

const userController = new UserController(userBusiness);

app.post("/user/signup", userController.signup);
