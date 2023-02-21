package lk.easycarrental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentID;
    private LocalDate date;
    private double damageCharge;
    private double returnLossDamageWaiver;
    private double rentPrice;
    private long extraKM;
    private double priseForExtraKM;
    private double driverPayment;
    private double totalPayment;

    private String rentID;


}