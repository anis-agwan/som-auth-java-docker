package bu.som.assessment.login.registration.service;

import bu.som.assessment.login.registration.Dto.ExistingUserDto;
import bu.som.assessment.login.registration.Dto.LoginResponseDto;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private UserDetailsRepository repository;

    public LoginResponseDto validateUserCredentials(ExistingUserDto existingUser) {
        LoginResponseDto responseDto = new LoginResponseDto();
        if (repository.existsById(existingUser.getEmailId())) {
            Optional<UserDetails> dbUser = repository.findById(existingUser.getEmailId());
            if (dbUser.isPresent() && dbUser.get().getEmailId().equals(existingUser.getEmailId()) && dbUser.get().getPassword().equals(existingUser.getPassword())) {
                responseDto.setBingNumber(dbUser.get().getBingNumber());
                responseDto.setFirstName(dbUser.get().getFirstName());
                responseDto.setLastName(dbUser.get().getLastName());
                responseDto.setEmailId(dbUser.get().getEmailId());
                responseDto.setRole(dbUser.get().getRole());
                responseDto.setValidationIndicator("Valid");
            } else {
                responseDto.setValidationIndicator("Invalid");
            }
        } else {
            responseDto.setValidationIndicator("Invalid");
        }
        System.out.println(responseDto);
        return responseDto;
    }

    public UserDetails getUserDetails(String bNumber) {
        UserDetails user = new UserDetails();
        UserDetails res = repository.findByBingNumber(bNumber);
        res.setPassword("");
        return res;
    }
}
