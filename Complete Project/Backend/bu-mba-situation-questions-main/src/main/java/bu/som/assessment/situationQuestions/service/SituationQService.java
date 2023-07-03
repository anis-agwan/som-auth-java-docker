package bu.som.assessment.situationQuestions.service;

import bu.som.assessment.situationQuestions.dto.SQQuestionDto;
import bu.som.assessment.situationQuestions.dto.SituationQuestionDTO;
import bu.som.assessment.situationQuestions.entity.SQQuestion;
import bu.som.assessment.situationQuestions.entity.SituationQuestion;
import bu.som.assessment.situationQuestions.repository.SituationQRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SituationQService {
    @Autowired
    SituationQRepo sqRepo;


    public String postingQ(SituationQuestionDTO sqDTO) {
        SituationQuestion sq = new SituationQuestion();

        sq.setSituationNumber(sqDTO.getSNum());
        sq.setSituationText(sqDTO.getSText());
        sq.setPrevSituationNumber(sqDTO.getPSNum());
        sq.setPrevSituationText(sqDTO.getPSText());
        sq.setRank1Text(sqDTO.getR1Text());
        sq.setRank2Text(sqDTO.getR2Text());
        sq.setRank3Text(sqDTO.getR3Text());
        sq.setRank4Text(sqDTO.getR4Text());
        sq.setRank5Text(sqDTO.getR5Text());
        sq.setRank6Text(sqDTO.getR6Text());

        sqRepo.save(sq);

        return "Success";
    }


    public String postAllQuestions(List<SituationQuestion> sq) {

        sqRepo.saveAll(sq);
        return "All questions posted";
    }

    public List<SituationQuestionDTO> getSituationQQuestionList() {
        List<SituationQuestion> questionList = sqRepo.findAll();
        List<SituationQuestionDTO> questionDTOS = new ArrayList<>();

        for(SituationQuestion ques: questionList) {

            Long prevSituationNumber = ques.getPrevSituationNumber();
            Long prevSituationNumberValue = prevSituationNumber != null ? prevSituationNumber : 0;
            SituationQuestionDTO sqQ = new SituationQuestionDTO(ques.getSituationNumber(), ques.getSituationText(), ques.getPrevSituationNumber(),ques.getPrevSituationText(), ques.getRank1Text(), ques.getRank2Text(), ques.getRank3Text(), ques.getRank4Text(), ques.getRank5Text(), ques.getRank6Text());

            questionDTOS.add(sqQ);
        }

        if (questionList.size() != 0)
            return questionDTOS;
        return null;
    }
}
