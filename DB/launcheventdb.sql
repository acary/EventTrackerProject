-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema launcheventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `launcheventdb` ;

-- -----------------------------------------------------
-- Schema launcheventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `launcheventdb` DEFAULT CHARACTER SET utf8 ;
USE `launcheventdb` ;

-- -----------------------------------------------------
-- Table `launchevent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `launchevent` ;

CREATE TABLE IF NOT EXISTS `launchevent` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS launcheventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'launcheventuser'@'localhost' IDENTIFIED BY 'launcheventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'launcheventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `launchevent`
-- -----------------------------------------------------
START TRANSACTION;
USE `launcheventdb`;
INSERT INTO `launchevent` (`id`, `title`) VALUES (1, 'Music Album NFT');

COMMIT;

