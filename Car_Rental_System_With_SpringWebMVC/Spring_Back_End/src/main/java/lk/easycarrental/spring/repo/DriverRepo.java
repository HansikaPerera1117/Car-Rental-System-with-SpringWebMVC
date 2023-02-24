package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Optional<Driver> findDriverByUsername(String username);

    Optional<Driver> findDriverByPassword(String password);

    Optional<Driver> findDriverByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT driverID FROM Driver ORDER BY driverID DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

    @Modifying
    @Transactional
    @Query(value = "UPDATE Driver SET address=:address,contactNo=:contactNo,drivingLicense=:drivingLicense,name=:name,nic=:nic,username=:username WHERE driverID=:driverID", nativeQuery = true)
    void updateDriver(@Param("driverID") String driverID, @Param("name") String name, @Param("address") String address, @Param("contactNo") String contactNo, @Param("nic") String nic, @Param("drivingLicense") String drivingLicense, @Param("username") String username);

    @Query(value = "SELECT COUNT(driverID) FROM Driver WHERE availability=:availability",nativeQuery = true)
    int getCountOfDriversByStatus(@Param("availability") String availability);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Driver SET password=:password WHERE driverID=:driverID", nativeQuery = true)
    void resetDriverPassword(@Param("driverID") String driverID, @Param("password") String password);

    @Query(value = "SELECT * FROM Driver WHERE availability='Available' ORDER BY RAND() LIMIT 1",nativeQuery = true)
    List<Driver> getRandomDriver();


}
