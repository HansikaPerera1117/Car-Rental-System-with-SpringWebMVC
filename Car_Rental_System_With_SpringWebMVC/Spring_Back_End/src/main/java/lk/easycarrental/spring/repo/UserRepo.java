package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,String> {
}
