package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Optional<Driver> findDriverByUsername(String username);

    Optional<Driver> findDriverByPassword(String password);

    Optional<Driver> findDriverByUsernameAndPassword(String username, String password);
}
