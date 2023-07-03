package bu.som.assessment.login.registration.service;

import bu.som.assessment.login.registration.Dto.NewUserDto;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.repository.UserDetailsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
@Slf4j
public class RegistrationService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public String saveUser(NewUserDto userDto, String userRole) throws SQLException, DataIntegrityViolationException {
            String message;
            if (userDetailsRepository.existsById(userDto.getEmailId())) {
                message = "Error : Email / B-Number already exists";
            } else {
                UserDetails user = new UserDetails();
                user.setUpdateStatusCode("A");
                user.setBingNumber(userDto.getBingNumber());
                user.setFirstName(userDto.getFirstName());
                user.setLastName(userDto.getLastName());
                user.setEmailId(userDto.getEmailId());
                user.setPassword(userDto.getPassword());
                user.setRole(userRole);
                userDetailsRepository.save(user);

                message = userDto.getFirstName() + ", You have been registered...";
            }
            return message;
//        UserDetails user = new UserDetails();
//        user.setUpdateStatusCode(userDetailsRepository.existsById(userDto.getEmailId()) ? "A" :  "U");
//        user.setBingNumber(userDto.getBingNumber());
//        user.setFirstName(userDto.getFirstName());
//        user.setLastName(userDto.getLastName());
//        user.setEmailId(userDto.getEmailId());
//        user.setPassword(userDto.getPassword());
//        user.setRole(userRole);
//        userDetailsRepository.save(user);
    }
}