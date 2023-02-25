package lk.easycarrental.spring.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
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
   // @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate rentDate;
    //@JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickUpDate;
  //  @JsonFormat(pattern = " HH:mm:ss")
    private LocalTime pickUpTime;
    private String pickUpVenue;
   // @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
  //  @JsonFormat(pattern = " HH:mm:ss")
    private LocalTime returnTime;
    private String returnVenue;
    private double lossDamageWaiver;
    private String bankSlip;
    private String status;

    private CarDTO car;
    private UserDTO user;
    private DriverDTO driver;

}
