package bu.som.assessment.personalBelief.service;

import bu.som.assessment.personalBelief.constants.PersonalBeliefScoreValues;
import bu.som.assessment.personalBelief.dto.PersonalBeliefScoreDto;
import bu.som.assessment.personalBelief.entity.PersonalBelief;
import bu.som.assessment.personalBelief.repository.PersonalBeliefRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
@Slf4j
public class GatheringScoresService {

    @Autowired
    private PersonalBeliefRepository personalBeliefRepository;

    public PersonalBeliefScoreDto gatherScore(String bingNumber) throws SQLException {

        if (personalBeliefRepository.existsById(bingNumber)) {
            return populatePersonalBeliefScoreDto(personalBeliefRepository.findById(bingNumber).get());
        } else {
            log.error("Score for B-Number : " + bingNumber + " are not available yet!");
        }
        return null;
    }

    private PersonalBeliefScoreDto populatePersonalBeliefScoreDto(PersonalBelief pbData) {
        PersonalBeliefScoreDto scoreDto = new PersonalBeliefScoreDto();

        scoreDto.setBingNumber(pbData.getBingNumber());

        // Populate Open to Change score and comment
        scoreDto.setOpenToChangeScore(pbData.getPbOpenToChangeScore());
        scoreDto.setOpenToChangeScoreComment(getScoreComment("OPEN_TO_CHANGE", scoreDto.getOpenToChangeScore()));

        // Populate Coaching score and comment
        scoreDto.setCoachingScore(pbData.getPbCoachingScore());
        scoreDto.setCoachingScoreComment(getScoreComment("COACHING", scoreDto.getCoachingScore()));

        // Populate Planning and Organizing score and comment
        scoreDto.setPlanningAndOrganizingScore(pbData.getPbPlanningOrganizingScore());
        scoreDto.setPlanningAndOrganizingScoreComment(getScoreComment("PLANNING_AND_ORGANIZING", scoreDto.getPlanningAndOrganizingScore()));

        // Populate Empowering score and comment
        scoreDto.setEmpoweringScore(pbData.getPbEmpoweringScore());
        scoreDto.setEmpoweringScoreComment(getScoreComment("EMPOWERMENT", scoreDto.getEmpoweringScore()));

        // Populate Teamwork score and comment
        scoreDto.setTeamworkScore(pbData.getPbTeamworkScore());
        scoreDto.setTeamworkScoreComment(getScoreComment("TEAMWORK", scoreDto.getTeamworkScore()));

        return scoreDto;
    }

    private String getScoreComment(String personalBeliefType, int score) {

        if (personalBeliefType.equalsIgnoreCase("OPEN_TO_CHANGE")) {
            if (score >= 1 && score <= 4) {
                return PersonalBeliefScoreValues.OPEN_TO_CHANGE_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  PersonalBeliefScoreValues.OPEN_TO_CHANGE_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return PersonalBeliefScoreValues.OPEN_TO_CHANGE_SCORE_8TO10;
            } else {
                return "No Score available for OPEN_TO_CHANGE category";
            }
        }

        if (personalBeliefType.equalsIgnoreCase("COACHING")) {
            if (score >= 1 && score <= 4) {
                return PersonalBeliefScoreValues.COACHING_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  PersonalBeliefScoreValues.COACHING_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return PersonalBeliefScoreValues.COACHING_SCORE_8TO10;
            } else {
                return "No Score available for COACHING category";
            }
        }

        if (personalBeliefType.equalsIgnoreCase("PLANNING_AND_ORGANIZING")) {
            if (score >= 1 && score <= 4) {
                return PersonalBeliefScoreValues.PLANNING_AND_ORGANIZING_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  PersonalBeliefScoreValues.PLANNING_AND_ORGANIZING_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return PersonalBeliefScoreValues.PLANNING_AND_ORGANIZING_SCORE_8TO10;
            } else {
                return "No Score available for PLANNING_AND_ORGANIZING category";
            }
        }

        if (personalBeliefType.equalsIgnoreCase("EMPOWERMENT")) {
            if (score >= 1 && score <= 4) {
                return PersonalBeliefScoreValues.EMPOWERMENT_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  PersonalBeliefScoreValues.EMPOWERMENT_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return PersonalBeliefScoreValues.EMPOWERMENT_SCORE_8TO10;
            } else {
                return "No Score available for EMPOWERMENT category";
            }
        }

        if (personalBeliefType.equalsIgnoreCase("TEAMWORK")) {
            if (score >= 1 && score <= 4) {
                return PersonalBeliefScoreValues.TEAMWORK_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  PersonalBeliefScoreValues.TEAMWORK_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return PersonalBeliefScoreValues.TEAMWORK_SCORE_8TO10;
            } else {
                return "No Score available for TEAMWORK category";
            }
        }

        return "No Scores are available!!";
    }
}
