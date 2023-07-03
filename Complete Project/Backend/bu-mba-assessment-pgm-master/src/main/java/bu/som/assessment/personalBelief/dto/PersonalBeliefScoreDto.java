package bu.som.assessment.personalBelief.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PersonalBeliefScoreDto {

    private String bingNumber;

    private int openToChangeScore;
    private String openToChangeScoreComment;

    private int coachingScore;
    private String coachingScoreComment;

    private int planningAndOrganizingScore;
    private String planningAndOrganizingScoreComment;

    private int teamworkScore;
    private String teamworkScoreComment;

    private int empoweringScore;
    private String empoweringScoreComment;
}
