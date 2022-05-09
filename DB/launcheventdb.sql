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
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `cover_image` VARCHAR(1000) NULL,
  `event_date` DATETIME NULL,
  `contact_email` VARCHAR(100) NULL,
  `event_website` VARCHAR(1000) NULL,
  `source_announcement` VARCHAR(1000) NULL,
  `blockchain` VARCHAR(100) NULL,
  `marketplace` VARCHAR(100) NULL,
  `categories` VARCHAR(1000) NULL,
  `marketplace_url` VARCHAR(1000) NULL,
  `project_twitter` VARCHAR(1000) NULL,
  `project_discord` VARCHAR(1000) NULL,
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
INSERT INTO `launchevent` (`id`, `title`, `description`, `cover_image`, `event_date`, `contact_email`, `event_website`, `source_announcement`, `blockchain`, `marketplace`, `categories`, `marketplace_url`, `project_twitter`, `project_discord`) VALUES (1, 'Music Album NFT', 'The breakout album from upcoming band is not to miss.', NULL, NULL, 'info@tokenize.com', 'http://andycarypro.com', NULL, 'Ethereum', 'OpenSea', 'music', NULL, NULL, NULL);
INSERT INTO `launchevent` (`id`, `title`, `description`, `cover_image`, `event_date`, `contact_email`, `event_website`, `source_announcement`, `blockchain`, `marketplace`, `categories`, `marketplace_url`, `project_twitter`, `project_discord`) VALUES (2, 'Craft Beer NFT', 'A special seasonal release that celebrates the spirit of summer is coming soon.', NULL, NULL, 'contact@digitaltoken.com', 'http://andycarypro.com', NULL, 'Solana', 'OpenSea', 'beer', NULL, NULL, NULL);

COMMIT;

