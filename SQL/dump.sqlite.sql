-- TABLE
CREATE TABLE customers  (
  id INT NOT NULL,
  first_name STRING,
  last_name STRING,
  address STRING,
  PRIMARY KEY (id) 
);
CREATE TABLE orders(
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY key (id),
  foreign key (customer_id) references customers(id),
  foreign key (product_id) references products(id)
  );
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY, stock,
  PRIMARY KEY (id)
  );
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
