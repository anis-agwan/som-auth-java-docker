package bu.som.assessment.login.registration.controller;

import bu.som.assessment.login.registration.Dto.ExistingUserDto;
import bu.som.assessment.login.registration.Dto.ForgotPassResponseDTO;
import bu.som.assessment.login.registration.Dto.ForgotPasswordDTO;
import bu.som.assessment.login.registration.Dto.LoginResponseDto;
import bu.som.assessment.login.registration.entity.EmailDetails;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.service.EmailServiceImpl;
import bu.som.assessment.login.registration.service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/login")
@Slf4j
public class LoginController {

    @Autowired
    LoginService loginService;

    @Autowired
    private EmailServiceImpl emailService;

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

    @PostMapping("checkUserExists")
    public LoginResponseDto checkUserEmailExists(@RequestBody HashMap<String, String> details) {
        LoginResponseDto loggedUser = new LoginResponseDto();
        System.out.println("Email IS "+details.get("email"));
        try {
            UserDetails user = loginService.checkUserExists(details.get("email"));
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

    @PostMapping("generatetoken")
    public String genToken(@RequestBody ForgotPasswordDTO forgotPasswordDTO) {
        System.out.println(forgotPasswordDTO);
        try {
            UserDetails user = loginService.checkUserExists(forgotPasswordDTO.getEmail());

            System.out.println(user);
            return loginService.generateToken(forgotPasswordDTO.getEmail());

        } catch (Exception err) {
            System.out.println(err);
        }
        return "No Such email found";
    }

    @PostMapping("confirmtoken")
    public ForgotPassResponseDTO confirmToken(@RequestBody ForgotPasswordDTO forgotPasswordDTO) {
        try {
            return loginService.confirmToken(forgotPasswordDTO.getEmail(), forgotPasswordDTO.getToken());
        } catch (Exception err) {
            ForgotPassResponseDTO resp = new ForgotPassResponseDTO() ;
            resp.setEmail(forgotPasswordDTO.getEmail());
            resp.setIsValid(false);
            resp.setMessage("Invalid details and token");
            resp.setStatus(404);

            return resp;
        }

    }

    @PostMapping("newPassword")
    public ForgotPassResponseDTO newPasswordGen(@RequestBody HashMap<String, String> details) {
//        System.out.println("CONTROLLER EMAIL: " + details.get("email"));
        String email = details.get("email");
        String newPassword = details.get("newPassword");
        return loginService.newPassword(email, newPassword);
    }
}
