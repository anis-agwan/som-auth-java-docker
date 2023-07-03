package bu.som.assessment.personalBelief;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class AssessmentProgramStarter {

    public static void main(String[] args) {
        SpringApplication.run(AssessmentProgramStarter.class, args);
        log.info("Personal Beliefs Step Started...");
    }
}