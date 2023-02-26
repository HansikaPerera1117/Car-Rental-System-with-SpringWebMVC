package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Driver;
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

    @Modifying
    @Transactional
    @Query(value = "UPDATE Rent SET status=:status WHERE rentID=:rentID", nativeQuery = true)
    void updateCarRentStatus(@Param("rentID") String rentID, @Param("status") String status);

//    @Modifying
//    @Transactional
//    @Query(value = "UPDATE Rent SET driverID=:driverID WHERE rentId=:rentId", nativeQuery = true)
//    void updateRentDriver(@Param("rentId") String rentId,@Param("driverID") String driverID);


    @Query(value = "SELECT COUNT(rentID) FROM Rent WHERE status=:status", nativeQuery = true)
    int getCountOfRentsByStatus(@Param("status") String status);

}
