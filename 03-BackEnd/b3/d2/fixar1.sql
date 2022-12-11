-- Monte uma query que exiba o id do ator, nome do ator e id 
-- do filme em que ele já atuou, 
-- usando as tabelas actor e film_actor.

SELECT a.actor_id, a.first_name, b.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS b
ON a.actor_id = b.film_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos 
-- funcionários do banco. Use as tabelas staff e address.

SELECT CONCAT(s.first_name,' ',s.last_name) AS full_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;



