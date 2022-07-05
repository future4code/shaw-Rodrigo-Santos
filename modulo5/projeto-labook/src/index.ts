import { app } from "./controller/app";

app.post("/user/signup", userController.signup);
