package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Maintain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaintainRepo extends JpaRepository<Maintain,String> {

    @Query(value = "SELECT mID FROM Maintain ORDER BY mID DESC LIMIT 1", nativeQuery = true)
    String generateMaintenanceId();

}
