package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String > {
}
