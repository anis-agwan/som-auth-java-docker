package bu.som.assessment.login.registration.Dto;

import lombok.Data;

@Data
public class ForgotPasswordDTO {
    private String email;
    private String token;
    private String newPassword;
}
