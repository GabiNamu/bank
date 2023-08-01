CREATE DATABASE IF NOT EXISTS `bank` ;

USE `bank`;
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf/cnpj` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `account` (`cpf/cnpj`,`name`, 
`email`, `password`, `status`)  VALUES
  ("003.939.708-41", "Amberly Schreave", "a.schreave@live.com",
  "testsenha", true),
  ("008.939.808-46", "Clackson Schreave", "a.schreave@live.com",
  "testsenha2", true),
  ("008.979.808-98", "Madeline Singer", "m.singer@live.com",
  "testsenha3", false);

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` INTEGER NOT NULL,
  `account_id` INTEGER NOT NULL,
  `date` TIMESTAMP DEFAULT now(),
  `cashback` INTEGER, 
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
);

INSERT INTO `transaction` (`value`, `account_id`)  VALUES
  (1000, 1);
