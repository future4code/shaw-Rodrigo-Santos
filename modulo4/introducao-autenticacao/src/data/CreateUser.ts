import knex from "knex";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

export const userTableName = "User";

export const createUser = async (
  id: string,
  email: string,
  password: string
) => {
  try {
	await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);

	return "ok"
	
  } catch (error:any) {

	return error.sqlMessage
	
  }
};
