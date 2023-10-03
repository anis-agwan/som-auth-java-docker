package bu.som.assessment.login.registration.service;

import bu.som.assessment.login.registration.Dto.ExistingUserDto;
import bu.som.assessment.login.registration.Dto.ForgotPassResponseDTO;
import bu.som.assessment.login.registration.Dto.LoginResponseDto;
import bu.som.assessment.login.registration.entity.EmailDetails;
import bu.som.assessment.login.registration.entity.UserDetails;
import bu.som.assessment.login.registration.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class LoginService {

    @Autowired
    private UserDetailsRepository repository;

    @Autowired
    private EmailServiceImpl emailService;

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

    public UserDetails checkUserExists(String email) {
        UserDetails user = new UserDetails();
        UserDetails res = repository.findByEmailId(email);
        res.setPassword("");
        return res;
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

        if(repository.existsById(email)) {
            UserDetails res = repository.findByEmailId(email);
            token = getSaltString();
            res.setToken(token);
            repository.save(res);

            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setRecipient(email);
            emailDetails.setSubject("Password Recovery Token");
            emailDetails.setMsgBody("The following token is generated to recover your password. Please do no share this with anyone. \n" + token);
            emailService.sendSimpleMail(emailDetails);
        } else {
            token = "No such email";
            System.out.println("NO email");
        }

        return token;
    }

    public ForgotPassResponseDTO confirmToken(String email, String token) {
        String text = new String();
        ForgotPassResponseDTO responseDTO = new ForgotPassResponseDTO();
        if(repository.existsById(email)) {
            UserDetails res = repository.findByEmailId(email);
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

    public ForgotPassResponseDTO newPassword(String email, String password) {
//        System.out.println("EMAIL: "+ email);
//        UserDetails res = repository.findByEmailId(email);
////        System.out.println(res);
//        res.setPassword(password);
//        repository.save(res);
//        return "Password Changed successfully";
        ForgotPassResponseDTO responseDTO = new ForgotPassResponseDTO();
        if(repository.existsById(email)) {
            UserDetails res = repository.findByEmailId(email);
            res.setPassword(password);
            res.setToken(null);
            repository.save(res);
            responseDTO.setEmail(email);
            responseDTO.setIsValid(true);
            responseDTO.setMessage("Password changed successfully");
            responseDTO.setStatus(200);
            return responseDTO;
        } else {
            responseDTO.setEmail(email);
            responseDTO.setIsValid(false);
            responseDTO.setMessage("Error While changing password");
            responseDTO.setStatus(404);
            return responseDTO;
        }
    }

}
