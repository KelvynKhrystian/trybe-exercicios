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

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes 
-- que moram no distrito da California e que contêm “rene” em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer.

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California'AND c.first_name LIKE '%rene%';

-- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. 
-- Ordene seus resultados por nome e sobrenome de forma decrescente. 
-- Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.

SELECT c.first_name, c.last_name, COUNT(r.rental_id) as 'nº de filmes alugados'
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;
