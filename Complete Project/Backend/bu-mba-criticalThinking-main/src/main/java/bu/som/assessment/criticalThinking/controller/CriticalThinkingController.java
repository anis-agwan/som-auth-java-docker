package bu.som.assessment.criticalThinking.controller;

import bu.som.assessment.criticalThinking.dto.CTQuestionDTO;

import bu.som.assessment.criticalThinking.dto.CTScoreDTO;
import bu.som.assessment.criticalThinking.entity.CriticalThinkingQuestions;
import bu.som.assessment.criticalThinking.entity.CriticalThinkingScores;
import bu.som.assessment.criticalThinking.service.CriticalThinkingScoreCalculationService;
import bu.som.assessment.criticalThinking.service.GatheringScoreService;
import bu.som.assessment.criticalThinking.service.QuestionService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/critical-thinking")
public class CriticalThinkingController {

    private static final Logger log = LoggerFactory.getLogger(CriticalThinkingController.class);

    @Autowired
    CriticalThinkingScoreCalculationService calculationService;

    @Autowired
    GatheringScoreService scoresService;

    @Autowired
    QuestionService questionListService;

    @GetMapping("/getData")
    public List<CriticalThinkingScores> calculateCTScore() {
        try {
            return calculationService.getCriticalThinking();
        } catch(SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @GetMapping("/getDataById/{id}")
    public Optional<CriticalThinkingScores> getData(@PathVariable("id") String id) {
        try {
            return calculationService.getCTDataById(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }


    @PostMapping("/ctData")
    public String saveCTData(@RequestBody CriticalThinkingScores ctData) {

        try {
            return calculationService.saveCTData(ctData);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @GetMapping("/getScores/{id}")
    public CTScoreDTO getScores(@PathVariable("id") String id) {
        try {
            return scoresService.gatherScore(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }

        return null;
    }

    @PostMapping("/postQuestion")
    public String postQuestion(@RequestBody CriticalThinkingQuestions ctQue) {

        return questionListService.postQuestion(ctQue);

    }
    @GetMapping("getQuestions")
    public List<CTQuestionDTO> getQuestions() {
        return questionListService.getCTQuestionList();
    }

    @PostMapping("/postAllQuestions")
    public String postQuestion(@RequestBody List<CriticalThinkingQuestions> questions) {
        return questionListService.postAllQuestions(questions);
    }

}
