package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.config.WebRootConfig;
import lk.easycarrental.spring.entity.CustomEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@WebAppConfiguration
@ContextConfiguration(classes = {WebRootConfig.class})
@ExtendWith(SpringExtension.class)
class PaymentRepoTest {

    @Autowired
    PaymentRepo repo;

    @Test
    void getAllPaymentsByWeekly()  {
//        List<Object> allPaymentsByWeekly = repo.getAllPaymentsByWeekly();
        List<CustomEntity> a = repo.getAllPaymentsByWeekly();
        for (CustomEntity c : a) {
            System.out.println(c.getIncome());
            System.out.println(c.getWeek());
        }


//        while (rst.next()) {
//            BigDecimal bigDecimal = rst.getBigDecimal(2);
//            System.out.println(bigDecimal);
//        }

    }
}