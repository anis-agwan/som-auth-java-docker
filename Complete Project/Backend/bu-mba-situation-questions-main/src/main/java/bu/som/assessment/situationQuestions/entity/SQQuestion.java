package bu.som.assessment.situationQuestions.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@Entity
@NoArgsConstructor
@Table(name = "sq_table", schema = "user")
public class SQQuestion {
    @Id
    @Column(name = "SituationNumber")
    private int SituationNumber;

    @Column(name = "SituationText")
    private String SituationText;

    @Column(name = "PrevSituationNumber")
    private Integer PrevSituationNumber;

    @Column(name = "PrevSituationText")
    private String PrevSituationText;

    @Column(name = "Rank1text")
    private String Rank1text;

    @Column(name = "Rank2text")
    private String Rank2text;

    @Column(name = "Rank3text")
    private String Rank3text;

    @Column(name = "Rank4text")
    private String Rank4text;

    @Column(name = "Rank5text")
    private String Rank5text;

    @Column(name = "Rank6text")
    private String Rank6text;
}
