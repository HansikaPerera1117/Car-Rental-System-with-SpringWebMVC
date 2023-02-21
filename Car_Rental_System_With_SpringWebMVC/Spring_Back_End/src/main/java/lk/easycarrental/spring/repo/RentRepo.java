package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepo extends JpaRepository<Rent,String> {
}
