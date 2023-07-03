package bu.som.assessment.login.registration.controller;

import bu.som.assessment.login.registration.Dto.NewUserDto;
import bu.som.assessment.login.registration.service.RegistrationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@CrossOrigin
@RestController
@RequestMapping("/register")
@Slf4j
public class RegistrationController {

    @Autowired
    RegistrationService registrationService;

    @PostMapping("/user")
    public String saveUser(@RequestBody NewUserDto newUserDto, @RequestParam(required=false) String role) {
        try {
//            System.out.println(role);
            return registrationService.saveUser(newUserDto, role);
        } catch (SQLException e) {
            String errMessage = e.getMessage();
            log.error(errMessage);
            return errMessage;
        } catch (DataIntegrityViolationException e1) {
            String errMessage = "Error : Email / B-Number already exists";
            log.error(errMessage);
            return errMessage;
        }
    }
}
