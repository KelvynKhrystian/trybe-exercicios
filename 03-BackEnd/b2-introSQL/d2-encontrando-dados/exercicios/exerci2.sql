USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3;
SELECT 10 + 15;
SELECT (10 + 15) / 2;
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT Name FROM Scientists
ORDER BY Name ASC;
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;
SELECT CONCAT('O projeto ',Name,' precisou de ', Hours, 'horas para ser concluído.') AS projetos FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name),' cientistas na tabela Scientists.') AS result FROM Scientists.Scientists;