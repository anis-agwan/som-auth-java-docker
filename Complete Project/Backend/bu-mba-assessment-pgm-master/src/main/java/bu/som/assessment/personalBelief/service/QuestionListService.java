package bu.som.assessment.personalBelief.service;

import bu.som.assessment.personalBelief.dto.PBQuestionDTO;
import bu.som.assessment.personalBelief.entity.PBQuestions;
import bu.som.assessment.personalBelief.repository.PBQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionListService {

    @Autowired
    PBQuestionRepository questionRepository;

    public List<PBQuestionDTO> getPBQuestionList() {
        List<PBQuestions> questionList = questionRepository.findAll();
        List<PBQuestionDTO> questionDTOS = new ArrayList<>();

        for(PBQuestions ques: questionList) {
//            System.out.println(ques);
            Map<String, String> op1 = new HashMap<>() {{
                put("value","Strongly Disagree");
                put("idx", Integer.toString(ques.getStronglyDisAgree()));
            }};
            Map<String, String> op2 = new HashMap<>() {{
                put("value","Disagree");
                put("idx", Integer.toString(ques.getDisAgree()));
            }};
            Map<String, String> op3 = new HashMap<>() {{
                put("value","Neutral");
                put("idx", Integer.toString(ques.getNeutral()));
            }};
            Map<String, String> op4 = new HashMap<>() {{
                put("value","Agree");
                put("idx", Integer.toString(ques.getAgree()));
            }};
            Map<String, String> op5 = new HashMap<>() {{
                put("value","Strongly Agree");
                put("idx", Integer.toString(ques.getStronglyAgree()));
            }};

            List<Map<String, String>> options = Arrays.asList(op1, op2, op3, op4, op5);


            PBQuestionDTO pbq = new PBQuestionDTO(ques.getQuestionNumber(), ques.getQuestionDescription(), options);
            questionDTOS.add(pbq);
        }

        if (questionList.size() != 0)
            return questionDTOS;
        return null;
    }

    public String postQuestion(PBQuestions question) {
        questionRepository.save(question);
        return "Posted Question";
    }

    public String postAllQuestions(List<PBQuestions> questions) {
        questionRepository.saveAll(questions);
        return "All questions posted";
    }

}
