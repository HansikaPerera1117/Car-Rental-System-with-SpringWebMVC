package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.LogIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LogInRepo extends JpaRepository<LogIn,String> {

    @Query(value = "SELECT loginID FROM Login ORDER BY loginID DESC LIMIT 1",nativeQuery = true)
    String getLastLoginId();
}
