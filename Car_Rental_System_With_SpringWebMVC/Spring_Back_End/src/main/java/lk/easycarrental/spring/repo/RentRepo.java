package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface RentRepo extends JpaRepository<Rent,String> {

    @Query(value = "SELECT rentID FROM Rent ORDER BY rentID DESC LIMIT 1",nativeQuery = true)
    String generateRentId();

    @Modifying
    @Transactional
    @Query(value = "UPDATE Rent SET bankSlip=:bankSlip WHERE rentId=:rentId", nativeQuery = true)
    void updateRentFilePaths(@Param("bankSlip") String bankSlip, @Param("rentId") String rentId);

}
