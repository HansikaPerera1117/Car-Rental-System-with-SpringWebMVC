package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car,String> {
}
