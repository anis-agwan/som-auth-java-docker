package bu.som.assessment.criticalThinking.repository;

import bu.som.assessment.criticalThinking.entity.CriticalThinkingQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriticalThinkingQuestionRepository extends JpaRepository<CriticalThinkingQuestions, String> {
}
