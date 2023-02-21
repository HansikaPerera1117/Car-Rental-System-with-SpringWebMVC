package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.LogIn;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogInRepo extends JpaRepository<LogIn,String> {
}
