package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,String> {
}
