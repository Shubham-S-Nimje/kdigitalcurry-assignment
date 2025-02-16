-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: kdigitalcurry
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producttypes`
--

DROP TABLE IF EXISTS `producttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producttypes` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producttypes`
--

LOCK TABLES `producttypes` WRITE;
/*!40000 ALTER TABLE `producttypes` DISABLE KEYS */;
INSERT INTO `producttypes` VALUES ('5dcab650-ebbe-11ef-9e02-bce92f86add0','Pipes','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb8652-ebbe-11ef-9e02-bce92f86add0','Tubing','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','Flanges','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb914a-ebbe-11ef-9e02-bce92f86add0','Valves','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb92bd-ebbe-11ef-9e02-bce92f86add0','Gasket','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb941e-ebbe-11ef-9e02-bce92f86add0','Fittings','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb9576-ebbe-11ef-9e02-bce92f86add0','Forged Fittings','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb96ed-ebbe-11ef-9e02-bce92f86add0','Hangers','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcb985a-ebbe-11ef-9e02-bce92f86add0','Valves Gasket','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbaf0e-ebbe-11ef-9e02-bce92f86add0','Instrumentation Fittings','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbb2c7-ebbe-11ef-9e02-bce92f86add0','Sheet & Plates','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbb721-ebbe-11ef-9e02-bce92f86add0','Bars','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbb8f0-ebbe-11ef-9e02-bce92f86add0','Electrodes','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbba88-ebbe-11ef-9e02-bce92f86add0','Fasteners','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbbc4d-ebbe-11ef-9e02-bce92f86add0','Bolts','2025-02-15 22:30:32','2025-02-15 22:30:32'),('5dcbbdf4-ebbe-11ef-9e02-bce92f86add0','Channels','2025-02-15 22:30:32','2025-02-15 22:30:32');
/*!40000 ALTER TABLE `producttypes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-16 14:57:17
