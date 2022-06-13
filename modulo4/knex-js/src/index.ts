import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result[0];
};

app.get("/Actor/name/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;

    console.log(await searchActor(name));

    res.send();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("ERRO INESPERADO");
  }
});

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  return count;
};

app.get("/Actor/gender/:gender", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender;

    console.log(await countActors(gender));

    res.send();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("ERRO INESPERADO");
  }
});
