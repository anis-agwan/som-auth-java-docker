package bu.som.assessment.situationQuestions.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "situation_questions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SituationQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Situation_Number")
    private Long SituationNumber;

    @Column(name = "Situation_Text")
    private String SituationText;

    @Column(name = "Prev_Situation_Number")
    private Long PrevSituationNumber;

    @Column(name = "Prev_Situation_Text")
    private String PrevSituationText;

    @Column(name = "Rank1_Text")
    private String Rank1Text;

    @Column(name = "Rank2_Text")
    private String Rank2Text;

    @Column(name = "Rank3_Text")
    private String Rank3Text;

    @Column(name = "Rank4_Text")
    private String Rank4Text;

    @Column(name = "Rank5_Text")
    private String Rank5Text;

    @Column(name = "Rank6_Text")
    private String Rank6Text;


}
