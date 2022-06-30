import { app } from "./app";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getUserProfile } from "./endpoints/getUserProfile";

app.get("/user/get", getUserProfile)
app.post("/user/signup", signup)
app.post("/user/login", login)

