package bu.som.assessment.login.registration.service;

import bu.som.assessment.login.registration.Dto.ForgotPassResponseDTO;
import bu.som.assessment.login.registration.Dto.NewUserDto;
import bu.som.assessment.login.registration.entity.EmailDetails;
import bu.som.assessment.login.registration.entity.RegTempToken;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.repository.RegTempTokenRepository;
import bu.som.assessment.login.registration.repository.UserDetailsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.Random;

@Service
@Slf4j
public class RegistrationService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    @Autowired
    RegTempTokenRepository regTempTokenRepository;

    @Autowired
    private EmailServiceImpl emailService;

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
                regTempTokenRepository.deleteById(userDto.getEmailId());
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

    protected String getSaltString() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 12) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }

    public String generateToken(String email) {
        String token = new String();

        if(userDetailsRepository.existsById(email)) {
            token = "User already exists";
            System.out.println("User exists");

        } else {
//            UserDetails res = userDetailsRepository.findByEmailId(email);
            RegTempToken res = new RegTempToken();
            res.setEmailId(email);
            token = getSaltString();
            res.setToken(token);
            regTempTokenRepository.save(res);
//            res.setToken(token);
//            userDetailsRepository.save(res);

            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setRecipient(email);
            emailDetails.setSubject("Registration Token");
            emailDetails.setMsgBody("The following token is generated for registration. Please do no share this with anyone. \n" + token);
            emailService.sendSimpleMail(emailDetails);
        }

        return token;
    }

    public ForgotPassResponseDTO confirmToken(String email, String token) {
        String text = new String();
        ForgotPassResponseDTO responseDTO = new ForgotPassResponseDTO();
        if(regTempTokenRepository.existsById(email)) {
            RegTempToken res = regTempTokenRepository.findByEmailId(email);
            System.out.println("BLAH BLAH " + res);
            if(res.getToken().equals(token)) {
                responseDTO.setEmail(email);
                responseDTO.setIsValid(true);
                responseDTO.setMessage("Token matches with the secret token");
                responseDTO.setStatus(200);
            } else {
                responseDTO.setEmail(email);
                responseDTO.setIsValid(false);
                responseDTO.setMessage("Token does not match with the secret token");
                responseDTO.setStatus(404);
            }
        } else {
            responseDTO.setEmail(email);
            responseDTO.setIsValid(false);
            responseDTO.setMessage("No such email found");
            responseDTO.setStatus(404);
        }
        System.out.println(responseDTO);
        return responseDTO;
    }
}