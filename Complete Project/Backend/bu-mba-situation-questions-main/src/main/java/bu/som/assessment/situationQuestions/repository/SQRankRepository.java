package bu.som.assessment.situationQuestions.repository;

import bu.som.assessment.situationQuestions.entity.SQRankScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SQRankRepository extends JpaRepository<SQRankScore,String> {
}
