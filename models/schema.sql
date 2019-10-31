DROP DATABASE IF EXISTS project2;
CREATE DATABASE project2;

USE project2;

CREATE TABLE users(
    `username` VARCHAR (255) NOT NULL,
    `password` VARCHAR (255) NOT NULL,
    `token` CHAR (255) NOT NULL,
    PRIMARY KEY (username)
); 

CREATE TABLE items(
    `Token` VARCHAR (255) NOT NULL,
    `Item` VARCHAR (255) NOT NULL,
    `Quantity` INT NOT NULL,
    `Barcode` VARCHAR (255) NOT NULL,
    `Wishlist` BOOLEAN,
    PRIMARY KEY (Token)
)
