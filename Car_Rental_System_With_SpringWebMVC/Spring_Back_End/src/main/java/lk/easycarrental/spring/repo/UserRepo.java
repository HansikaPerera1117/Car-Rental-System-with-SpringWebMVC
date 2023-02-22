package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User,String> {

    @Query(value = "SELECT userID FROM User ORDER BY userID DESC LIMIT 1", nativeQuery = true)
    String generateUserId();

}
