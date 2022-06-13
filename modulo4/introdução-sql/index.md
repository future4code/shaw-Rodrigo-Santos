CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- ex1)

-- VARCHAR VARCHAR é uma abreviação para VARiable-length CHARacter string, no caso até (255)
-- FLOAT é um tipo de number que assume virgulas
-- DATE é um tipo de variável para datas
-- NOT NULL é quando é obrigatório a inserção desse paramêtro 
-- PRIMARY KEY é obrigatório e representa o valor único da tabela

show databaseS;
show tables;

-- Show databases nos entrega todos os trabalhos. Já o show tables mostra todas as tables do banco de dados

describe Actor;

-- Describe Actor nos entrega o que temos dentro da tabela

-- ex2)
-- a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- b)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Kurt Russel",
  1200000,
  "1963-08-23", 
  "male"
);

-- Este erro aconteceu porque o ID está duplicado

-- c)

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Não iseriu parâmetro de Actor acima 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- Faltou completar o campo Nome e trocar a ordem dos fatores

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Al Pacino",
400000,
"1949-04-18", 
"male"
);

-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- Faltou por data entre aspas ""

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Meryl Streep",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Rodrigo Faro",
  400000,
  "1986-04-18", 
  "male"
);

-- 3 

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

-- a)

SELECT * from Actor WHERE gender = "female";

-- b)

SELECT name, salary from Actor WHERE name =  "Tony Ramos";

-- c)

SELECT * from Actor where gender = "invalid";

-- Ele volta Null pois não possui no Banco de dados nada com esse parâmetro 

-- d)

SELECT id, name, salary from Actor where salary <= 500000.00;

-- e)

SELECT id, nome from Actor WHERE id = "002";

-- Nome não está setado como um dos parâmetros, temos similar o parâmetro name

SELECT id, name from Actor WHERE id = "002";

-- 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- a) Entre %% ele limitou ao começo das letras descritas

-- b)
SELECT * FROM Actor
WHERE (name LIKE "A%") AND salary > 350000;

-- c)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

-- d)
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
AND salary BETWEEN 350000.00 AND 900000.00;

-- 5

-- a)

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT  NOT NULL,
    release_date DATE NOT NULL,
    score INT NOT NULL
);

-- b)
INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

-- c)

INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2027-12-27",
    10
);

-- d)

INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Movies (id, name, synopsis, release_date, score)
VALUES (
	"004",
    "Um pistoleiro chamado Papacu",
    "Um Pistoleiro Chamado Papaco, também lançado como Os Amores de um Pistoleiro, é um filme brasileiro pornochanchada de 1986 dirigido por Mário Vaz Filho. Foi produzido na Boca do Lixo, em São Paulo, pela Olympus Filmes. Na Internet, o filme se tornou um meme.",
    "1986-11-02",
    8
);

-- 6 
-- a)
select id, name, score from Movies
where id = 1;

-- b)
select * from Movies 
where name = "Um pistoleiro chamado Papacu";

-- c)
select id, name, synopsis from Movies
where score >= 7;

-- 7
-- a)
SELECT * FROM Movies
WHERE name LIKE "%vida%";

-- b)
SELECT * FROM Movies
WHERE name LIKE "%dona%" OR synopsis LIKE "%dona%";

-- c)
SELECT * FROM Movies;

-- d)
SELECT * FROM Movies
WHERE (name LIKE "%dona%" OR synopsis LIKE "%dona%") AND score > 7;