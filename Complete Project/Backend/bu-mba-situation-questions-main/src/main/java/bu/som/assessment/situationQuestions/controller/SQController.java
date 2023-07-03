package bu.som.assessment.situationQuestions.controller;

import bu.som.assessment.situationQuestions.dto.*;
import bu.som.assessment.situationQuestions.entity.SituationQuestion;
import bu.som.assessment.situationQuestions.service.*;
import bu.som.assessment.situationQuestions.dto.SQGetScoreDto;
import bu.som.assessment.situationQuestions.dto.SQQuestionDto;
import bu.som.assessment.situationQuestions.dto.SQRankScoreDto;
import bu.som.assessment.situationQuestions.dto.SQRateScoreDto;
import bu.som.assessment.situationQuestions.entity.SQQuestion;
import bu.som.assessment.situationQuestions.entity.SQRankScore;
import bu.som.assessment.situationQuestions.entity.SQRateScore;
import bu.som.assessment.situationQuestions.service.GatherScoreService;
import bu.som.assessment.situationQuestions.service.QuestionService;
import bu.som.assessment.situationQuestions.service.SQRankScoreCalculationService;
import bu.som.assessment.situationQuestions.service.SQRateScoreCalculationService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/sq")
@CrossOrigin
@Slf4j
public class SQController {
    @Autowired
    SQRankScoreCalculationService rankCalculationService;

    @Autowired
    SQRateScoreCalculationService rateCalculationService;

    @Autowired
    GatherScoreService gatherScore;

    @Autowired
    QuestionService questionService;

    @Autowired
    SituationQService sqService;

    @GetMapping("/getRankData")
    public List<SQRankScore> calculateRankScore() {
        try {
            return rankCalculationService.getSQRankScores();
        } catch(SQLException e) {
            log.error(e.toString());
        }
        return null;
    }
    @GetMapping("/getRateData")
    public List<SQRateScore> calculateRateScore() {
        try {
            return rateCalculationService.getSQRankScores();
        } catch(SQLException e) {
            log.error(e.toString());
        }
        return null;
    }
    @GetMapping("/getRankDataById/{id}")
    public Optional<SQRankScore> getRankData(@PathVariable("id") String id) {
        try {
            return rankCalculationService.getSQRankDataById(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }
    @GetMapping("/getRateDataById/{id}")
    public Optional<SQRateScore> getRateData(@PathVariable("id") String id) {
        try {
            return rateCalculationService.getSQRateDataById(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @PostMapping("/sqData")
    public ResponseEntity<String> saveSQData(@RequestBody SQGetScoreDto sqData) {
        try {
            String rankResult = rankCalculationService.saveSQRankData(sqData);
            String rateResult = rateCalculationService.saveSQRateData(sqData);

            // Combine the results or perform any necessary operations
            String combinedResult = rankResult + " " + rateResult;

            return ResponseEntity.ok(combinedResult);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @GetMapping("/getRankScores/{id}")
    public SQRankScoreDto getRankScores(@PathVariable("id") String id) {
        try {
            return gatherScore.gatherRankScore(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }

        return null;
    }
    @GetMapping("/getRateScores/{id}")
    public SQRateScoreDto getRateScores(@PathVariable("id") String id) {
        try {
            return gatherScore.gatherRateScore(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }

        return null;
    }
    @PostMapping("/postQuestion")
    public String postQuestion(@RequestBody SQQuestion sqQue) {

        return questionService.postQuestion(sqQue);

    }

    @PostMapping("postingQ")
    public String postingQ(@RequestBody SituationQuestionDTO sqDTO) {
        System.out.println(sqDTO);
        return sqService.postingQ(sqDTO);
    }

    @GetMapping("/getQuestions")
    public List<SQQuestionDto> getQuestions() {

        return questionService.getSQQuestionList();
    }

    @GetMapping("/getSQuestions")
    public List<SituationQuestionDTO> getSQuestions() {

        return sqService.getSituationQQuestionList();
    }

    @PostMapping("/postAllQuestions")
    public String postQuestion(@RequestBody List<SQQuestion> questions) {
        return questionService.postAllQuestions(questions);
    }

    @PostMapping("postingAllQ")
    public String postingAll(@RequestBody List<SituationQuestion> sq) {
        return sqService.postAllQuestions(sq);
    }
}
