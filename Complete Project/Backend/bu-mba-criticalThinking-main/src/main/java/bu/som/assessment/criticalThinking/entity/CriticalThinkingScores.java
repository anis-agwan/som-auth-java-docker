package bu.som.assessment.criticalThinking.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ct_score", schema = "critical_thinking")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CriticalThinkingScores {

    @Id
    @Column(name = "CT_BNUMBER")
    private String bingNumber;

    @Column(name = "CT_FIRST_NAME")
    private String firstName;

    @Column(name = "CT_LAST_NAME")
    private String lastName;

    @Column(name = "QUE_1")
    private int que1;

    @Column(name = "QUE_2")
    private int que2;

    @Column(name = "QUE_3")
    private int que3;

    @Column(name = "QUE_4")
    private int que4;

    @Column(name = "QUE_5")
    private int que5;

    @Column(name = "QUE_6")
    private int que6;

    @Column(name = "QUE_7")
    private int que7;

    @Column(name = "QUE_8")
    private int que8;

    @Column(name = "QUE_9")
    private int que9;

    @Column(name = "QUE_10")
    private int que10;

    @Column(name = "QUE_11")
    private int que11;

    @Column(name = "QUE_12")
    private int que12;

    @Column(name = "QUE_13")
    private int que13;

    @Column(name = "QUE_14")
    private int que14;

    @Column(name = "QUE_15")
    private int que15;

    @Column(name = "QUE_16")
    private int que16;

    @Column(name = "QUE_17")
    private int que17;

    @Column(name = "QUE_18")
    private int que18;

    @Column(name = "QUE_19")
    private int que19;

    @Column(name = "QUE_20")
    private int que20;

    @Column(name = "QUE_1_DIFF")
    private int que1Diff;

    @Column(name = "QUE_2_DIFF")
    private int que2Diff;

    @Column(name = "QUE_3_DIFF")
    private int que3Diff;

    @Column(name = "QUE_4_DIFF")
    private int que4Diff;

    @Column(name = "QUE_5_DIFF")
    private int que5Diff;

    @Column(name = "QUE_6_DIFF")
    private int que6Diff;

    @Column(name = "QUE_7_DIFF")
    private int que7Diff;

    @Column(name = "QUE_8_DIFF")
    private int que8Diff;

    @Column(name = "QUE_9_DIFF")
    private int que9Diff;

    @Column(name = "QUE_10_DIFF")
    private int que10Diff;

    @Column(name = "QUE_11_DIFF")
    private int que11Diff;

    @Column(name = "QUE_12_DIFF")
    private int que12Diff;

    @Column(name = "QUE_13_DIFF")
    private int que13Diff;

    @Column(name = "QUE_14_DIFF")
    private int que14Diff;

    @Column(name = "QUE_15_DIFF")
    private int que15Diff;

    @Column(name = "QUE_16_DIFF")
    private int que16Diff;

    @Column(name = "QUE_17_DIFF")
    private int que17Diff;

    @Column(name = "QUE_18_DIFF")
    private int que18Diff;

    @Column(name = "QUE_19_DIFF")
    private int que19Diff;

    @Column(name = "QUE_20_DIFF")
    private int que20Diff;

    @Column(name = "SEC1_PARTICIPANT_SCORE")
    private int sec1ParticipantScore;

    @Column(name = "SEC2_PARTICIPANT_SCORE")
    private int sec2ParticipantScore;

    @Column(name = "SEC3_PARTICIPANT_SCORE")
    private int sec3ParticipantScore;

    @Column(name = "SEC1_DISCREPANCY_SCORE")
    private int sec1DiscrepancyScore;

    @Column(name = "SEC2_DISCREPANCY_SCORE")
    private int sec2DiscrepancyScore;

    @Column(name = "SEC3_DISCREPANCY_SCORE")
    private int sec3DiscrepancyScore;

    @Column(name = "SEC1_ANALYSIS_SCORE")
    private int sec1AnalysisScore;

    @Column(name = "SEC2_CONNECTIONS_SCORE")
    private int sec2ConnectionsScore;

    @Column(name = "SEC3_DEPTH_SCORE")
    private int sec3DepthScore;

}