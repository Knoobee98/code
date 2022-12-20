-- day 5 
-- advance databaese design
USE day04_titanic;

-- indexing
CREATE INDEX idx_passangersid ON passangers(PassengerId);
SHOW INDEX FROM passangers;
DROP INDEX idx_passangersid ON passangers;

-- view
CREATE VIEW getAveragePassangers AS
SELECT * FROM passangers WHERE Age > (SELECT AVG(Age) FROM passangers);
SELECT * FROM getAveragePassangers;

-- triggers
USE jcwd2302_ecommerce;
CREATE TRIGGER `set_name_lowercase` BEFORE INSERT ON users
FOR EACH ROW SET NEW.username = LOWER(new.username);

INSERT INTO users(username) VALUES ("FAUZAN");
SELECT * FROM users;

-- event scheduler
-- one time event = event sekali
CREATE EVENT event1 ON SCHEDULE AT DATE_ADD(NOW(), INTERVAL 20 SECOND)
DO INSERT INTO users(username) VALUES ("adhiPutra");
SELECT * FROM users;
-- recurring event = event berkali2
CREATE EVENT event2 ON SCHEDULE EVERY 10 SECOND STARTS DATE_ADD(NOW(), INTERVAL 10 SECOND)
ENDS DATE_ADD(NOW(), INTERVAL 1 MINUTE)
DO INSERT INTO users(username) VALUES ("Ryannn");

-- show event
SHOW EVENTS;
-- delete event
DROP EVENT event_name;
-- disable event
ALTER EVENT event_name DISABLE;

-- ecommerce apps
SELECT * FROM transactions;
CREATE TRIGGER `transaction_expired_date`
BEFORE INSERT ON transactions
FOR EACH ROW SET NEW.expired_at = DATE_ADD(NOW(), INTERVAL 1 MINUTE);

INSERT INTO transactions(product_name, total, Status, users_id) VALUES ("apel","40000", "waiting payment", 1);
SELECT * FROM transactions;

CREATE EVENT update_status ON SCHEDULE AT DATE_ADD(NOW(), INTERVAL 1 MINUTE)
DO UPDATE transactions SET status = "Expired";

-- backup database
SELECT * FROM day04_titanic.passangers;

SELECT * FROM product_detail;
SELECT * FROM products;
SELECT * FROM product_images;
SELECT * FROM carts;




