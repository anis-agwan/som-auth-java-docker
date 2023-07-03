package bu.som.assessment.login.registration.Dto;

import lombok.Data;

@Data
public class NewUserDto {
    private String emailId;
    private String firstName;
    private String lastName;
    private String bingNumber;
    private String password;
    private String role;
}
