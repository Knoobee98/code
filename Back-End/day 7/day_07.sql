-- ecommerce
SELECT * FROM jcwd2302_ecommerce.products;
SELECT * FROM products WHERE price=50000;
SELECT * FROM jcwd2302_ecommerce.product_detail;
SELECT * FROM jcwd2302_ecommerce.product_images;
SELECT * FROM jcwd2302_ecommerce.transactions;

INSERT INTO products(product_name, price, discount) VALUES ('kopi luwak white coffee', 30000, 5000),('', '', '');
INSERT INTO product_detail(weight, description, stock, products_id) VALUES (2, 'salak yang berasal dari yogyakarta.', 100, 5);
INSERT INTO product_images(url) VALUES ('images');

-- library
USE jcwd2302_library;