import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import UserController from "./controller/UserController";

const userController = new UserController(
    new UserBusiness()
)

app.post("/user/signup", userController.signup);

