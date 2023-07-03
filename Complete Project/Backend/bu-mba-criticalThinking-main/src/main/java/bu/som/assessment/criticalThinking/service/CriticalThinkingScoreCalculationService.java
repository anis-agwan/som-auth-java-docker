package bu.som.assessment.criticalThinking.service;

import bu.som.assessment.criticalThinking.constants.DefaultCriticalThinkingARValue;

import bu.som.assessment.criticalThinking.entity.CriticalThinkingScores;
import bu.som.assessment.criticalThinking.repository.CriticalThinkingRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class CriticalThinkingScoreCalculationService {

    @Autowired
    CriticalThinkingRepository ctRepository;

    public List<CriticalThinkingScores> getCriticalThinking() throws SQLException {
        return ctRepository.findAll();
    }


    public Optional<CriticalThinkingScores> getCTDataById(String id) throws SQLException {
        return ctRepository.findById(id);
    }


    public String saveCTData(CriticalThinkingScores scores) throws SQLException {

        ctRepository.save(calculateCTScore(scores));

        return "Critical Thinking Scores updated";
    }


    private CriticalThinkingScores calculateCTScore(CriticalThinkingScores ctSco) {

        //calculate section 1 scores
        calculateSection1Score(ctSco);

        //calculate section 2 scores
        calculateSection2Score(ctSco);

        //calculate section 3 scores
        calculateSection3Score(ctSco);

        return ctSco;
    }



    private void calculateSection1Score(CriticalThinkingScores ct1) {

        // Gather Difference between AR and SR values
        int que1DiffValue = Math.abs(ct1.getQue1() - DefaultCriticalThinkingARValue.SEC11AR);
        int que2DiffValue = Math.abs(ct1.getQue2() - DefaultCriticalThinkingARValue.SEC12AR);
        int que3DiffValue = Math.abs(ct1.getQue3() - DefaultCriticalThinkingARValue.SEC13AR);
        int que4DiffValue = Math.abs(ct1.getQue4() - DefaultCriticalThinkingARValue.SEC14AR);
        int que5DiffValue = Math.abs(ct1.getQue5() - DefaultCriticalThinkingARValue.SEC15AR);
        int que6DiffValue = Math.abs(ct1.getQue6() - DefaultCriticalThinkingARValue.SEC16AR);

        // Update Difference Values
        ct1.setQue1Diff(que1DiffValue);
        ct1.setQue2Diff(que2DiffValue);
        ct1.setQue3Diff(que3DiffValue);
        ct1.setQue4Diff(que4DiffValue);
        ct1.setQue5Diff(que5DiffValue);
        ct1.setQue6Diff(que6DiffValue);

        // Update Participant Score
        int sec1ParticipantScoreValue = que1DiffValue + que2DiffValue + que3DiffValue + que4DiffValue + que5DiffValue + que6DiffValue;
        ct1.setSec1ParticipantScore(sec1ParticipantScoreValue);

        // Update Discrepancy Score
        int sec1DiscrepancyScoreValue = 12 - sec1ParticipantScoreValue;
        ct1.setSec1DiscrepancyScore(sec1DiscrepancyScoreValue);

        // Update Analysis Score
        ct1.setSec1AnalysisScore(calculateAnalysisScore(sec1DiscrepancyScoreValue));
    }

    private int calculateAnalysisScore(double discrepancy) {
        if (discrepancy > 0.99 && discrepancy < 2) return 1;
        else if (discrepancy > 1.99 && discrepancy < 3) return 2;
        else if (discrepancy > 2.99 && discrepancy < 4) return 3;
        else if (discrepancy > 3.99 && discrepancy < 5) return 4;
        else if (discrepancy > 4.99 && discrepancy < 6) return 5;
        else if (discrepancy > 5.99 && discrepancy < 7) return 6;
        else if (discrepancy > 6.99 && discrepancy < 8) return 7;
        else if (discrepancy > 7.99 && discrepancy < 9) return 8;
        else if (discrepancy > 8.99 && discrepancy < 10) return 9;
        else if (discrepancy > 9.99 && discrepancy < 12) return 10;
        else return 0;
    }

    private void calculateSection2Score(CriticalThinkingScores ct1) {

        // Gather Difference between AR and SR values
        int que7DiffValue = Math.abs(ct1.getQue7() - DefaultCriticalThinkingARValue.SEC27AR);
        int que8DiffValue = Math.abs(ct1.getQue8() - DefaultCriticalThinkingARValue.SEC28AR);
        int que9DiffValue = Math.abs(ct1.getQue9() - DefaultCriticalThinkingARValue.SEC29AR);
        int que10DiffValue = Math.abs(ct1.getQue10() - DefaultCriticalThinkingARValue.SEC210AR);
        int que11DiffValue = Math.abs(ct1.getQue11() - DefaultCriticalThinkingARValue.SEC211AR);

        // Update Difference Values
        ct1.setQue7Diff(que7DiffValue);
        ct1.setQue8Diff(que8DiffValue);
        ct1.setQue9Diff(que9DiffValue);
        ct1.setQue10Diff(que10DiffValue);
        ct1.setQue11Diff(que11DiffValue);

        // Update Participant Score
        int sec2ParticipantScoreValue = que7DiffValue + que8DiffValue + que9DiffValue + que10DiffValue + que11DiffValue;
        ct1.setSec2ParticipantScore(sec2ParticipantScoreValue);

        // Update Discrepancy Score
        int sec2DiscrepancyScoreValue = 7 - sec2ParticipantScoreValue;
        ct1.setSec2DiscrepancyScore(sec2DiscrepancyScoreValue);

        // Update Connections Score
        ct1.setSec2ConnectionsScore(calculateConnectionsScore(sec2DiscrepancyScoreValue));

    }

    private int calculateConnectionsScore(double discrepancy) {
        if (discrepancy > 0.99 && discrepancy < 3) return 1;
        else if (discrepancy > 2.99 && discrepancy < 3.5) return 2;
        else if (discrepancy > 3.49 && discrepancy < 4) return 3;
        else if (discrepancy > 3.99 && discrepancy < 4.5) return 4;
        else if (discrepancy > 4.49 && discrepancy < 5) return 5;
        else if (discrepancy > 4.99 && discrepancy < 5.5) return 6;
        else if (discrepancy > 5.49 && discrepancy < 6) return 7;
        else if (discrepancy > 5.99 && discrepancy < 6.5) return 8;
        else if (discrepancy > 6.49 && discrepancy < 7) return 9;
        else if (discrepancy == 7) return 10;
        else return 0;
    }

    private void calculateSection3Score(CriticalThinkingScores ct1) {

        // Gather Difference between AR and SR values
        int que12DiffValue = Math.abs(ct1.getQue12() - DefaultCriticalThinkingARValue.SEC312AR);
        int que13DiffValue = Math.abs(ct1.getQue13() - DefaultCriticalThinkingARValue.SEC313AR);
        int que14DiffValue = Math.abs(ct1.getQue14() - DefaultCriticalThinkingARValue.SEC314AR);
        int que15DiffValue = Math.abs(ct1.getQue15() - DefaultCriticalThinkingARValue.SEC315AR);
        int que16DiffValue = Math.abs(ct1.getQue16() - DefaultCriticalThinkingARValue.SEC316AR);
        int que17DiffValue = Math.abs(ct1.getQue17() - DefaultCriticalThinkingARValue.SEC317AR);
        int que18DiffValue = Math.abs(ct1.getQue18() - DefaultCriticalThinkingARValue.SEC318AR);
        int que19DiffValue = Math.abs(ct1.getQue19() - DefaultCriticalThinkingARValue.SEC319AR);
        int que20DiffValue = Math.abs(ct1.getQue20() - DefaultCriticalThinkingARValue.SEC320AR);

        // Update Difference Values
        ct1.setQue12Diff(que12DiffValue);
        ct1.setQue13Diff(que13DiffValue);
        ct1.setQue14Diff(que14DiffValue);
        ct1.setQue15Diff(que15DiffValue);
        ct1.setQue16Diff(que16DiffValue);
        ct1.setQue17Diff(que17DiffValue);
        ct1.setQue18Diff(que18DiffValue);
        ct1.setQue19Diff(que19DiffValue);
        ct1.setQue20Diff(que20DiffValue);

        // Update Participant Score
        int sec3ParticipantScoreValue = que12DiffValue + que13DiffValue + que14DiffValue +
                que15DiffValue + que16DiffValue + que17DiffValue +
                que18DiffValue + que19DiffValue + que20DiffValue;

        ct1.setSec3ParticipantScore(sec3ParticipantScoreValue);

        // Update Discrepancy Score
        int sec3DiscrepancyScoreValue = 19 - sec3ParticipantScoreValue;
        ct1.setSec3DiscrepancyScore(sec3DiscrepancyScoreValue);

        // Update Depth Score
        ct1.setSec3DepthScore(calculateDepthScore(sec3DiscrepancyScoreValue));
    }

    private int calculateDepthScore(double discrepancy) {
        if (discrepancy > 0.99 && discrepancy < 3) return 1;
        else if (discrepancy > 2.99 && discrepancy < 5) return 2;
        else if (discrepancy > 4.99 && discrepancy < 7) return 3;
        else if (discrepancy > 6.99 && discrepancy < 9) return 4;
        else if (discrepancy > 8.99 && discrepancy < 11) return 5;
        else if (discrepancy > 10.99 && discrepancy < 13) return 6;
        else if (discrepancy > 12.99 && discrepancy < 15) return 7;
        else if (discrepancy > 14.99 && discrepancy < 17) return 8;
        else if (discrepancy > 16.99 && discrepancy < 19) return 9;
        else if (discrepancy == 19) return 10;
        else return 0;
    }
}
