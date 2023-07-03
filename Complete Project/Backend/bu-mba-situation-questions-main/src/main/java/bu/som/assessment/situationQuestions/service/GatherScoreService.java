package bu.som.assessment.situationQuestions.service;

import bu.som.assessment.situationQuestions.constants.SQScoreComments;
import bu.som.assessment.situationQuestions.dto.SQRankScoreDto;
import bu.som.assessment.situationQuestions.dto.SQRateScoreDto;
import bu.som.assessment.situationQuestions.entity.SQRankScore;
import bu.som.assessment.situationQuestions.entity.SQRateScore;
import bu.som.assessment.situationQuestions.repository.SQRankRepository;
import bu.som.assessment.situationQuestions.repository.SQRateRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
@Slf4j
public class GatherScoreService {
    @Autowired
    private SQRankRepository sqRankRepository;

    @Autowired
    private SQRateRepository sqRateRepository;

    public SQRankScoreDto gatherRankScore(String bingNumber)throws SQLException {

        if (sqRankRepository.existsById(bingNumber)) {
            return populateSQRankScore(sqRankRepository.findById(bingNumber).get());
        } else {
            log.error("Score for B-Number : " + bingNumber + " are not available yet!");
        }
        return null;
    }
    public SQRateScoreDto gatherRateScore(String bingNumber)throws SQLException {

        if (sqRateRepository.existsById(bingNumber)) {
            return populateSQRateScore(sqRateRepository.findById(bingNumber).get());
        } else {
            log.error("Score for B-Number : " + bingNumber + " are not available yet!");
        }
        return null;
    }
    private SQRankScoreDto populateSQRankScore(SQRankScore scores) {
        SQRankScoreDto scoreDto = new SQRankScoreDto();

        scoreDto.setBingNumber(scores.getBingNumber());

        scoreDto.setAvg4ItemScore(scores.getAvg4itemRankScore());

        scoreDto.setAvg5ItemScore(scores.getAvg5itemRankScore());

        scoreDto.setAvg6ItemScore(scores.getAvg6itemRankScore());

        scoreDto.setRankDecisionScore(scores.getRankDecisionScore());

        scoreDto.setConvertedRankDecisionScore(scores.getConvertedRankDecisionsScore());
        scoreDto.setJudgementScoreComment(getScoreComment("JUDGEMENT", scoreDto.getConvertedRankDecisionScore()));


        return scoreDto;
    }
    private SQRateScoreDto populateSQRateScore(SQRateScore scores) {
        SQRateScoreDto scoreDto = new SQRateScoreDto();

        scoreDto.setBingNumber(scores.getBingNumber());

        scoreDto.setDesirabilityDecisionsScore(scores.getDesirabilityDecisionsScore());

        scoreDto.setConvertedDesirabilityDecisionsScore(scores.getConvertedDesirabilityDecisionsScore());
        scoreDto.setConsiderationOfAlternativesScoreComment(getScoreComment("CONSIDERATION_OF_ALTERNATIVES", scoreDto.getConvertedDesirabilityDecisionsScore()));


        return scoreDto;
    }

    private String getScoreComment(String sqComment, double score) {

        if (sqComment.equalsIgnoreCase("JUDGEMENT")) {
            if (score >= 1 && score <= 4) {
                return SQScoreComments.JUDGEMENT_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  SQScoreComments.JUDGEMENT_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return SQScoreComments.JUDGEMENT_SCORE_8TO10;
            } else {
                return "No Score available for JUDGEMENT category";
            }
        }

        if (sqComment.equalsIgnoreCase("CONSIDERATION_OF_ALTERNATIVES")) {
            if (score >= 1 && score <= 4) {
                return SQScoreComments.CONSIDERATION_OF_ALTERNATIVES_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  SQScoreComments.CONSIDERATION_OF_ALTERNATIVES_5TO7;
            } else if (score >= 8 && score <= 10) {
                return SQScoreComments.CONSIDERATION_OF_ALTERNATIVES_8TO10;
            } else {
                return "No Score available for CONSIDERATION_OF_ALTERNATIVES category";
            }
        }

        return "No Scores are available!!";
    }
}
