package bu.som.assessment.personalBelief.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "user_info", schema = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetail {

    @Id
    @Column(name = "USER_ID")
    private String userId;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "EMAIL_ID")
    private String emailId;

    @Column(name = "EVAL_DT")
    private Date evaluationDate;

    @Column(name = "PWD")
    private String password;

    @Column(name = "UPDT_TS")
    private Timestamp updateTimestamp;

}
