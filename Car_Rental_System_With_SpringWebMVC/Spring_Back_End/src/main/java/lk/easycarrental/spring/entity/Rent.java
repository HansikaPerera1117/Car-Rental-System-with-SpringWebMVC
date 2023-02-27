package lk.easycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
//@IdClass(Rent_PK.class)
public class Rent {
    @Id
    private String rentID;
    private LocalDate rentDate;
//    @Id
//    private String registrationNumber;
//    @Id
//    private String userID;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private String pickUpVenue;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private String returnVenue;
    private double lossDamageWaiver;
    private String bankSlip;
    private String status;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "driverID",referencedColumnName = "driverID",nullable = true)
    private Driver driverID;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "registrationNumber",referencedColumnName = "registrationNumber")
    private Car cars;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "userID",referencedColumnName = "userID")
    private User users;

}
