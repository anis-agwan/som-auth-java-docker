package bu.som.assessment.situationQuestions.repository;

import bu.som.assessment.situationQuestions.entity.SituationQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SituationQRepo extends JpaRepository<SituationQuestion, Long> {
}
