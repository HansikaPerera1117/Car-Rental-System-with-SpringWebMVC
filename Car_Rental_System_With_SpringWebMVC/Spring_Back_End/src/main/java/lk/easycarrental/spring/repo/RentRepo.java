package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Driver;
import lk.easycarrental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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

    List<Rent> getAllByStatus(String status);


//    @Modifying
//    @Transactional
//    @Query(value = "UPDATE Rent SET driverID=:driverID WHERE rentId=:rentId", nativeQuery = true)
//    void updateRentDriver(@Param("rentId") String rentId,@Param("driverID") String driverID);


    @Query(value = "SELECT COUNT(rentID) FROM Rent WHERE status=:status", nativeQuery = true)
    int getCountOfRentsByStatus(@Param("status") String status);

    @Query(value = "SELECT * from Rent where status=:status AND driverID=:driverID", nativeQuery = true)
    List<Rent> getAllByDriverID(@Param("status") String status, @Param("driverID") String driverID);

    @Query(value = "SELECT * FROM Rent WHERE pickUpDate=:today",nativeQuery = true)
    List<Rent> getTodayRents(@Param("today") String today);

    @Query(value = "SELECT * FROM Rent WHERE userID=:userID",nativeQuery = true)
    List<Rent> getAllByUserID(@Param("userID") String userID);

//    @Query(value = "SELECT * from Rent where status=:status AND registrationNumber=:registrationNumber", nativeQuery = true)
//    List<Rent> getAllByCars(@Param("status") String status, @Param("registrationNumber") String registrationNumber);


}
