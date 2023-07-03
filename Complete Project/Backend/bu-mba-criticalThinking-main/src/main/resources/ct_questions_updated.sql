CREATE TABLE `ct_questions_mod` (
                                    `questionNumber` int NOT NULL,
                                    `sectionNumber` int NOT NULL,
                                    `choiceA` int DEFAULT NULL,
                                    `choiceB` int DEFAULT NULL,
                                    `choiceC` int DEFAULT NULL,
                                    `sectionDescription` varchar(450) NOT NULL,
                                    `questionDescription` varchar(450) NOT NULL,
                                    `questionOption_1` varchar(450) NOT NULL,
                                    `questionOption_2` varchar(450) NOT NULL,
                                    `optionDescription` varchar(450) NOT NULL,
                                    `answerOption_1` varchar(450) NOT NULL,
                                    `answerOption_2` varchar(450) NOT NULL,
                                    `answerOption_3` varchar(450) NOT NULL,
                                    PRIMARY KEY (`questionNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci