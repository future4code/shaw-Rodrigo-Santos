import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection: Knex = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

connection
  .raw(
    `
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      create table IF NOT EXISTS user_labook(
         id varchar(255) primary key,
         name varchar(255)
      );
         
         create table IF NOT EXISTS postagem_labook(
         id varchar(255) primary key,
         postagem varchar(255) not null,
         id_user varchar(255),
         foreing key (id_user) references id(user)
      );
         
         create table IF NOT EXISTS like_labook(
         quantidadeLike int not null,
         id_postagem varchar(255),
         foreing key (id_postagem) references postagem(id)
      );
         
   `
  )
  .then(console.log)
  .catch(console.log);
