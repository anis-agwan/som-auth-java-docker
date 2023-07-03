package bu.som.assessment.criticalThinking.service;

import bu.som.assessment.criticalThinking.dto.CTQuestionDTO;
import bu.som.assessment.criticalThinking.entity.CriticalThinkingQuestions;
import bu.som.assessment.criticalThinking.repository.CriticalThinkingQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {

    public List<CTQuestionDTO> getCTQuestionList() {
        List<CriticalThinkingQuestions> questionList = questionRepository.findAll();
        List<CTQuestionDTO> questionDTOS = new ArrayList<>();

        for(CriticalThinkingQuestions ques: questionList) {
//            System.out.println(ques);
            Map<String, String> op1 = new HashMap<>() {{
                put("value","Choice A");
                put("idx", Integer.toString(ques.getChoiceA()));
            }};
            Map<String, String> op2 = new HashMap<>() {{
                put("value","Choice B");
                put("idx", Integer.toString(ques.getChoiceB()));
            }};
            Map<String, String> op3 = new HashMap<>() {{
                put("value","Choice C");
                put("idx", Integer.toString(ques.getChoiceC()));
            }};


            List<Map<String, String>> options = Arrays.asList(op1, op2, op3);


//            CTQuestionDTO pbq = new CTQuestionDTO(ques.getQuestionNumber(), ques.getQuestionDescription(), ques.getSectionNumber(),
//                    ques.getOptionDescription(), ques.getSectionDescription(), options);
            CTQuestionDTO pbq = new CTQuestionDTO(ques.getQuestionNumber(),
                    ques.getQuestionDescription(), ques.getQuestionOp1(), ques.getQuestionOp2(),
                    ques.getSectionNumber(),
                    ques.getOptionDescription(), ques.getAnswerOp1(), ques.getAnswerOp2(), ques.getAnswerOp3(),
                    ques.getSectionDescription(), options
                    );
            questionDTOS.add(pbq);

        }

        if (questionList.size() != 0)
            return questionDTOS;
        return null;
    }
    @Autowired
    CriticalThinkingQuestionRepository questionRepository;
    public String postQuestion(CriticalThinkingQuestions question) {
        questionRepository.save(question);
        return "Posted Question";
    }

    public String postAllQuestions(List<CriticalThinkingQuestions> questions) {
        questionRepository.saveAll(questions);
        return "All questions posted";
    }

}
