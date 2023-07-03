package bu.som.assessment.personalBelief.controller;

import bu.som.assessment.personalBelief.dto.PBQuestionDTO;
import bu.som.assessment.personalBelief.dto.PersonalBeliefDto;
import bu.som.assessment.personalBelief.dto.PersonalBeliefScoreDto;
import bu.som.assessment.personalBelief.entity.PBQuestions;
import bu.som.assessment.personalBelief.entity.PersonalBelief;
import bu.som.assessment.personalBelief.service.GatheringScoresService;
import bu.som.assessment.personalBelief.service.PersonalBeliefScoreCalculationService;
import bu.som.assessment.personalBelief.service.QuestionListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/pb")
@Slf4j
public class PersonalBeliefController {

    @Autowired
    PersonalBeliefScoreCalculationService scoreCalculationService;

    @Autowired
    QuestionListService questionListService;

    @Autowired
    GatheringScoresService scoresService;

    @GetMapping("/getData")
    public List<PersonalBelief> calculatePBScore() {
        try {
            return scoreCalculationService.getPersonalBeliefs();
        } catch(SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @GetMapping("/getDataById/{id}")
    public Optional<PersonalBelief> getData(@PathVariable("id") String id) {
        try {
            return scoreCalculationService.getPBDataById(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }
        return null;
    }

    @PostMapping("/pbData")
    public String savePBData(@RequestBody PersonalBeliefDto personalBeliefDto) {
        try {
            return scoreCalculationService.savePBData(personalBeliefDto);
        } catch (SQLException e) {
            log.error(e.toString());
        }

        return null;
    }

    @GetMapping("/getScores/{id}")
    public PersonalBeliefScoreDto getScores(@PathVariable("id") String id) {
        try {
            return scoresService.gatherScore(id);
        } catch (SQLException e) {
            log.error(e.toString());
        }

        return null;
    }

    @GetMapping("getQuestions")
    public List<PBQuestionDTO> getQuestions() {
        return questionListService.getPBQuestionList();
    }

    @PostMapping("postQuestion")
    public String postQuestion(@RequestBody PBQuestions pbQuestionDTO) {
        return questionListService.postQuestion(pbQuestionDTO);

    }

    @PostMapping("postAllQuestions")
    public String postQuestion(@RequestBody List<PBQuestions> questions) {
        return questionListService.postAllQuestions(questions);
    }

}