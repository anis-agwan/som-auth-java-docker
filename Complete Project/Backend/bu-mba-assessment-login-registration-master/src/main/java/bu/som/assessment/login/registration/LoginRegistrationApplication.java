package bu.som.assessment.login.registration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class LoginRegistrationApplication {
    public static void main(String[] args) {
        SpringApplication.run(LoginRegistrationApplication.class);
        log.info("Login/Registration Service Started...");
    }
}