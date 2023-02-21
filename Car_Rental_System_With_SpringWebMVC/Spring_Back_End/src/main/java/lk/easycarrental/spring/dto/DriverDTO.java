package lk.easycarrental.spring.dto;

import lk.easycarrental.spring.entity.Rent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverID;
    private String name;
    private String address;
    private String contactNo;
    private String NIC;
    private String drivingLicense;
    private String username;
    private String password;
    private String availability;

    private List<RentDTO> rents;

}
