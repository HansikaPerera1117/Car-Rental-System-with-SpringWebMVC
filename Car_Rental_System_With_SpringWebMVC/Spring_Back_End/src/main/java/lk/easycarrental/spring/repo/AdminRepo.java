package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,String > {

    Optional<Admin> findAdminByUsername(String username);
    Optional<Admin> findAdminByPassword(String password);

}
