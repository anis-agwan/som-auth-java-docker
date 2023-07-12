package bu.som.assessment.personalBelief.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Table(name = "pb_score", schema = "personal_beliefs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonalBelief {

    @Id
    @Column(name = "PB_BNUMBER")
    private String bingNumber;

    @Column(name = "PB_FIRST_NAME")
    private String pbFirstName;

    @Column(name = "PB_LAST_NAME")
    private String pbLastName;

    @Column(name = "PB_OPEN_TO_CHANGE_AVG")
    private double pbOpenToChangeAvg;
    @Column(name = "PB_OPEN_TO_CHANGE_SCORE")
    private int pbOpenToChangeScore;

    @Column(name = "PB_COACHING_AVG")
    private double pbCoachingAvg;
    @Column(name = "PB_COACHING_SCORE")
    private int pbCoachingScore;

    @Column(name = "PB_PLANNING_ORGANIZING_AVG")
    private double pbPlanningOrganizingAvg;
    @Column(name = "PB_PLANNING_ORGANIZING_SCORE")
    private int pbPlanningOrganizingScore;

    @Column(name = "PB_TEAMWORK_AVG")
    private double pbTeamworkAvg;
    @Column(name = "PB_TEAMWORK_SCORE")
    private int pbTeamworkScore;

    @Column(name = "PB_EMPOWERING_AVG")
    private double pbEmpoweringAvg;
    @Column(name = "PB_EMPOWERING_SCORE")
    private int pbEmpoweringScore;
}
