package lk.easycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
@IdClass(Rent_PK.class)
public class Rent {
    @Id
    public String rentID;
    public String rentDate;
    @Id
    public String carID;
    @Id
    public String userID;
    public String pickUpDate;
    public String pickUpTime;
    public String pickUpVenue;
    public String returnDate;
    public String returnTime;
    public String returnVenue;
    public String lossDamageWaiver;
    public String BankSlip;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "driverID",referencedColumnName = "driverID",nullable = false)
    public Driver driverID;

    @ManyToOne
    @JoinColumn(name = "carID",referencedColumnName = "carID",insertable = false,updatable = false)
    private Car cars;

    @ManyToOne
    @JoinColumn(name = "userID",referencedColumnName = "userID",insertable = false,updatable = false)
    private User users;
}
