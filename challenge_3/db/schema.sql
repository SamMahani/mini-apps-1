CREATE DATABASE IF NOT EXISTS users;
USE users;

DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30),
  user_email VARCHAR(30),
  user_pass VARCHAR(30),
  address_1 VARCHAR(30),
  address_2 VARCHAR(30),
  address_city VARCHAR(30),
  address_state VARCHAR(30),
  address_zip INT,
  user_phone VARCHAR(30),
  billing_cc VARCHAR(30),
  billing_exp VARCHAR(30),
  billing_cvv INT,
  billing_zip INT,
  PRIMARY KEY(id)
);
