package bu.som.assessment.criticalThinking.dto;
import lombok.Data;

import java.util.List;
import java.util.Map;
@Data
public class CTQuestionDTO {
    private int quesNum;
    private String quesDesc;
    private String quesOption1;
    private String quesOption2;
    private int secNum;
    private String secDesc;
    private String opsDesc;
    private String ansOption1;
    private String ansOption2;
    private String ansOption3;
    private List<Map<String, String>> options;

    public CTQuestionDTO(int questionNumber,
                         String questionDescription, String qOP1, String qOP2,
                         int sectionNumber, String optionDescription,
                         String aOP1, String aOP2, String aOP3,
                         String sectionDescription, List<Map<String, String>> qOps) {
        quesNum = questionNumber;
        quesDesc = questionDescription;
        quesOption1=qOP1;
        quesOption2=qOP2;
        ansOption1=aOP1;
        ansOption2=aOP2;
        ansOption3=aOP3;
        secNum = sectionNumber;
        secDesc = sectionDescription;
        opsDesc = optionDescription;
        options = qOps;
    }
}
