package bu.som.assessment.situationQuestions.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SQRankScoreDto {
    private String bingNumber;
    private double avg4ItemScore;
    private double avg5ItemScore;
    private double avg6ItemScore;
    private double rankDecisionScore;
    private double convertedRankDecisionScore;
    private String judgementScoreComment;
}
