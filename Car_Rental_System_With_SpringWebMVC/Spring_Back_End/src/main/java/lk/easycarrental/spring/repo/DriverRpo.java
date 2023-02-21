package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRpo extends JpaRepository<Driver,String> {
}
