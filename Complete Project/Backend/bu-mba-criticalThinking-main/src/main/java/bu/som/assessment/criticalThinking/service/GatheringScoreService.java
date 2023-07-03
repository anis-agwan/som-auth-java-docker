package bu.som.assessment.criticalThinking.service;

import bu.som.assessment.criticalThinking.constants.CriticalThinkingComments;
import bu.som.assessment.criticalThinking.dto.CTScoreDTO;
import bu.som.assessment.criticalThinking.entity.CriticalThinkingScores;
import bu.som.assessment.criticalThinking.repository.CriticalThinkingRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
@Slf4j
public class GatheringScoreService {
    @Autowired
    private CriticalThinkingRepository criticalThinkingRepository;
    public CTScoreDTO gatherScore(String bingNumber)throws SQLException {

        if (criticalThinkingRepository.existsById(bingNumber)) {
            return populateCTScoreDto(criticalThinkingRepository.findById(bingNumber).get());
        } else {
            log.error("Score for B-Number : " + bingNumber + " are not available yet!");
        }
        return null;
    }
    private CTScoreDTO populateCTScoreDto(CriticalThinkingScores scores) {
        CTScoreDTO scoreDto = new CTScoreDTO();

        scoreDto.setBingNumber(scores.getBingNumber());

        // Populate Sec1 Analysis Score
        scoreDto.setSec1AnalysisScore(scores.getSec1AnalysisScore());
        scoreDto.setDecisivenessScoreComment(getScoreComment("DECISIVENESS", scoreDto.getSec1AnalysisScore()));

        // Populate Sec2 Connections Score
        scoreDto.setSec2ConnectionsScore(scores.getSec2ConnectionsScore());
        scoreDto.setLogicalReasoningScoreComment(getScoreComment("LOGICAL_REASONING", scoreDto.getSec2ConnectionsScore()));

        // Populate Sec3 Depth Score
        scoreDto.setSec3DepthScore(scores.getSec3DepthScore());
        scoreDto.setAnalysesScoreComment(getScoreComment("ANALYSES", scoreDto.getSec3DepthScore()));
        return scoreDto;
    }

    private String getScoreComment(String ctComment, int score) {

        if (ctComment.equalsIgnoreCase("DECISIVENESS")) {
            if (score >= 1 && score <= 4) {
                return CriticalThinkingComments.DECISIVENESS_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  CriticalThinkingComments.DECISIVENESS_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return CriticalThinkingComments.DECISIVENESS_SCORE_8TO10;
            } else {
                return "No Score available for DECISIVENESS category";
            }
        }

        if (ctComment.equalsIgnoreCase("LOGICAL_REASONING")) {
            if (score >= 1 && score <= 4) {
                return CriticalThinkingComments.LOGICAL_REASONING_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  CriticalThinkingComments.LOGICAL_REASONING_5TO7;
            } else if (score >= 8 && score <= 10) {
                return CriticalThinkingComments.LOGICAL_REASONING_8TO10;
            } else {
                return "No Score available for LOGICAL_REASONING category";
            }
        }

        if (ctComment.equalsIgnoreCase("ANALYSES")) {
            if (score >= 1 && score <= 4) {
                return CriticalThinkingComments.ANALYSES_SCORE_1TO4;
            } else if (score >= 5 && score <= 7) {
                return  CriticalThinkingComments.ANALYSES_SCORE_5TO7;
            } else if (score >= 8 && score <= 10) {
                return CriticalThinkingComments.ANALYSES_SCORE_8TO10;
            } else {
                return "No Score available for ANALYSES category";
            }
        }

        return "No Scores are available!!";
    }
}
