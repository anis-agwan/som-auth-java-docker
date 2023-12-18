package bu.som.assessment.login.registration.repository;

import bu.som.assessment.login.registration.entity.RegTempToken;
import bu.som.assessment.login.registration.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegTempTokenRepository  extends JpaRepository<RegTempToken, String> {
    public RegTempToken findByEmailId(String email);
}
