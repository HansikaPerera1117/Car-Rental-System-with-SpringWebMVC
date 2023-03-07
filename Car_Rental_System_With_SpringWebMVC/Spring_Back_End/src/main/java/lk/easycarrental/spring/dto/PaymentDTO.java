package lk.easycarrental.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentID;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private double damageCharge;
    private double returnLossDamageWaiver;
    private double rentPrice;
    private long extraKM;
    private double priseForExtraKM;
    private double driverPayment;
    private double totalPayment;

    private RentDTO rentID;

    public PaymentDTO(LocalDate date, double totalPayment) {
        this.date = date;
        this.totalPayment = totalPayment;
    }

    public PaymentDTO(double rentPrice, double totalPayment) {
        this.rentPrice = rentPrice;
        this.totalPayment = totalPayment;
    }

    public PaymentDTO(String paymentID, double totalPayment) {
        this.paymentID = paymentID;
        this.totalPayment = totalPayment;
    }
}
