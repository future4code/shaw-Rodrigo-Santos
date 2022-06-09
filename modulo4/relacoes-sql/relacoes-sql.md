-- 1
-- a) Chave Estrangeira ou Foreign Key é a chave que vai juntar duas tabelas distintas que tenham uma Chave Primária em comum (id)


CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

-- b)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito ruim!",
    3,
	"003"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "ANIMAL!",
    10,
	"002"
);

-- c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815303-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Esse erro informa que não temos uma Primary Key correspondente a Foreign Key

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "ANIMAL!",
    10,
	"010"
);

-- d)

select * from Rating;
select * from Movies;

ALTER TABLE Movies DROP COLUMN score;

-- e)

DELETE FROM Actor WHERE name = "Doce de mãe";

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
-- O erro retorna que estou em safe update mode. E informa que estou tentando apagar uma Primary Key da qual uma Foreign Key depende

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

select * from Rating;
select * from Movies;
select * from Actor;

-- 2)
-- a) Essa é uma Tabela de Junção que serve para unir referenciar o Movie Id ao Actor Id
-- b) 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("002","002"),
("002","004"),
("003","006"),
("003","007"),
("004","005"),
("004","002");

select * from MovieCast;

-- c)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("001","001");

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815303-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Esse erro informa que não temos uma Primary Key correspondente a Foreign Key

-- d)

DELETE FROM Actor WHERE name = "Al Pacino";

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
-- O erro retorna que estou em safe update mode. E informa que estou tentando apagar uma Primary Key da qual uma Foreign Key depende

-- 3
-- a)
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- O operador ON ou onde em português serve para sinalizar onde está o id de Movies que é igual ao id dos filmes do Rating

-- b)
SELECT Movies.name, Movies.id, rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

