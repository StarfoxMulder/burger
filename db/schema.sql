CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL DEFAULT 0,
	burger_date timestamp NOT NULL,
	PRIMARY KEY (id)
);

-- CREATE TABLE parties
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	party_name varchar(255) NOT NULL,
-- 	party_type varchar(255) NOT NULL,
-- 	party_cost int NOT NULL,
-- 	client_id int NOT NULL,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (client_id) REFERENCES clients(id)
-- );
