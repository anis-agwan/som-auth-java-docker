package bu.som.assessment.personalBelief.repository;

import bu.som.assessment.personalBelief.entity.PersonalBelief;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonalBeliefRepository extends JpaRepository<PersonalBelief, String> {
}
