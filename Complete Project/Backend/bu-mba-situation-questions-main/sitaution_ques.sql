CREATE TABLE `situation_questions` (
                                       `Situation_Number` int(11) NOT NULL AUTO_INCREMENT,
                                       `Situation_Text` varchar(4500) DEFAULT NULL,
                                       `Prev_Situation_Number` int DEFAULT NULL,
                                       `Prev_Situation_Text` varchar(4500) DEFAULT NULL,
                                       `Rank1_Text` varchar(1000) DEFAULT NULL,
                                       `Rank2_Text` varchar(1000) DEFAULT NULL,
                                       `Rank3_Text` varchar(1000) DEFAULT NULL,
                                       `Rank4_Text` varchar(1000) DEFAULT NULL,
                                       `Rank5_Text` varchar(1000) DEFAULT NULL,
                                       `Rank6_Text` varchar(1000) DEFAULT NULL,
                                       PRIMARY KEY (`Situation_Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci