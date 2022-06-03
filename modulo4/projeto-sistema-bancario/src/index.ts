import * as express from "express";
import * as cors from "cors";
import { user, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

//LINK DA API: https://documenter.getpostman.com/view/20353474/Uz5GoFyr#5c64f8f7-6f15-40b1-804d-dfde444b5efe

//-------------------------------------------------------------------------------------------------------------------------
let errorCode: number = 400;

//PEGAR TODOS OS USUÁRIOS
app.get("/users", (req, res) => {
  res.send(user);
});

//CRIAR NOVO USUÁRIO
app.post("/users", (req, res) => {
  try {
    const { name, CPF, birthDate, balance, statement } = req.body;

    const findCpf = user.find((hasUser) => {
      return hasUser.CPF === CPF;
    });

    const newDate = new Date(birthDate);

    const age: number = Math.floor(
      (Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    );

    if (!name || !CPF || !birthDate || !balance || !statement) {
      errorCode = 401;
      throw new Error("User parameters missin or not aceppted");
    }

    if (findCpf) {
      errorCode = 401;
      throw new Error("User already registered");
    }

    if (age < 18) {
      res.status(403);
      throw new Error("You must be over 18 to create your account!");
    }

    /* if ("") {
      errorCode = 401;
      throw new Error("Dados incopletos");
    } */

    const newUser: User = {
      name,
      CPF,
      birthDate,
      balance,
      statement,
    };

    user.push(newUser);

    res.status(200).send({ message: "User created successefuly" });
  } catch (error) {
    return res.status(errorCode).send({ message: error.message });
  }
});
