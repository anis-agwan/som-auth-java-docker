package bu.som.assessment.situationQuestions.dto;

import lombok.Data;

@Data
public class SituationQuestionDTO {
    private Long SNum;
    private String SText;
    private Long PSNum;
    private String PSText;
    private String R1Text;
    private String R2Text;
    private String R3Text;
    private String R4Text;
    private String R5Text;
    private String R6Text;


    public SituationQuestionDTO(Long SNum, String SText, Long PSNum, String PSText, String r1Text, String r2Text, String r3Text, String r4Text, String r5Text, String r6Text) {
        this.SNum = SNum;
        this.SText = SText;
        this.PSNum = PSNum;
        this.PSText = PSText;
        R1Text = r1Text;
        R2Text = r2Text;
        R3Text = r3Text;
        R4Text = r4Text;
        R5Text = r5Text;
        R6Text = r6Text;
    }
}
