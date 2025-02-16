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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `material` varchar(255) NOT NULL,
  `thickness` varchar(255) DEFAULT NULL,
  `shape` varchar(255) DEFAULT NULL,
  `surface` varchar(255) DEFAULT NULL,
  `unitLength` varchar(255) DEFAULT NULL,
  `outsideDia` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `currency` enum('INR','USD') DEFAULT NULL,
  `unit` enum('KG','MG') DEFAULT NULL,
  `grade` json NOT NULL,
  `type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('0b0358c9-bb9f-47df-b982-48def5afe414','Aluminium','sgs','sdg','jnrfj','4754','dgsdg','50','INR','KG','[\"F5\", \"F91\", \"F9\"]','Pipes','2025-02-16 00:33:07','2025-02-16 01:19:25'),('299a39c1-a191-48fb-b04c-f2f7445d95ed','Aluminium','sgsf','sdgf','jnrfj','4754','dgsdgd','50','INR','KG','[\"F5\", \"F91\", \"F9\"]','Pipes','2025-02-16 00:35:41','2025-02-16 01:17:06'),('2cd2703d-048f-430a-b203-31e37e77007e','Carbon Steel','sgs','sdg','jnrfj','4754','dgsdg','50','INR','KG','[\"F11\"]','Tubing','2025-02-16 14:07:32','2025-02-16 14:30:56'),('317a3230-f50d-45ba-9b1e-32a0291cb20d','Carbon Steel','sgs','sdg','jnrfj','4754','dgsdg','50','USD','MG','[\"F91\"]','Tubing','2025-02-16 14:27:27','2025-02-16 14:33:04'),('38e67b51-c7a0-44d9-9a66-c4ec331b6f93','Aluminium','sgs','sdg','jnrfj','4754','dgsdg','50','INR','KG','[\"F5\", \"F91\", \"F9\"]','Pipes','2025-02-16 00:34:44','2025-02-16 14:37:27'),('4ef5ef6d-a6be-45d6-85e9-a99733eeef82','Aluminium','sgs','sdg',NULL,NULL,NULL,'500','INR','KG','[\"F5\", \"F91\", \"F9\"]','Pipes','2025-02-16 00:34:45','2025-02-16 14:54:20'),('94a6d373-fe2b-4742-9a1b-9fdd1b92e6f6','Carbon Steel','sgs','sdg',NULL,NULL,NULL,'500','INR','KG','[\"F91\", \"F9\", \"F5\"]','Tubing','2025-02-16 14:08:56','2025-02-16 14:55:47'),('9a52141f-c88f-4221-9ca5-ecd16ce94c03','Stainless Steel','sgs sdsd','sdg',NULL,NULL,'dgsdg','50','INR','KG','[\"F9\", \"F5\"]','Pipes','2025-02-16 14:28:32','2025-02-16 14:39:05'),('ba748016-5c31-43f4-a59e-05fc957b5dea','Stainless Steel',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'[\"F11\", \"F5\"]','Pipes','2025-02-16 14:40:17','2025-02-16 14:40:17');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
