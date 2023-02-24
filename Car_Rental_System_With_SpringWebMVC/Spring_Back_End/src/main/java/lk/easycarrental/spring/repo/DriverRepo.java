package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Optional<Driver> findDriverByUsername(String username);

    Optional<Driver> findDriverByPassword(String password);

    Optional<Driver> findDriverByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT driverID FROM Driver ORDER BY driverID DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();
}
