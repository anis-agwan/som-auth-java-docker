package bu.som.assessment.login.registration.Dto;

import lombok.Data;

@Data
public class ForgotPassResponseDTO {
    private String email;
    private Boolean isValid;
    private String message;
    private Integer status;
}
