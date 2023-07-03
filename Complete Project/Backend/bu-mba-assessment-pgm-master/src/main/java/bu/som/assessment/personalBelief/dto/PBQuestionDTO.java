package bu.som.assessment.personalBelief.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class PBQuestionDTO {
    private int quesNum;
    private String quesDesc;
    private List<Map<String, String>> options;
    public PBQuestionDTO(int qid, String qDesc, List<Map<String, String>> qOps) {
        quesNum=qid;
        quesDesc=qDesc;
        options=qOps;
    }

}
