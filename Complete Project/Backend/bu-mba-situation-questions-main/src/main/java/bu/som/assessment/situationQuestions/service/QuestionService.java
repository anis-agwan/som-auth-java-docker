package bu.som.assessment.situationQuestions.service;

import bu.som.assessment.situationQuestions.dto.SQQuestionDto;
import bu.som.assessment.situationQuestions.dto.SituationQuestionDTO;
import bu.som.assessment.situationQuestions.entity.SQQuestion;
import bu.som.assessment.situationQuestions.entity.SituationQuestion;
import bu.som.assessment.situationQuestions.repository.SQQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {

    @Autowired
    SQQuestionRepository questionRepository;

    public List<SQQuestionDto> getSQQuestionList() {
        List<SQQuestion> questionList = questionRepository.findAll();
        List<SQQuestionDto> questionDTOS = new ArrayList<>();

        for(SQQuestion ques: questionList) {

            Integer prevSituationNumber = ques.getPrevSituationNumber();
            int prevSituationNumberValue = prevSituationNumber != null ? prevSituationNumber : 0;
            SQQuestionDto sqQ = new SQQuestionDto(ques.getSituationNumber(), ques.getSituationText(), prevSituationNumberValue, ques.getPrevSituationText() != null ? ques.getPrevSituationText() : "N/A", ques.getRank1text(), ques.getRank2text(),
                    ques.getRank3text(), ques.getRank4text(), ques.getRank5text() != null ? ques.getRank5text() : "N/A", ques.getRank6text() != null ? ques.getRank6text() : "N/A");

            questionDTOS.add(sqQ);
        }

        if (questionList.size() != 0)
            return questionDTOS;
        return null;
    }

    public String postQuestion(SQQuestion question) {
        System.out.println(question);
        questionRepository.save(question);
        return "Posted Question";
    }

    public String postAllQuestions(List<SQQuestion> questions) {
        questionRepository.saveAll(questions);
        return "All questions posted";
    }


}
