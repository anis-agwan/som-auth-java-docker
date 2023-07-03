CREATE TABLE `sq_table` (
  `SituationNumber` int NOT NULL,
  `SituationText` varchar(4500) DEFAULT NULL,
  `PrevSituationNumber` int DEFAULT NULL,
  `PrevSituationText` varchar(4500) DEFAULT NULL,
  `Rank1text` varchar(450) DEFAULT NULL,
  `Rank2text` varchar(450) DEFAULT NULL,
  `Rank3text` varchar(450) DEFAULT NULL,
  `Rank4text` varchar(450) DEFAULT NULL,
  `Rank5text` varchar(450) DEFAULT NULL,
  `Rank6Text` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`SituationNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci