package lk.easycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Payment {
    @Id
    private String paymentID;
    private LocalDate date;
    private double damageCharge;
    private double returnLossDamageWaiver;
    private double rentPrice;
    private long extraKM;
    private double priseForExtraKM;
    private double driverPayment;
    private double totalPayment;

    @OneToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "rentID",referencedColumnName = "rentID",nullable = false)
    private Rent rentID;
}
