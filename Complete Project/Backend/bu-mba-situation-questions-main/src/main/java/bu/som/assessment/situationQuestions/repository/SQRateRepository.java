package bu.som.assessment.situationQuestions.repository;

import bu.som.assessment.situationQuestions.entity.SQRateScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SQRateRepository extends JpaRepository<SQRateScore, String> {
}
