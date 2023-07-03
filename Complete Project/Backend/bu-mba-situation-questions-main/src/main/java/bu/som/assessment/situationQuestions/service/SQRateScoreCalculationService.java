package bu.som.assessment.situationQuestions.service;

import bu.som.assessment.situationQuestions.constants.DefaultSituationRateARValue;
import bu.som.assessment.situationQuestions.dto.SQGetScoreDto;
import bu.som.assessment.situationQuestions.entity.SQRateScore;
import bu.som.assessment.situationQuestions.repository.SQRateRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class SQRateScoreCalculationService {

    @Autowired
    SQRateRepository sqrRepository;

    public List<SQRateScore> getSQRankScores() throws SQLException {
        return sqrRepository.findAll();
    }
    public Optional<SQRateScore> getSQRateDataById(String id) throws SQLException {
        return sqrRepository.findById(id);
    }


    public String saveSQRateData(SQGetScoreDto scores) throws SQLException {
        sqrRepository.save(calculateSQRateScore(scores));
        return "Situation Questions Scores updated";
    }
    private SQRateScore calculateSQRateScore(SQGetScoreDto sqScore){
        SQRateScore srq = new SQRateScore();
        srq.setBingNumber(sqScore.getBingNumber());

        //situation 1 calculation
        srq.setRateSR1(sqScore.getRateSR1());
        srq.setRateSR2(sqScore.getRateSR2());
        srq.setRateSR3(sqScore.getRateSR3());
        srq.setRateSR4(sqScore.getRateSR4());
        srq.setRateSR5(sqScore.getRateSR5());
        srq.setRateDIFF1(Math.abs(srq.getRateSR1() - DefaultSituationRateARValue.RateAR1));
        srq.setRateDIFF2(Math.abs(srq.getRateSR2() - DefaultSituationRateARValue.RateAR2));
        srq.setRateDIFF3(Math.abs(srq.getRateSR3() - DefaultSituationRateARValue.RateAR3));
        srq.setRateDIFF4(Math.abs(srq.getRateSR4() - DefaultSituationRateARValue.RateAR4));
        srq.setRateDIFF5(Math.abs(srq.getRateSR5() - DefaultSituationRateARValue.RateAR5));
        int desirabilityParticipantScoreS1Value = srq.getRateDIFF1() + srq.getRateDIFF2() + srq.getRateDIFF3() + srq.getRateDIFF4() + srq.getRateDIFF5();
        srq.setDesirabilityParticipantScoreS1(desirabilityParticipantScoreS1Value);
        int sec1DiscrepancyScoreValue = 20 - desirabilityParticipantScoreS1Value;
        srq.setDesirabilityDiscrepancyScoreS1(sec1DiscrepancyScoreValue);

        //situation 2 calculation
        srq.setRateSR6(sqScore.getRateSR6());
        srq.setRateSR7(sqScore.getRateSR7());
        srq.setRateSR8(sqScore.getRateSR8());
        srq.setRateSR9(sqScore.getRateSR9());
        srq.setRateSR10(sqScore.getRateSR10());
        srq.setRateDIFF6(Math.abs(srq.getRateSR6() - DefaultSituationRateARValue.RateAR6));
        srq.setRateDIFF7(Math.abs(srq.getRateSR7() - DefaultSituationRateARValue.RateAR7));
        srq.setRateDIFF8(Math.abs(srq.getRateSR8() - DefaultSituationRateARValue.RateAR8));
        srq.setRateDIFF9(Math.abs(srq.getRateSR9() - DefaultSituationRateARValue.RateAR9));
        srq.setRateDIFF10(Math.abs(srq.getRateSR10() - DefaultSituationRateARValue.RateAR10));
        int desirabilityParticipantScoreS2Value = srq.getRateDIFF6() + srq.getRateDIFF7() + srq.getRateDIFF8() + srq.getRateDIFF9() + srq.getRateDIFF10();
        srq.setDesirabilityParticipantScoreS2(desirabilityParticipantScoreS2Value);
        int sec2DiscrepancyScoreValue = 21 - desirabilityParticipantScoreS2Value;
        srq.setDesirabilityDiscrepancyScoreS2(sec2DiscrepancyScoreValue);

        //situation 3 calculation
        srq.setRateSR11(sqScore.getRateSR11());
        srq.setRateSR12(sqScore.getRateSR12());
        srq.setRateSR13(sqScore.getRateSR13());
        srq.setRateSR14(sqScore.getRateSR14());
        srq.setRateDIFF11(Math.abs(srq.getRateSR11() - DefaultSituationRateARValue.RateAR11));
        srq.setRateDIFF12(Math.abs(srq.getRateSR12() - DefaultSituationRateARValue.RateAR12));
        srq.setRateDIFF13(Math.abs(srq.getRateSR13() - DefaultSituationRateARValue.RateAR13));
        srq.setRateDIFF14(Math.abs(srq.getRateSR14() - DefaultSituationRateARValue.RateAR14));
        int desirabilityParticipantScoreS3Value = srq.getRateDIFF11() + srq.getRateDIFF12() + srq.getRateDIFF13() + srq.getRateDIFF14();
        srq.setDesirabilityParticipantScoreS3(desirabilityParticipantScoreS3Value);
        int sec3DiscrepancyScoreValue = 19 - desirabilityParticipantScoreS3Value;
        srq.setDesirabilityDiscrepancyScoreS3(sec3DiscrepancyScoreValue);

        //situation 4 calculation
        srq.setRateSR15(sqScore.getRateSR15());
        srq.setRateSR16(sqScore.getRateSR16());
        srq.setRateSR17(sqScore.getRateSR17());
        srq.setRateSR18(sqScore.getRateSR18());
        srq.setRateSR19(sqScore.getRateSR19());
        srq.setRateDIFF15(Math.abs(srq.getRateSR15() - DefaultSituationRateARValue.RateAR15));
        srq.setRateDIFF16(Math.abs(srq.getRateSR16() - DefaultSituationRateARValue.RateAR16));
        srq.setRateDIFF17(Math.abs(srq.getRateSR17() - DefaultSituationRateARValue.RateAR17));
        srq.setRateDIFF18(Math.abs(srq.getRateSR18() - DefaultSituationRateARValue.RateAR18));
        srq.setRateDIFF19(Math.abs(srq.getRateSR19() - DefaultSituationRateARValue.RateAR19));
        int desirabilityParticipantScoreS4Value = srq.getRateDIFF15() + srq.getRateDIFF16() + srq.getRateDIFF17() + srq.getRateDIFF18() + srq.getRateDIFF19();
        srq.setDesirabilityParticipantScoreS4(desirabilityParticipantScoreS4Value);
        int sec4DiscrepancyScoreValue = 23 - desirabilityParticipantScoreS4Value;
        srq.setDesirabilityDiscrepancyScoreS4(sec4DiscrepancyScoreValue);

        //situation 5 calculation
        srq.setRateSR20(sqScore.getRateSR20());
        srq.setRateSR21(sqScore.getRateSR21());
        srq.setRateSR22(sqScore.getRateSR22());
        srq.setRateSR23(sqScore.getRateSR23());
        srq.setRateSR24(sqScore.getRateSR24());
        srq.setRateDIFF20(Math.abs(srq.getRateSR20() - DefaultSituationRateARValue.RateAR20));
        srq.setRateDIFF21(Math.abs(srq.getRateSR21() - DefaultSituationRateARValue.RateAR21));
        srq.setRateDIFF22(Math.abs(srq.getRateSR22() - DefaultSituationRateARValue.RateAR22));
        srq.setRateDIFF23(Math.abs(srq.getRateSR23() - DefaultSituationRateARValue.RateAR23));
        srq.setRateDIFF24(Math.abs(srq.getRateSR24() - DefaultSituationRateARValue.RateAR24));
        int desirabilityParticipantScoreS5Value = srq.getRateDIFF20() + srq.getRateDIFF21() + srq.getRateDIFF22() + srq.getRateDIFF23() + srq.getRateDIFF24();
        srq.setDesirabilityParticipantScoreS5(desirabilityParticipantScoreS5Value);
        int sec5DiscrepancyScoreValue = 24 - desirabilityParticipantScoreS5Value;
        srq.setDesirabilityDiscrepancyScoreS5(sec5DiscrepancyScoreValue);

        //situation 6 calculation
        srq.setRateSR25(sqScore.getRateSR25());
        srq.setRateSR26(sqScore.getRateSR26());
        srq.setRateSR27(sqScore.getRateSR27());
        srq.setRateSR28(sqScore.getRateSR28());
        srq.setRateSR29(sqScore.getRateSR29());
        srq.setRateDIFF25(Math.abs(srq.getRateSR25() - DefaultSituationRateARValue.RateAR25));
        srq.setRateDIFF26(Math.abs(srq.getRateSR26() - DefaultSituationRateARValue.RateAR26));
        srq.setRateDIFF27(Math.abs(srq.getRateSR27() - DefaultSituationRateARValue.RateAR27));
        srq.setRateDIFF28(Math.abs(srq.getRateSR28() - DefaultSituationRateARValue.RateAR28));
        srq.setRateDIFF29(Math.abs(srq.getRateSR29() - DefaultSituationRateARValue.RateAR29));
        int desirabilityParticipantScoreS6Value = srq.getRateDIFF25() + srq.getRateDIFF26() + srq.getRateDIFF27() + srq.getRateDIFF28() + srq.getRateDIFF29();
        srq.setDesirabilityParticipantScoreS6(desirabilityParticipantScoreS6Value);
        int sec6DiscrepancyScoreValue = 22 - desirabilityParticipantScoreS6Value;
        srq.setDesirabilityDiscrepancyScoreS6(sec6DiscrepancyScoreValue);

        //situation 7 calculation
        srq.setRateSR30(sqScore.getRateSR30());
        srq.setRateSR31(sqScore.getRateSR31());
        srq.setRateSR32(sqScore.getRateSR32());
        srq.setRateSR33(sqScore.getRateSR33());
        srq.setRateSR34(sqScore.getRateSR34());
        srq.setRateDIFF30(Math.abs(srq.getRateSR30() - DefaultSituationRateARValue.RateAR30));
        srq.setRateDIFF31(Math.abs(srq.getRateSR31() - DefaultSituationRateARValue.RateAR31));
        srq.setRateDIFF32(Math.abs(srq.getRateSR32() - DefaultSituationRateARValue.RateAR32));
        srq.setRateDIFF33(Math.abs(srq.getRateSR33() - DefaultSituationRateARValue.RateAR33));
        srq.setRateDIFF34(Math.abs(srq.getRateSR34() - DefaultSituationRateARValue.RateAR34));
        int desirabilityParticipantScoreS7Value = srq.getRateDIFF30() + srq.getRateDIFF31() + srq.getRateDIFF32() + srq.getRateDIFF33() + srq.getRateDIFF34();
        srq.setDesirabilityParticipantScoreS7(desirabilityParticipantScoreS7Value);
        int sec7DiscrepancyScoreValue = 23 - desirabilityParticipantScoreS7Value;
        srq.setDesirabilityDiscrepancyScoreS7(sec7DiscrepancyScoreValue);

        //situation 8 calculation
        srq.setRateSR35(sqScore.getRateSR35());
        srq.setRateSR36(sqScore.getRateSR36());
        srq.setRateSR37(sqScore.getRateSR37());
        srq.setRateSR38(sqScore.getRateSR38());
        srq.setRateSR39(sqScore.getRateSR39());
        srq.setRateDIFF35(Math.abs(srq.getRateSR35() - DefaultSituationRateARValue.RateAR35));
        srq.setRateDIFF36(Math.abs(srq.getRateSR36() - DefaultSituationRateARValue.RateAR36));
        srq.setRateDIFF37(Math.abs(srq.getRateSR37() - DefaultSituationRateARValue.RateAR37));
        srq.setRateDIFF38(Math.abs(srq.getRateSR38() - DefaultSituationRateARValue.RateAR38));
        srq.setRateDIFF39(Math.abs(srq.getRateSR39() - DefaultSituationRateARValue.RateAR39));
        int desirabilityParticipantScoreS8Value = srq.getRateDIFF35() + srq.getRateDIFF36() + srq.getRateDIFF37() + srq.getRateDIFF38() + srq.getRateDIFF39();
        srq.setDesirabilityParticipantScoreS8(desirabilityParticipantScoreS8Value);
        int sec8DiscrepancyScoreValue = 22 - desirabilityParticipantScoreS8Value;
        srq.setDesirabilityDiscrepancyScoreS8(sec8DiscrepancyScoreValue);

        //situation 9 calculation
        srq.setRateSR40(sqScore.getRateSR40());
        srq.setRateSR41(sqScore.getRateSR41());
        srq.setRateSR42(sqScore.getRateSR42());
        srq.setRateSR43(sqScore.getRateSR43());
        srq.setRateSR44(sqScore.getRateSR44());
        srq.setRateDIFF40(Math.abs(srq.getRateSR40() - DefaultSituationRateARValue.RateAR40));
        srq.setRateDIFF41(Math.abs(srq.getRateSR41() - DefaultSituationRateARValue.RateAR41));
        srq.setRateDIFF42(Math.abs(srq.getRateSR42() - DefaultSituationRateARValue.RateAR42));
        srq.setRateDIFF43(Math.abs(srq.getRateSR43() - DefaultSituationRateARValue.RateAR43));
        srq.setRateDIFF44(Math.abs(srq.getRateSR44() - DefaultSituationRateARValue.RateAR44));
        int desirabilityParticipantScoreS9Value = srq.getRateDIFF40() + srq.getRateDIFF41() + srq.getRateDIFF42() + srq.getRateDIFF43() + srq.getRateDIFF44();
        srq.setDesirabilityParticipantScoreS9(desirabilityParticipantScoreS9Value);
        int sec9DiscrepancyScoreValue = 24 - desirabilityParticipantScoreS9Value;
        srq.setDesirabilityDiscrepancyScoreS9(sec9DiscrepancyScoreValue);

        //situation 10 calculation
        srq.setRateSR45(sqScore.getRateSR45());
        srq.setRateSR46(sqScore.getRateSR46());
        srq.setRateSR47(sqScore.getRateSR47());
        srq.setRateSR48(sqScore.getRateSR48());
        srq.setRateSR49(sqScore.getRateSR49());
        srq.setRateSR50(sqScore.getRateSR50());
        srq.setRateDIFF45(Math.abs(srq.getRateSR45() - DefaultSituationRateARValue.RateAR45));
        srq.setRateDIFF46(Math.abs(srq.getRateSR46() - DefaultSituationRateARValue.RateAR46));
        srq.setRateDIFF47(Math.abs(srq.getRateSR47() - DefaultSituationRateARValue.RateAR47));
        srq.setRateDIFF48(Math.abs(srq.getRateSR48() - DefaultSituationRateARValue.RateAR48));
        srq.setRateDIFF49(Math.abs(srq.getRateSR49() - DefaultSituationRateARValue.RateAR49));
        srq.setRateDIFF50(Math.abs(srq.getRateSR50() - DefaultSituationRateARValue.RateAR50));
        int desirabilityParticipantScoreS10Value = srq.getRateDIFF45() + srq.getRateDIFF46() + srq.getRateDIFF47() + srq.getRateDIFF48() + srq.getRateDIFF49() + srq.getRateDIFF50();
        srq.setDesirabilityParticipantScoreS10(desirabilityParticipantScoreS10Value);
        int sec10DiscrepancyScoreValue = 26 - desirabilityParticipantScoreS10Value;
        srq.setDesirabilityDiscrepancyScoreS10(sec10DiscrepancyScoreValue);

        //situation 11 calculation
        srq.setRateSR51(sqScore.getRateSR51());
        srq.setRateSR52(sqScore.getRateSR52());
        srq.setRateSR53(sqScore.getRateSR53());
        srq.setRateSR54(sqScore.getRateSR54());
        srq.setRateSR55(sqScore.getRateSR55());
        srq.setRateSR56(sqScore.getRateSR56());
        srq.setRateDIFF51(Math.abs(srq.getRateSR51() - DefaultSituationRateARValue.RateAR51));
        srq.setRateDIFF52(Math.abs(srq.getRateSR52() - DefaultSituationRateARValue.RateAR52));
        srq.setRateDIFF53(Math.abs(srq.getRateSR53() - DefaultSituationRateARValue.RateAR53));
        srq.setRateDIFF54(Math.abs(srq.getRateSR54() - DefaultSituationRateARValue.RateAR54));
        srq.setRateDIFF55(Math.abs(srq.getRateSR55() - DefaultSituationRateARValue.RateAR55));
        srq.setRateDIFF56(Math.abs(srq.getRateSR56() - DefaultSituationRateARValue.RateAR56));
        int desirabilityParticipantScoreS11Value = srq.getRateDIFF51() + srq.getRateDIFF52() + srq.getRateDIFF53() + srq.getRateDIFF54() + srq.getRateDIFF55() + srq.getRateDIFF56();
        srq.setDesirabilityParticipantScoreS11(desirabilityParticipantScoreS11Value);
        int sec11DiscrepancyScoreValue = 27 - desirabilityParticipantScoreS11Value;
        srq.setDesirabilityDiscrepancyScoreS11(sec11DiscrepancyScoreValue);

        double desirabilityDecisionsScore = (double) (srq.getDesirabilityDiscrepancyScoreS1() + srq.getDesirabilityDiscrepancyScoreS2() + srq.getDesirabilityDiscrepancyScoreS3() + srq.getDesirabilityDiscrepancyScoreS4() + srq.getDesirabilityDiscrepancyScoreS5() + srq.getDesirabilityDiscrepancyScoreS6() + srq.getDesirabilityDiscrepancyScoreS7() + srq.getDesirabilityDiscrepancyScoreS8() + srq.getDesirabilityDiscrepancyScoreS9() + srq.getDesirabilityDiscrepancyScoreS10() + srq.getDesirabilityDiscrepancyScoreS11()) / 11;
        srq.setDesirabilityDecisionsScore(desirabilityDecisionsScore);
        srq.setConvertedDesirabilityDecisionsScore(convertedDesirabilityDecisionsScore(desirabilityDecisionsScore));

        sqrRepository.save(srq);

        return srq;
    }
    private int convertedDesirabilityDecisionsScore(double desirabilityDecisionsScore) {
        if (desirabilityDecisionsScore > 0.99 && desirabilityDecisionsScore < 4) return 1;
        else if (desirabilityDecisionsScore > 3.99 && desirabilityDecisionsScore < 6) return 2;
        else if (desirabilityDecisionsScore > 5.99 && desirabilityDecisionsScore < 8) return 3;
        else if (desirabilityDecisionsScore > 7.99 && desirabilityDecisionsScore < 10) return 4;
        else if (desirabilityDecisionsScore > 9.99 && desirabilityDecisionsScore < 12) return 5;
        else if (desirabilityDecisionsScore > 11.99 && desirabilityDecisionsScore < 14) return 6;
        else if (desirabilityDecisionsScore > 13.99 && desirabilityDecisionsScore < 16) return 7;
        else if (desirabilityDecisionsScore > 15.99 && desirabilityDecisionsScore < 18) return 8;
        else if (desirabilityDecisionsScore > 17.99 && desirabilityDecisionsScore < 20) return 9;
        else if (desirabilityDecisionsScore > 19.99 && desirabilityDecisionsScore < 23.01) return 10;
        else return 0;
    }
}


