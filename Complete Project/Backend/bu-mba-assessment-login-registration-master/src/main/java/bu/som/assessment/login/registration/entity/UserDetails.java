package bu.som.assessment.login.registration.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "user_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDetails {
    @Id
    @Column(name = "EMAIL_ID")
    private String emailId;

    @Column(name = "B_NUMBER")
    private String bingNumber;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "CREATED_AT")
    private Date createdAt;

    @Column(name = "UPDT_STAT_CD")
    private String updateStatusCode;

    @Column(name = "ROLE")
    private String role;

}
