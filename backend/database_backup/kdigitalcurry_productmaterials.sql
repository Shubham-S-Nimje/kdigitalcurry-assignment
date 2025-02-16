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
-- Table structure for table `productmaterials`
--

DROP TABLE IF EXISTS `productmaterials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productmaterials` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productmaterials`
--

LOCK TABLES `productmaterials` WRITE;
/*!40000 ALTER TABLE `productmaterials` DISABLE KEYS */;
INSERT INTO `productmaterials` VALUES ('f3ca7b12-ebbe-11ef-9e02-bce92f86add0','Alloy Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca8830-ebbe-11ef-9e02-bce92f86add0','Aluminium','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca8b7e-ebbe-11ef-9e02-bce92f86add0','Carbon Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca8d6f-ebbe-11ef-9e02-bce92f86add0','Copper Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca8f15-ebbe-11ef-9e02-bce92f86add0','Copper Nickel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca91be-ebbe-11ef-9e02-bce92f86add0','Duplex Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca939b-ebbe-11ef-9e02-bce92f86add0','Hastelloy','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca9551-ebbe-11ef-9e02-bce92f86add0','Incoloy','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca9787-ebbe-11ef-9e02-bce92f86add0','Inconel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca995f-ebbe-11ef-9e02-bce92f86add0','Low Temperature Carbon Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca9b48-ebbe-11ef-9e02-bce92f86add0','Manel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca9cfd-ebbe-11ef-9e02-bce92f86add0','Nickel Alloy','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3ca9ead-ebbe-11ef-9e02-bce92f86add0','Stainless Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3caa04b-ebbe-11ef-9e02-bce92f86add0','Super Duplex Steel','2025-02-15 22:34:43','2025-02-15 22:34:43'),('f3caa1f4-ebbe-11ef-9e02-bce92f86add0','Titanium','2025-02-15 22:34:43','2025-02-15 22:34:43');
/*!40000 ALTER TABLE `productmaterials` ENABLE KEYS */;
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
