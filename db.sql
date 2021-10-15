CREATE DATABASE `films_qualify`;
USE `films_qualify`;
CREATE TABLE `films` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `rating` INT(2) NOT NULL,

    PRIMARY KEY (`id`)
);