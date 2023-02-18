package lk.easycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Payment {
    @Id
    public String paymentID;
    public String date;
    public String damageCharge;
    public String returnLossDamageWaiver;
    public String rentPrice;
    public String extraKM;
    public String priseForExtraKM;
    public String driverPayment;
    public String totalPayment;

    @OneToOne
    @JoinColumn(name = "rentID")
    private Rent rentID;
}
