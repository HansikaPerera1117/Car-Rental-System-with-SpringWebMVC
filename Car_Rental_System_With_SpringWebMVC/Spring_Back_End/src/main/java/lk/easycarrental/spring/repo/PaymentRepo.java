package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query(value = "SELECT paymentId FROM Payment ORDER BY paymentId DESC LIMIT 1", nativeQuery = true)
    String generatePaymentId();

    @Query(value = "SELECT date,totalPayment as Income FROM Payment GROUP BY date ORDER BY date", nativeQuery = true)
    List<Payment> getAllPaymentsByDaily();

    @Query(value = "SELECT WEEK(date) weeks,sum(totalPayment) as Income FROM payment WHERE date >    DATE_SUB(NOW(), INTERVAL 5 WEEK) GROUP BY WEEK(date) ORDER BY date", nativeQuery = true)
    List<Payment> getAllPaymentsByWeekly();

    @Query(value = "SELECT MONTHNAME(date) as 'Month Name', sum(totalPayment) as Income FROM payment WHERE YEAR(date) = YEAR(CURDATE()- INTERVAL 1 YEAR) GROUP BY YEAR(date),MONTH(date)", nativeQuery = true)
    List<Payment> getAllPaymentsByMonthly();
}
