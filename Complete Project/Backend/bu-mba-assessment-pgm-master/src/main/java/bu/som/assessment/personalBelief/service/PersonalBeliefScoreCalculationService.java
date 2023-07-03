package bu.som.assessment.personalBelief.service;

import bu.som.assessment.personalBelief.dto.PersonalBeliefDto;
import bu.som.assessment.personalBelief.entity.PersonalBelief;
import bu.som.assessment.personalBelief.repository.PersonalBeliefRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class PersonalBeliefScoreCalculationService {

    @Autowired
    PersonalBeliefRepository pbRepository;
    public List<PersonalBelief> getPersonalBeliefs() throws SQLException {
        return pbRepository.findAll();
    }


    public Optional<PersonalBelief> getPBDataById(String id) throws SQLException {
        return pbRepository.findById(id);
    }


    public String savePBData(PersonalBeliefDto pbData) throws SQLException {
        pbRepository.save(calculateScore(pbData));
        return "Personal Beliefs Score Updated";
    }

    private PersonalBelief calculateScore(PersonalBeliefDto pbData) {

        PersonalBelief pb = new PersonalBelief();
        pb.setBingNumber(pbData.getBingNumber());
        pb.setPbFirstName(pbData.getFirstName());
        pb.setPbLastName(pbData.getLastName());

        // Open to Change
        pb.setPbOpenToChangeAvg(openToChangeAverage(pbData));
        pb.setPbOpenToChangeScore(calculateAvgScore(pb.getPbOpenToChangeAvg()));

        // Coaching
        pb.setPbCoachingAvg(coachingAverage(pbData));
        pb.setPbCoachingScore(calculateAvgScore(pb.getPbCoachingAvg()));

        // Planning and Organizing
        pb.setPbPlanningOrganizingAvg(planningAndOrganizingAverage(pbData));
        pb.setPbPlanningOrganizingScore(calculateAvgScore(pb.getPbPlanningOrganizingAvg()));

        // Empowering
        pb.setPbEmpoweringAvg(empoweringAverage(pbData));
        pb.setPbEmpoweringScore(calculateAvgScore(pb.getPbEmpoweringAvg()));

        // Teamwork
        pb.setPbTeamworkAvg(teamworkAverage(pbData));
        pb.setPbTeamworkScore(calculateAvgScore(pb.getPbTeamworkAvg()));

        return pb;
    }

    private double openToChangeAverage(PersonalBeliefDto pb) {
        double openToChangeAvgValue = pb.getPbQ1() + pb.getPbQ5() + pb.getPbQ7() + pb.getPbQ17() + pb.getPbQ23() +
                pb.getPbQ36() + pb.getPbQ44() + pb.getPbQ45() + pb.getPbQ50();

        return openToChangeAvgValue / 9;
    }

    private double coachingAverage(PersonalBeliefDto pb) {
        double coachingAvgValue = pb.getPbQ2() + pb.getPbQ13() + pb.getPbQ20() + pb.getPbQ21() + pb.getPbQ26() +
                pb.getPbQ27() + pb.getPbQ29() + pb.getPbQ30() + pb.getPbQ37() + pb.getPbQ42();

        return coachingAvgValue / 10;
    }

    private double planningAndOrganizingAverage(PersonalBeliefDto pb) {
        double planningAndOrganizingAvgValue = pb.getPbQ3() + pb.getPbQ6() + pb.getPbQ11() + pb.getPbQ14() + pb.getPbQ15() +
                pb.getPbQ18() + pb.getPbQ25() + pb.getPbQ32() + pb.getPbQ34() + pb.getPbQ40() +
                pb.getPbQ46() + pb.getPbQ49() + pb.getPbQ52() + pb.getPbQ53();
        return planningAndOrganizingAvgValue / 14;
    }

    private double empoweringAverage(PersonalBeliefDto pb) {
        double empoweringAvgValue = pb.getPbQ4() + pb.getPbQ8() + pb.getPbQ10() + pb.getPbQ31() + pb.getPbQ35() +
                pb.getPbQ39() + pb.getPbQ48() + pb.getPbQ51();
        return empoweringAvgValue / 8;
    }

    private double teamworkAverage(PersonalBeliefDto pb) {
        double teamworkAvgValue = pb.getPbQ9() + pb.getPbQ12() + pb.getPbQ16() + pb.getPbQ19() + pb.getPbQ22() +
                pb.getPbQ24() + pb.getPbQ28() + pb.getPbQ33() + pb.getPbQ38() + pb.getPbQ41() +
                pb.getPbQ43() + pb.getPbQ47();
        return teamworkAvgValue / 12;
    }

    private int calculateAvgScore(double averageValue) {
        if (averageValue >= 0.99 && averageValue < 1.41) return 1;
        else if (averageValue >= 0.41 && averageValue < 1.81) return 2;
        else if (averageValue >= 1.81 && averageValue < 2.21) return 3;
        else if (averageValue >= 2.21 && averageValue < 2.61) return 4;
        else if (averageValue >= 2.61 && averageValue < 3.01) return 5;
        else if (averageValue >= 3.01 && averageValue < 3.41) return 6;
        else if (averageValue >= 3.41 && averageValue < 3.81) return 7;
        else if (averageValue >= 3.81 && averageValue < 4.21) return 8;
        else if (averageValue >= 4.21 && averageValue < 4.61) return 9;
        else if (averageValue >= 4.61 && averageValue < 5.01) return 10;
        else return 0;
    }

}
