package bu.som.assessment.personalBelief.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "pb_questions", schema = "personal_beliefs")
@AllArgsConstructor
@NoArgsConstructor
public class PBQuestions {

    @Id
    @Column(name = "QID")
    private int questionNumber;

    @Column(name = "QUESTION_DESC")
    private String questionDescription;

    @Column(name = "STRONGLY_DISAGREE")
    private int stronglyDisAgree;

    @Column(name = "DISAGREE")
    private int disAgree;

    @Column(name = "NEUTRAL")
    private int neutral;

    @Column(name = "AGREE")
    private int agree;

    @Column(name = "STRONGLY_AGREE")
    private int stronglyAgree;

}
