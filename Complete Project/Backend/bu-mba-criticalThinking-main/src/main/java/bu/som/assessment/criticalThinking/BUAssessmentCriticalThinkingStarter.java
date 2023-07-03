package bu.som.assessment.criticalThinking;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Slf4j
public class BUAssessmentCriticalThinkingStarter {


    public static void main(String[] args) {
        SpringApplication.run(BUAssessmentCriticalThinkingStarter.class);
        log.info("Critical Thinking Section Service Started...");
    }
}