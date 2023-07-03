package bu.som.assessment.situationQuestions.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SQRateScoreDto {
    private String bingNumber;
    private double desirabilityDecisionsScore;
    private int convertedDesirabilityDecisionsScore;
    private String considerationOfAlternativesScoreComment;
}
