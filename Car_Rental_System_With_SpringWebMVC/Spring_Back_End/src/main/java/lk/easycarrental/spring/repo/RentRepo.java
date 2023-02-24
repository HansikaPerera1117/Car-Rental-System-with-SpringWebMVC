package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RentRepo extends JpaRepository<Rent,String> {

    @Query(value = "SELECT rentID FROM Rent ORDER BY rentID DESC LIMIT 1",nativeQuery = true)
    String generateRentId();

}
