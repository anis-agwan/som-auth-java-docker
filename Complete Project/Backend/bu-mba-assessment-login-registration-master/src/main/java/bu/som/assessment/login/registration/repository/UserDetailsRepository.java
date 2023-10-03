package bu.som.assessment.login.registration.repository;

import bu.som.assessment.login.registration.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {
    public UserDetails findByBingNumber(String bNumber);
    public UserDetails findByEmailId(String email);
}
