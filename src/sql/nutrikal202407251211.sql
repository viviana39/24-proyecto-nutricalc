CREATE DATABASE  IF NOT EXISTS `nutrikal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `nutrikal`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nutrikal
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `medida`
--

DROP TABLE IF EXISTS `medida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medida` (
  `id_medida` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `altura` float NOT NULL,
  `peso` float NOT NULL,
  `fecha_medida` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `objetivo` enum('aumentar','mantener','bajar') NOT NULL,
  PRIMARY KEY (`id_medida`),
  UNIQUE KEY `id_medida_UNIQUE` (`id_medida`),
  KEY `fk_medida_usuario_idx` (`id_usuario`),
  CONSTRAINT `fk_medida_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medida`
--

LOCK TABLES `medida` WRITE;
/*!40000 ALTER TABLE `medida` DISABLE KEYS */;
INSERT INTO `medida` VALUES (1,1,160,100,'2024-06-23 11:02:11','bajar'),(2,1,160,80,'2024-07-23 11:02:11','bajar'),(3,2,180,150,'2024-05-25 00:00:00','mantener'),(4,2,180,150,'2024-07-23 00:00:00','bajar');
/*!40000 ALTER TABLE `medida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `salt` varchar(45) NOT NULL,
  `hash` varchar(45) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sexo` enum('Hombre','Mujer','Otro') NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES 
(1,'pepito',' ',' ','2024-07-23 00:00:00','Hombre','$2b$10$SgpSmpfcoIhq5fp8bna67e9GifikXk6OT9w.r7gs.EiHJluU0Ez0u'),
(2,'marta',' ',' ','2024-07-23 11:01:08','Mujer','$2b$2b$2b$10$pMNbE0kdvQYl693uHF2EAekKfkI2fpaJaWwVI0vduUC4XinFcq7MS'),
(3,'josete',' ',' ','2024-07-23 11:01:08','Hombre',' '),
(4,'pilar',' ',' ','2024-07-23 11:01:08','Mujer',' '),
(5,'manuel',' ',' ','2024-07-23 11:01:08','Hombre',' '),
(6,'alvaro',' ',' ','2024-07-23 11:01:08','Hombre',' '),
(7,'francisca',' ',' ','2024-07-23 11:01:08','Mujer',' '),
(8,'eustaquia',' ',' ','2024-07-23 11:01:08','Mujer',' '),
(9,'tronca',' ',' ','2024-07-23 11:01:08','Mujer',' '),
(10,'goku',' ',' ','2024-07-23 11:01:08','Hombre',' ')
;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-25 12:12:06
