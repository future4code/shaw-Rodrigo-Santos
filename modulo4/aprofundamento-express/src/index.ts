//Acesse a API pelo link: https://www.getpostman.com/collections/5d491e30548b124b1723

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => console.log("Servidor disponível em 3003"));

//-------------------------------------------------------------------------------------------------------------------------

//1
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

//2
type Afazeres = {
  userId: number;
  id: number;
  name: string;
  completed: boolean;
};

//3
const arrayUser: Afazeres[] = [
  {
    userId: 14,
    id: 1,
    name: "Fazer a cama",
    completed: true,
  },
  {
    userId: 23,
    id: 2,
    name: "Fazer café da manhã",
    completed: false,
  },
  {
    userId: 35,
    id: 3,
    name: "Fazer o bigode",
    completed: true,
  },
  {
    userId: 35,
    id: 4,
    name: "Ir na academia",
    completed: true,
  },
];

//4 GET SÓ OS TRUE
app.get("/afazeresTrue", (req, res) => {
  const completed = arrayUser.map((user) => {
    if (user.completed === true) {
      return user;
    }
  });
  res.send(completed);
});

//5 CRIAR
app.post("/criarAfazer", (req, res) => {
  const { userId, id, name, completed }: Afazeres = req.body;

  arrayUser.push({ userId, id, name, completed });

  res.send(arrayUser);
});

//6 EDITAR
app.put("/editarAfazeres/:id", (req, res) => {
  const idDoAfazer = Number(req.params.id);
  const { completed } = req.body;
  const tarefas: any = arrayUser.find((item) => item.id == idDoAfazer);
  tarefas.completed = completed;

  res.send(tarefas);
});

//7 DELETAR
app.delete("/deletarAfazeres/:id", (req, res) => {
  const idDoAfazer = Number(req.params.id);
  
  const indexArray = arrayUser.findIndex((afazer) => afazer.id == idDoAfazer);

  if (indexArray === -1)
    return res.status(404).json({ error: "Não encontrado" });

  arrayUser.splice(indexArray, 1);

  return res.status(200).json({ sucess: "Excluido!" });
});

//8 RETORNAR TODOS OS AFAZERES DE UM ID
app.get(`/pegaTarefas/:id`, (req, res) => {
  const idDoAfazer = Number(req.params.id);

  const findTarefas = arrayUser.filter((arr) => {
    return arr.userId == idDoAfazer;
  });

  res.status(200).send(findTarefas);
});
