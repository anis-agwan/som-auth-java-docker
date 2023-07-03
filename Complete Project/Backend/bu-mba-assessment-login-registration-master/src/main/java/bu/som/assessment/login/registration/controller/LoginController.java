package bu.som.assessment.login.registration.controller;

import bu.som.assessment.login.registration.Dto.ExistingUserDto;
import bu.som.assessment.login.registration.Dto.LoginResponseDto;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/login")
@Slf4j
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping("/verify-user")
    public LoginResponseDto verifyUser(@RequestBody ExistingUserDto existingUser) {
        try {
            return loginService.validateUserCredentials(existingUser);
        } catch (Exception e) {
            System.out.println("ERR:   "+e.getMessage());
            return new LoginResponseDto(null, null, null, null, "Invalid", null);
        }
    }

    @GetMapping("/getUser/{bb}")
    public LoginResponseDto getUserDets(@PathVariable("bb") String bn) {
        LoginResponseDto loggedUser = new LoginResponseDto();
        System.out.println("B_NUMBER IS "+bn);
        try {
            UserDetails user = loginService.getUserDetails(bn);
            loggedUser.setLastName(user.getLastName());
            loggedUser.setRole(user.getRole());
            loggedUser.setEmailId(user.getEmailId());
            loggedUser.setFirstName(user.getFirstName());
            loggedUser.setBingNumber(user.getBingNumber());
            loggedUser.setValidationIndicator("Valid");
            System.out.println(user);
            return loggedUser;

        } catch (Exception err) {
            System.out.println(err);

            return new LoginResponseDto(null, null, null, null, "Invalid", null);
        }
    }
}
