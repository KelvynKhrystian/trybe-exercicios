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




-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, 
-- ordenados pelo nome em ordem decrescente, juntamente com o id do endereço 
-- e o nome da rua onde o cliente mora. Essas informações podem ser encontradas 
-- nas tabelas customer e address.

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;
