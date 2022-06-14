import { Request, Response } from "express";
import { connection } from "../data/connection";
import { lanenuStaff } from "../types";

export default async function selectAllStaff(): Promise<any> {
  const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);

  return result[0];
}

export const getStaffByOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let order = req.query.order;
    let sort = req.query.sort;

    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    const result = await connection("aula48_exercicio")
    .orderBy(sort, order);

    const labenuStaff: lanenuStaff[] = result.map(toLabenuStaff);

    res.status(200).send(labenuStaff);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

const toLabenuStaff = (input: any): lanenuStaff => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};
