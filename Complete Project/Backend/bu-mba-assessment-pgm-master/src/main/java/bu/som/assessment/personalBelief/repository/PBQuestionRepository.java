package bu.som.assessment.personalBelief.repository;

import bu.som.assessment.personalBelief.entity.PBQuestions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PBQuestionRepository extends JpaRepository<PBQuestions, String> {
}
