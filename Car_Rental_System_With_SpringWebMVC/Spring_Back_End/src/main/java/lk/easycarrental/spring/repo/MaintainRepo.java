package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Maintain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MaintainRepo extends JpaRepository<Maintain,String> {

    @Query(value = "SELECT maintainID FROM Maintain ORDER BY maintainID DESC LIMIT 1", nativeQuery = true)
    String generateMaintenanceId();

}
