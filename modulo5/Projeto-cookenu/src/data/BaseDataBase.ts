import knex, { Knex } from "knex";

export class BaseDataBase {
  protected static connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.BD_PASS,
      database: process.env.DB_NAME,
    },
  });
}


