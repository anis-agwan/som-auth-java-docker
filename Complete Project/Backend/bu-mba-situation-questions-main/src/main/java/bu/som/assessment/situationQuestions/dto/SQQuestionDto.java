package bu.som.assessment.situationQuestions.dto;

import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
public class SQQuestionDto {
    private int SNum;
    private String SText;
    private Integer PSNum;
    private String PSText;
    private String R1Text;
    private String R2Text;
    private String R3Text;
    private String R4Text;
    private String R5Text;
    private String R6Text;
    public SQQuestionDto(int situationNumber, String situationText, Integer prevSituationNumber, String prevSituationText, String Rank1Text, String Rank2Text, String Rank3Text, String Rank4Text, String Rank5Text, String Rank6Text) {
        SNum = situationNumber;
        SText = situationText;
        PSNum = prevSituationNumber;
        PSText = prevSituationText;
        R1Text = Rank1Text;
        R2Text = Rank2Text;
        R3Text = Rank3Text;
        R4Text = Rank4Text;
        R5Text = Rank5Text;
        R6Text = Rank6Text;
    }


}
