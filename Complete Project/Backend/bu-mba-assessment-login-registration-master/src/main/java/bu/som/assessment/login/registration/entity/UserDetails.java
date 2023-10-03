package bu.som.assessment.login.registration.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name = "user_details_token")
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

    @Column(name = "UPDT_STAT_CD")
    private String updateStatusCode;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "TOKEN")
    private String token;

}
