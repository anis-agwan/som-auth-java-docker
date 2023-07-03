package bu.som.assessment.criticalThinking.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class CTScoreDTO {
    private String bingNumber;
    private int sec1AnalysisScore;
    private int sec2ConnectionsScore;
    private int sec3DepthScore;
    private String decisivenessScoreComment;
    private String logicalReasoningScoreComment;
    private String analysesScoreComment;
}
