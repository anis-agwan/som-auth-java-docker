package bu.som.assessment.login.registration.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {
    private String emailId;
    private String firstName;
    private String lastName;
    private String bingNumber;
    private String validationIndicator;
    private String role;
}
