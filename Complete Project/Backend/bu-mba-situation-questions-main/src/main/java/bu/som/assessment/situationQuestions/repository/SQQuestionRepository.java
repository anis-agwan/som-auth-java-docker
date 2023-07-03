package bu.som.assessment.situationQuestions.repository;

import bu.som.assessment.situationQuestions.entity.SQQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SQQuestionRepository extends JpaRepository<SQQuestion, String> {
}
