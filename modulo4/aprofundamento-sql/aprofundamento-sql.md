ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

SET SQL_SAFE_UPDATES = 0;

-- 1
-- a) ALTER TABLE Actor DROP COLUMN salary; Apaga a coluna salary da tabela actors
-- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Muda a coluna gender para sex
-- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Muda o tipo de gender para VARCHAR com 255 caractaters
-- d)
ALTER TABLE Actor change gender gender varchar(100);

-- --------------------------------------------------------------------------------------------------------

-- 2

-- a)

UPDATE Actor
SET name = "Fernandinha Montenegro", birth_date = "1934-10-19"
WHERE id = "003";

-- b)

update Actor
SET name = "JULIANA PAES"
where name = "Juliana Paes";

update Actor
SET name = "Juliana Paes"
where name = "JULIANA PAES";

select upper(name) from Actor 
where name = "Juliana Paes";

select lower(name) from Actor 
where name = "Juliana Paes";

-- c)
update Actor
set name = "Marcos Mion", salary = 56000.00, birth_date = "1983-10-19", gender = "male" , favorite_ice_cream_flavor = "Flocos" , type = "Not director"
where id = "005";

-- d)
update Actor
set car = "Volvo"
where id = "150";
-- 14:43:14	update Actor set car = "Volvo" where id = "150"	Error Code: 1054. Unknown column 'car' in 'field list'	0.157 sec
-- Ele simplismente não achou a coluna car na tabela

-- --------------------------------------------------------------------------------------------------------

-- 3)

-- a)

DELETE FROM Actor WHERE name = "Tony Ramos";

DELETE FROM Actor WHERE name = "Fernandinha Montenegro";

-- b)

update Actor
set salary = 1200000.00
where name = "Tony Ramos";

delete from Actor
where gender = "male" and salary >= 1000000.00;

-- --------------------------------------------------------------------------------------------------------

-- 4)

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

-- a)

select max(salary) from Actor;

-- b)

select min(salary) from Actor;

-- c)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d)

SELECT COUNT(salary) FROM Actor;

-- --------------------------------------------------------------------------------------------------------

-- 5

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY name ASC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- a) Esta ultima query conta o número de elementos separados por gender

-- b) 
select id, name from Actor
order by name asc;

-- c)
select name, salary from Actor
order by salary;

-- d)
select name, salary from Actor
order by salary desc
limit 3;

-- e)
select gender, avg(salary) from Actor
group by gender;

-- --------------------------------------------------------------------------------------------------------

-- 6
-- a)
ALTER TABLE Movies ADD playing_limit_date VARCHAR(255);

-- b)
ALTER TABLE Movies CHANGE score score float;

-- c)
UPDATE Movies
SET playing_limit_date = "2020-12-31"
WHERE id = "001" ;

-- d)
DELETE FROM Movies WHERE id = "001"