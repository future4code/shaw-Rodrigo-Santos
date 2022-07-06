import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDataBase {
  protected connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true
    },
  });
}
