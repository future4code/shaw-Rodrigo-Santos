import express from "express";
import cors from "cors";
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());

//1

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(3003, function () {
  console.log(" rodando o pc como servidor !");
});

//5

type BuscaPost = {
  id: string | number;
  title: string;
  body: string;
  userId: string | number;
};

//2

type TipoUsuarios = {
  id: string | number;
  name: string;
  phone: number;
  email: string;
  website: string;
  posts?: BuscaPost[];
};

//3

const usuarios: TipoUsuarios[] = [
  {
    id: 1,
    name: "Seya",
    phone: 31981179925,
    email: "seya@gmail.com",
    website: "seya.com.br",
    //6 fazer um array de posts
    posts: [
      {
        id: "post1",
        title: "Saoriiiii",
        body: "Athenaaaaaa",
        userId: 1,
      },
      {
        id: "post2",
        title: "Me dê sua força pegasusssssss",
        body: "Meteoro de trovão!!!!!!!!!",
        userId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Atena",
    phone: 31981149925,
    email: "atena@gmail.com",
    website: "atena.com.br",
    posts: [],
  },
  {
    id: 3,
    name: "Shiryu",
    phone: 31981149925,
    email: "shiryu@gmail.com",
    website: "shiryu.com.br",
    posts: [],
  },
  {
    id: 4,
    name: "Ikki",
    phone: 31981149325,
    email: "ikki@gmail.com",
    website: "ikki.com.br",
    posts: [
        {
            id: "post3",
            title: "Shun seu fresco!!!",
            body: "Vira homi",
            userId: 4,
          },
    ],
  },
];

//4

app.get("/usuarios", (req, res) => {
  // vai retornar todas os usuarios

  res.send(usuarios);
});

//7

app.get("/usuarios/posts", (req, res) => {

    const usuarios1 = usuarios.map((user)=>{
        return user
    }).flat(1)
  
    const posts = usuarios1.map((usuario)=>{
        return usuario.posts
    }).flat(1)

    res.send(posts)
  });

  //8

  app.get("/usuarios/posts/", (req, res) => {

    const usuarios1 = usuarios.map((user)=>{
        return user
    }).flat(1)
  
    const posts = usuarios1.map((usuario)=>{
        return usuario.posts
    }).flat(1)

    res.send(posts)
  });




