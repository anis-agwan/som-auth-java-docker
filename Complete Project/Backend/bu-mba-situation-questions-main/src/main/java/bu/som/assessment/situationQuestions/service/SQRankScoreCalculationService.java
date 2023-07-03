package bu.som.assessment.situationQuestions.service;

import bu.som.assessment.situationQuestions.constants.DefaultSituationRankARValue;
import bu.som.assessment.situationQuestions.dto.SQGetScoreDto;
import bu.som.assessment.situationQuestions.entity.SQRankScore;
import bu.som.assessment.situationQuestions.repository.SQRankRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class SQRankScoreCalculationService {
    @Autowired
    SQRankRepository sqRepository;

    public List<SQRankScore> getSQRankScores() throws SQLException {
        return sqRepository.findAll();
    }
    public Optional<SQRankScore> getSQRankDataById(String id) throws SQLException {
        return sqRepository.findById(id);
    }


    public String saveSQRankData(SQGetScoreDto scores) throws SQLException {
        sqRepository.save(calculateSQRankScore(scores));
        return "Situation Questions Scores updated";
    }
    private SQRankScore calculateSQRankScore(SQGetScoreDto sq){
        SQRankScore srq = new SQRankScore();
        srq.setBingNumber(sq.getBingNumber());

        //situation 1 calculation
        srq.setRankSR1(sq.getRankSR1());
        srq.setRankSR2(sq.getRankSR2());
        srq.setRankSR3(sq.getRankSR3());
        srq.setRankSR4(sq.getRankSR4());
        srq.setRankSR5(sq.getRankSR5());
        srq.setRankDIFF1(Math.abs(srq.getRankSR1() - DefaultSituationRankARValue.RankAR1));
        srq.setRankDIFF2(Math.abs(srq.getRankSR2() - DefaultSituationRankARValue.RankAR2));
        srq.setRankDIFF3(Math.abs(srq.getRankSR3() - DefaultSituationRankARValue.RankAR3));
        srq.setRankDIFF4(Math.abs(srq.getRankSR4() - DefaultSituationRankARValue.RankAR4));
        srq.setRankDIFF5(Math.abs(srq.getRankSR5() - DefaultSituationRankARValue.RankAR5));
        int sec1RankParticipantScoreValue = srq.getRankDIFF1() + srq.getRankDIFF1() + srq.getRankDIFF1() + srq.getRankDIFF1() + srq.getRankDIFF1();
        srq.setRankParticipantScoreS1(sec1RankParticipantScoreValue);
        int sec1DiscrepancyScoreValue = 13 - sec1RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS1(sec1DiscrepancyScoreValue);

        //situation 2 calculation
        srq.setRankSR6(sq.getRankSR6());
        srq.setRankSR7(sq.getRankSR7());
        srq.setRankSR8(sq.getRankSR8());
        srq.setRankSR9(sq.getRankSR9());
        srq.setRankSR10(sq.getRankSR10());
        srq.setRankDIFF6(Math.abs(srq.getRankSR6() - DefaultSituationRankARValue.RankAR6));
        srq.setRankDIFF7(Math.abs(srq.getRankSR7() - DefaultSituationRankARValue.RankAR7));
        srq.setRankDIFF8(Math.abs(srq.getRankSR8() - DefaultSituationRankARValue.RankAR8));
        srq.setRankDIFF9(Math.abs(srq.getRankSR9() - DefaultSituationRankARValue.RankAR9));
        srq.setRankDIFF10(Math.abs(srq.getRankSR10() - DefaultSituationRankARValue.RankAR10));
        int sec2RankParticipantScoreValue = srq.getRankDIFF6() + srq.getRankDIFF7() + srq.getRankDIFF8() + srq.getRankDIFF9() + srq.getRankDIFF10();
        srq.setRankParticipantScoreS2(sec2RankParticipantScoreValue);
        int sec2DiscrepancyScoreValue = 13 - sec2RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS2(sec2DiscrepancyScoreValue);

        //situation 3 calculation
        srq.setRankSR11(sq.getRankSR11());
        srq.setRankSR12(sq.getRankSR12());
        srq.setRankSR13(sq.getRankSR13());
        srq.setRankSR14(sq.getRankSR14());
        srq.setRankDIFF11(Math.abs(srq.getRankSR11() - DefaultSituationRankARValue.RankAR11));
        srq.setRankDIFF12(Math.abs(srq.getRankSR12() - DefaultSituationRankARValue.RankAR12));
        srq.setRankDIFF13(Math.abs(srq.getRankSR13() - DefaultSituationRankARValue.RankAR13));
        srq.setRankDIFF14(Math.abs(srq.getRankSR14() - DefaultSituationRankARValue.RankAR14));
        int sec3RankParticipantScoreValue = srq.getRankDIFF11() + srq.getRankDIFF12() + srq.getRankDIFF13() + srq.getRankDIFF14();
        srq.setRankParticipantScoreS3(sec3RankParticipantScoreValue);
        int sec3DiscrepancyScoreValue = 9 - sec3RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS3(sec3DiscrepancyScoreValue);

        //situation 4 calculation
        srq.setRankSR15(sq.getRankSR15());
        srq.setRankSR16(sq.getRankSR16());
        srq.setRankSR17(sq.getRankSR17());
        srq.setRankSR18(sq.getRankSR18());
        srq.setRankSR19(sq.getRankSR19());
        srq.setRankDIFF15(Math.abs(srq.getRankSR15() - DefaultSituationRankARValue.RankAR15));
        srq.setRankDIFF16(Math.abs(srq.getRankSR16() - DefaultSituationRankARValue.RankAR16));
        srq.setRankDIFF17(Math.abs(srq.getRankSR17() - DefaultSituationRankARValue.RankAR17));
        srq.setRankDIFF18(Math.abs(srq.getRankSR18() - DefaultSituationRankARValue.RankAR18));
        srq.setRankDIFF19(Math.abs(srq.getRankSR19() - DefaultSituationRankARValue.RankAR19));
        int sec4RankParticipantScoreValue = srq.getRankDIFF15() + srq.getRankDIFF16() + srq.getRankDIFF17() + srq.getRankDIFF18() + srq.getRankDIFF19();
        srq.setRankParticipantScoreS4(sec4RankParticipantScoreValue);
        int sec4DiscrepancyScoreValue = 13 - sec4RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS4(sec4DiscrepancyScoreValue);

        //situation 5 calculation
        srq.setRankSR20(sq.getRankSR20());
        srq.setRankSR21(sq.getRankSR21());
        srq.setRankSR22(sq.getRankSR22());
        srq.setRankSR23(sq.getRankSR23());
        srq.setRankSR24(sq.getRankSR24());
        srq.setRankDIFF20(Math.abs(srq.getRankSR20() - DefaultSituationRankARValue.RankAR20));
        srq.setRankDIFF21(Math.abs(srq.getRankSR21() - DefaultSituationRankARValue.RankAR21));
        srq.setRankDIFF22(Math.abs(srq.getRankSR22() - DefaultSituationRankARValue.RankAR22));
        srq.setRankDIFF23(Math.abs(srq.getRankSR23() - DefaultSituationRankARValue.RankAR23));
        srq.setRankDIFF24(Math.abs(srq.getRankSR24() - DefaultSituationRankARValue.RankAR24));
        int sec5RankParticipantScoreValue = srq.getRankDIFF20() + srq.getRankDIFF21() + srq.getRankDIFF22() + srq.getRankDIFF23() + srq.getRankDIFF24();
        srq.setRankParticipantScoreS5(sec5RankParticipantScoreValue);
        int sec5DiscrepancyScoreValue = 13 - sec5RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS5(sec5DiscrepancyScoreValue);

        //situation 6 calculation
        srq.setRankSR25(sq.getRankSR25());
        srq.setRankSR26(sq.getRankSR26());
        srq.setRankSR27(sq.getRankSR27());
        srq.setRankSR28(sq.getRankSR28());
        srq.setRankSR29(sq.getRankSR29());
        srq.setRankDIFF25(Math.abs(srq.getRankSR25() - DefaultSituationRankARValue.RankAR25));
        srq.setRankDIFF26(Math.abs(srq.getRankSR26() - DefaultSituationRankARValue.RankAR26));
        srq.setRankDIFF27(Math.abs(srq.getRankSR27() - DefaultSituationRankARValue.RankAR27));
        srq.setRankDIFF28(Math.abs(srq.getRankSR28() - DefaultSituationRankARValue.RankAR28));
        srq.setRankDIFF29(Math.abs(srq.getRankSR29() - DefaultSituationRankARValue.RankAR29));
        int sec6RankParticipantScoreValue = srq.getRankDIFF25() + srq.getRankDIFF26() + srq.getRankDIFF27() + srq.getRankDIFF28() + srq.getRankDIFF29();
        srq.setRankParticipantScoreS6(sec6RankParticipantScoreValue);
        int sec6DiscrepancyScoreValue = 13 - sec6RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS6(sec6DiscrepancyScoreValue);

        //situation 7 calculation
        srq.setRankSR30(sq.getRankSR30());
        srq.setRankSR31(sq.getRankSR31());
        srq.setRankSR32(sq.getRankSR32());
        srq.setRankSR33(sq.getRankSR33());
        srq.setRankSR34(sq.getRankSR34());
        srq.setRankDIFF30(Math.abs(srq.getRankSR30() - DefaultSituationRankARValue.RankAR30));
        srq.setRankDIFF31(Math.abs(srq.getRankSR31() - DefaultSituationRankARValue.RankAR31));
        srq.setRankDIFF32(Math.abs(srq.getRankSR32() - DefaultSituationRankARValue.RankAR32));
        srq.setRankDIFF33(Math.abs(srq.getRankSR33() - DefaultSituationRankARValue.RankAR33));
        srq.setRankDIFF34(Math.abs(srq.getRankSR34() - DefaultSituationRankARValue.RankAR34));
        int sec7RankParticipantScoreValue = srq.getRankDIFF30() + srq.getRankDIFF31() + srq.getRankDIFF32() + srq.getRankDIFF33() + srq.getRankDIFF34();
        srq.setRankParticipantScoreS7(sec7RankParticipantScoreValue);
        int sec7DiscrepancyScoreValue = 13 - sec7RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS7(sec7DiscrepancyScoreValue);

        //situation 8 calculation
        srq.setRankSR35(sq.getRankSR35());
        srq.setRankSR36(sq.getRankSR36());
        srq.setRankSR37(sq.getRankSR37());
        srq.setRankSR38(sq.getRankSR38());
        srq.setRankSR39(sq.getRankSR39());
        srq.setRankDIFF35(Math.abs(srq.getRankSR35() - DefaultSituationRankARValue.RankAR35));
        srq.setRankDIFF36(Math.abs(srq.getRankSR36() - DefaultSituationRankARValue.RankAR36));
        srq.setRankDIFF37(Math.abs(srq.getRankSR37() - DefaultSituationRankARValue.RankAR37));
        srq.setRankDIFF38(Math.abs(srq.getRankSR38() - DefaultSituationRankARValue.RankAR38));
        srq.setRankDIFF39(Math.abs(srq.getRankSR39() - DefaultSituationRankARValue.RankAR39));
        int sec8RankParticipantScoreValue = srq.getRankDIFF35() + srq.getRankDIFF36() + srq.getRankDIFF37() + srq.getRankDIFF38() + srq.getRankDIFF39();
        srq.setRankParticipantScoreS8(sec8RankParticipantScoreValue);
        int sec8DiscrepancyScoreValue = 13 - sec8RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS8(sec8DiscrepancyScoreValue);

        //situation 9 calculation
        srq.setRankSR40(sq.getRankSR40());
        srq.setRankSR41(sq.getRankSR41());
        srq.setRankSR42(sq.getRankSR42());
        srq.setRankSR43(sq.getRankSR43());
        srq.setRankSR44(sq.getRankSR44());
        srq.setRankDIFF40(Math.abs(srq.getRankSR40() - DefaultSituationRankARValue.RankAR40));
        srq.setRankDIFF41(Math.abs(srq.getRankSR41() - DefaultSituationRankARValue.RankAR41));
        srq.setRankDIFF42(Math.abs(srq.getRankSR42() - DefaultSituationRankARValue.RankAR42));
        srq.setRankDIFF43(Math.abs(srq.getRankSR43() - DefaultSituationRankARValue.RankAR43));
        srq.setRankDIFF44(Math.abs(srq.getRankSR44() - DefaultSituationRankARValue.RankAR44));
        int sec9RankParticipantScoreValue = srq.getRankDIFF40() + srq.getRankDIFF41() + srq.getRankDIFF42() + srq.getRankDIFF43() + srq.getRankDIFF44();
        srq.setRankParticipantScoreS9(sec9RankParticipantScoreValue);
        int sec9DiscrepancyScoreValue = 13 - sec9RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS9(sec9DiscrepancyScoreValue);

        //situation 10 calculation
        srq.setRankSR45(sq.getRankSR45());
        srq.setRankSR46(sq.getRankSR46());
        srq.setRankSR47(sq.getRankSR47());
        srq.setRankSR48(sq.getRankSR48());
        srq.setRankSR49(sq.getRankSR49());
        srq.setRankSR50(sq.getRankSR50());
        srq.setRankDIFF45(Math.abs(srq.getRankSR45() - DefaultSituationRankARValue.RankAR45));
        srq.setRankDIFF46(Math.abs(srq.getRankSR46() - DefaultSituationRankARValue.RankAR46));
        srq.setRankDIFF47(Math.abs(srq.getRankSR47() - DefaultSituationRankARValue.RankAR47));
        srq.setRankDIFF48(Math.abs(srq.getRankSR48() - DefaultSituationRankARValue.RankAR48));
        srq.setRankDIFF49(Math.abs(srq.getRankSR49() - DefaultSituationRankARValue.RankAR49));
        srq.setRankDIFF50(Math.abs(srq.getRankSR50() - DefaultSituationRankARValue.RankAR50));
        int sec10RankParticipantScoreValue = srq.getRankDIFF45() + srq.getRankDIFF46() + srq.getRankDIFF47() + srq.getRankDIFF48() + srq.getRankDIFF49() + srq.getRankDIFF50();
        srq.setRankParticipantScoreS10(sec10RankParticipantScoreValue);
        int sec10DiscrepancyScoreValue = 19 - sec10RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS10(sec10DiscrepancyScoreValue);

        //situation 11 calculation
        srq.setRankSR51(sq.getRankSR51());
        srq.setRankSR52(sq.getRankSR52());
        srq.setRankSR53(sq.getRankSR53());
        srq.setRankSR54(sq.getRankSR54());
        srq.setRankSR55(sq.getRankSR55());
        srq.setRankSR56(sq.getRankSR56());
        srq.setRankDIFF51(Math.abs(srq.getRankSR51() - DefaultSituationRankARValue.RankAR51));
        srq.setRankDIFF52(Math.abs(srq.getRankSR52() - DefaultSituationRankARValue.RankAR52));
        srq.setRankDIFF53(Math.abs(srq.getRankSR53() - DefaultSituationRankARValue.RankAR53));
        srq.setRankDIFF54(Math.abs(srq.getRankSR54() - DefaultSituationRankARValue.RankAR54));
        srq.setRankDIFF55(Math.abs(srq.getRankSR55() - DefaultSituationRankARValue.RankAR55));
        srq.setRankDIFF56(Math.abs(srq.getRankSR56() - DefaultSituationRankARValue.RankAR56));
        int sec11RankParticipantScoreValue = srq.getRankDIFF51() + srq.getRankDIFF52() + srq.getRankDIFF53() + srq.getRankDIFF54() + srq.getRankDIFF55() + srq.getRankDIFF56();
        srq.setRankParticipantScoreS11(sec11RankParticipantScoreValue);
        int sec11DiscrepancyScoreValue = 19 - sec11RankParticipantScoreValue;
        srq.setRankDiscrepancyScoreS11(sec11DiscrepancyScoreValue);

        double avg5ItemRankScores = (double) (srq.getRankDiscrepancyScoreS1() + srq.getRankDiscrepancyScoreS2() + srq.getRankDiscrepancyScoreS4() + srq.getRankDiscrepancyScoreS5() + srq.getRankDiscrepancyScoreS6() + srq.getRankDiscrepancyScoreS7() + srq.getRankDiscrepancyScoreS8() + srq.getRankDiscrepancyScoreS9()) / 8;
        srq.setAvg5itemRankScore(avg5ItemRankScores);
        double avg6ItemRankScores = (double) (srq.getRankDiscrepancyScoreS10() + srq.getRankDiscrepancyScoreS11()) / 2;
        srq.setAvg6itemRankScore(avg6ItemRankScores);
        srq.setAvg4itemRankScore(srq.getRankDiscrepancyScoreS3());
        double rankDecisionsScore = ((avg5ItemRankScores * 8) + (avg6ItemRankScores * 2) + (srq.getAvg4itemRankScore())) / 11;
        srq.setRankDecisionScore(rankDecisionsScore);
        srq.setConvertedRankDecisionsScore(convertedRankDecisionsScore(rankDecisionsScore));

        sqRepository.save(srq);
        return srq;
    }
    private int convertedRankDecisionsScore(double rankDecisionsScore) {
        if (rankDecisionsScore > 0.99 && rankDecisionsScore < 4) return 1;
        else if (rankDecisionsScore > 3.99 && rankDecisionsScore < 5) return 2;
        else if (rankDecisionsScore > 4.99 && rankDecisionsScore < 6) return 3;
        else if (rankDecisionsScore > 5.99 && rankDecisionsScore < 7) return 4;
        else if (rankDecisionsScore > 6.99 && rankDecisionsScore < 8) return 5;
        else if (rankDecisionsScore > 7.99 && rankDecisionsScore < 9) return 6;
        else if (rankDecisionsScore > 8.99 && rankDecisionsScore < 10) return 7;
        else if (rankDecisionsScore > 9.99 && rankDecisionsScore < 11) return 8;
        else if (rankDecisionsScore > 10.99 && rankDecisionsScore < 12) return 9;
        else if (rankDecisionsScore > 11.99 && rankDecisionsScore < 14) return 10;
        else return 0;
    }
}
