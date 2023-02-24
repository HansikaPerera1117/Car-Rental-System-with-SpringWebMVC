package lk.easycarrental.spring.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentDTO {
    private String rentID;
    private LocalDate rentDate;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private String pickUpVenue;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private String returnVenue;
    private double lossDamageWaiver;
    private String bankSlip;
    private String status;

    private CarDTO car;
    private UserDTO user;
    private DriverDTO driver;

}
