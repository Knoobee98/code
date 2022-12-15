-- untuk menampilkan list database
SHOW DATABASES;

-- untuk membuat database
CREATE DATABASE day04;

-- delete database
DROP DATABASE day04;

-- menunjuk database
USE day04;

-- untuk membuat tabel
CREATE TABLE students(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
student_name VARCHAR(50) NOT NULL,
gender VARCHAR(6),
address TEXT
);

-- show table
SHOW TABLES;

-- delete table
DROP TABLE students;

-- insert data to table
INSERT INTO students(student_name, gender, address) VALUES ("Ikhsan", "Pria", "Tangerang");
SELECT * FROM students;

-- update table
UPDATE students SET address="Jakarta" WHERE id=2;
SELECT * FROM students;

-- delete data
DELETE FROM students WHERE id = 1;
SELECT * FROM students;

-- filter selection
SELECT student_name FROM students WHERE address = "Tangerang";

-- sort selection
SELECT * FROM students ORDER BY score ASC;

-- column selection
SELECT student_name, address FROM students;