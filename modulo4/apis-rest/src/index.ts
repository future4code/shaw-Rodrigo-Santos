import express, { request, Request, response, Response } from "express";
import cors from "cors";
import { type } from "os";

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});

//----------------------------------------------------------------------------------------------------------------------------------
let codeError: number = 400;

//2a)Passei os parâmetros de type por query
//b) Sim, porém a requisição de users parou de funcionar

app.get("/user", (req: Request, res: Response) => {
  const catchQuery: String = req.query.type as String;
  const findType: User[] | undefined = users.filter(
    (user) => user.type === catchQuery
  );

  try {
    if (!findType) {
      codeError = 401;
      throw new Error("Type not found");
    }

    res.status(codeError).send(findType);
  } catch (error: any) {
    switch (error.message) {
      case "Type not found":
        res.status(codeError);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado no servidor");
        break;
    }

    res.send(error.message);
  }
});

//1a) O método HTTP que devo utilizar é o GET
//b) /user

app.get("/user", (req: Request, res: Response) => {
  try {
    if (!users) {
      codeError = 401;
      throw new Error("User not found");
    }

    res.send(users);
  } catch (error: any) {
    switch (error.message) {
      case "User not found":
        res.status(404);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado no servidor");
        break;
    }

    res.send(error.message);
  }
});

//3A) Otipo de parametro usado aqui é o de NAME
//b)

app.get("/user/:name", (req: Request, res: Response) => {
  try {
    const catchName: String = req.params.name as String;
    const findName = users.filter((user) => user.name === catchName);

    if (!catchName) {
      codeError = 401;
      throw new Error("Name not found");
    }
    if (!catchName) {
      codeError = 401;
      throw new Error("Name not found");
    }

    res.send(findName);
  } catch (error: any) {
    switch (error.message) {
      case "User not found":
        res.status(404);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado no servidor");
        break;
    }

    res.send(error.message);
  }
});

//4
app.post("/new-user", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body;

    /*    if (
      ( req.body.id !== Number ||
        req.body.name !== String ||
        req.body.email !== String ||
        req.body.type !== String ||
        req.body.age !== Number)
    ) {
      codeError = 401;
      throw new Error("Parametros de body inválidos!");
    } */

    users.push({ id, name, email, type, age });
    res.send(users);
  } catch (error: any) {
    switch (error.message) {
      case "Parametros de body inválidos!":
        res.status(404);
        break;

      default:
        res.status(500);
        error.message("Erro inesperado no servidor");
        break;
    }

    res.send(error.message);
  }
});
