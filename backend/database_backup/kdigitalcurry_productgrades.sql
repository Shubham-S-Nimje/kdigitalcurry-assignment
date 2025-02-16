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
-- Table structure for table `productgrades`
--

DROP TABLE IF EXISTS `productgrades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productgrades` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productTypeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `productMaterialId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productTypeId` (`productTypeId`),
  KEY `productMaterialId` (`productMaterialId`),
  CONSTRAINT `productgrades_ibfk_1` FOREIGN KEY (`productTypeId`) REFERENCES `producttypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `productgrades_ibfk_2` FOREIGN KEY (`productMaterialId`) REFERENCES `productmaterials` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productgrades`
--

LOCK TABLES `productgrades` WRITE;
/*!40000 ALTER TABLE `productgrades` DISABLE KEYS */;
INSERT INTO `productgrades` VALUES ('b8cee9a4-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf0088-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf0be5-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf154f-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf1d59-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf260d-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf2df9-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cf3577-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca8830-ebbe-11ef-9e02-bce92f86add0'),('b8cf3dc5-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca8830-ebbe-11ef-9e02-bce92f86add0'),('b8cf492a-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcab650-ebbe-11ef-9e02-bce92f86add0','f3ca8830-ebbe-11ef-9e02-bce92f86add0'),('b8cf537f-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca8b7e-ebbe-11ef-9e02-bce92f86add0'),('b8cf5ba7-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca8b7e-ebbe-11ef-9e02-bce92f86add0'),('b8cf6692-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca8b7e-ebbe-11ef-9e02-bce92f86add0'),('b8cf6e7f-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca8b7e-ebbe-11ef-9e02-bce92f86add0'),('b8cf7629-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca8b7e-ebbe-11ef-9e02-bce92f86add0'),('b8cf91b3-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca8d6f-ebbe-11ef-9e02-bce92f86add0'),('b8cf99cf-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca8d6f-ebbe-11ef-9e02-bce92f86add0'),('b8cfa3d7-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca8d6f-ebbe-11ef-9e02-bce92f86add0'),('b8cfabab-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca8d6f-ebbe-11ef-9e02-bce92f86add0'),('b8cfb524-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca8d6f-ebbe-11ef-9e02-bce92f86add0'),('b8cfc024-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca939b-ebbe-11ef-9e02-bce92f86add0'),('b8cfcf59-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca939b-ebbe-11ef-9e02-bce92f86add0'),('b8cfdb24-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca939b-ebbe-11ef-9e02-bce92f86add0'),('b8cfe5bf-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca939b-ebbe-11ef-9e02-bce92f86add0'),('b8cfebfa-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8f0a-ebbe-11ef-9e02-bce92f86add0','f3ca939b-ebbe-11ef-9e02-bce92f86add0'),('b8cff3ff-ebbf-11ef-9e02-bce92f86add0','F11','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8cffaec-ebbf-11ef-9e02-bce92f86add0','F22','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8d000f6-ebbf-11ef-9e02-bce92f86add0','F5','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8d00777-ebbf-11ef-9e02-bce92f86add0','F9','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0'),('b8d00d43-ebbf-11ef-9e02-bce92f86add0','F91','2025-02-15 22:40:14','2025-02-15 22:40:14','5dcb8652-ebbe-11ef-9e02-bce92f86add0','f3ca9ead-ebbe-11ef-9e02-bce92f86add0');
/*!40000 ALTER TABLE `productgrades` ENABLE KEYS */;
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
