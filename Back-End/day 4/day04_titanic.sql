CREATE DATABASE day04_titanic;

USE day04_titanic;

SELECT * FROM passangers;

-- grouping selection
SELECT Survived, COUNT(*) as total_survived FROM passangers WHERE survived = 1 GROUP BY Survived;

-- mendapatkan total penumpang masing2 kelas
SELECT Pclass, COUNT(*) as total_passangers FROM passangers GROUP BY Pclass;

-- mendpatkan rata-rata harga tiket pada masing2 kelas
SELECT Pclass, AVG(Fare) FROM passangers GROUP BY Pclass ORDER BY Pclass ASC;

-- having selection: pengkondisian saat group by
SELECT Pclass, AVG(Fare) FROM passangers GROUP BY Pclass having Pclass=1;

-- subquery selection: query didalam query
-- mendapatkan data penumpang pria yang umurnya diatas rata-rata seluruh penumpang pria
SELECT * FROM passangers WHERE sex = 'male' AND age > (
	SELECT AVG(Age) FROM passangers WHERE Sex = 'male'
);

-- like selection

-- limit 
SELECT * FROM passangers WHERE Name LIKE '%john%';

SELECT Survived, sex, COUNT(*) as total FROM passangers WHERE sex = 'male' AND survived = 1;
SELECT Survived, sex, COUNT(*) as total FROM passangers WHERE sex = 'female' AND survived = 1;
SELECT Survived, sex, COUNT(*) as total FROM passangers WHERE survived = 1 GROUP BY sex;
SELECT * FROM passangers WHERE survived = 1 AND Pclass = 3;