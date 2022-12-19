-- purwadhika db
CREATE DATABASE purwadhika_students;
CREATE DATABASE purwadhika_schedule;
CREATE DATABASE purwadhika_branch;

SHOW DATABASES LIKE '%purwadhika%';

DROP DATABASE purwadhika_schedule;

USE purwadhika_students;

CREATE TABLE students (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
last_name VARCHAR(50) NOT NULL,
first_name VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL
);

SELECT * FROM students;

ALTER TABLE students
ADD email VARCHAR(50) NOT NULL;

ALTER TABLE students 
ADD gender VARCHAR(50),
ADD batch_code VARCHAR(50),
ADD phone_number VARCHAR(50),
ADD alternative_phone_number VARCHAR(50);

ALTER TABLE students
RENAME COLUMN alternative_phone_number to description;

ALTER TABLE students
DROP COLUMN gender;

USE purwadhika_branch;

CREATE TABLE branch (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
branch_name VARCHAR(50),
pic VARCHAR(50),
address VARCHAR(50),
city VARCHAR(50),
province VARCHAR(50)
);

INSERT INTO branch(branch_name, pic, address, city, province) VALUES ('BTM', 'Angel', 'Nongsa', 'Batam', 'Kep. Riau');
SELECT * FROM branch;

UPDATE branch SET pic = 'Dono' WHERE id = 1;
SELECT * FROM branch;

INSERT INTO branch(branch_name, pic, address, city, province) VALUES ('BLI', 'Tono', 'Gianyar', 'Gianyar', 'Bali');

-- sakila db
USE sakila;

SELECT * FROM actor;
SELECT first_name, last_name FROM actor;
-- find id, first_name, last_name
SELECT actor_id, first_name, last_name FROM actor WHERE first_name LIKE '%Joe%';
-- display address, district, and city_id from address only for district california, alberta, and mekka
SELECT * FROM address;
SELECT address, district, city_id FROM address WHERE district IN ('California', 'Alberta', 'Mekka');
-- count actor with last name "wood"
SELECT last_name, COUNT(*) as total FROM actor WHERE last_name LIKE '%wood%';
-- shows list of customer_id and sum of amount spend that made payment more than 20
SELECT customer_id, SUM(amount) as total FROM payment GROUP BY customer_id HAVING total > 20;
SELECT customer_id, SUM(amount) as total FROM payment GROUP BY customer_id ORDER BY total LIMIT 3;


USE world;
SELECT * FROM country ORDER BY population DESC LIMIT 1;
SELECT * FROM country ORDER BY population DESC LIMIT 1 OFFSET 1;

SELECT continent, SUM(surfaceArea) as totalSurfaceArea, AVG(lifeExpectancy) as averageLife
FROM country GROUP BY continent HAVING averageLife > 75;
