package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Maintain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface MaintainRepo extends JpaRepository<Maintain,String> {

    @Query(value = "SELECT maintainID FROM Maintain ORDER BY maintainID DESC LIMIT 1", nativeQuery = true)
    String generateMaintenanceId();

    @Modifying
    @Transactional
    @Query(value = "UPDATE Maintain  SET status=:status WHERE maintainID=:maintainID", nativeQuery = true)
    void updateMaintenanceStatus(@Param("status") String status, @Param("maintainID") String maintainID);


}
