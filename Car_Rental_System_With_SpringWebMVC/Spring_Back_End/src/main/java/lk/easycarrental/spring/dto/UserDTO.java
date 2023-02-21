package lk.easycarrental.spring.dto;

import lk.easycarrental.spring.entity.Rent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {
    private String userID;
    private String name;
    private String address;
    private String contactNo;
    private String email;
    private String NIC;
    private String imageOfNIC;
    private String drivingLicense;
    private String imageOfDrivingLicense;
    private String username;
    private String password;

    private List<RentDTO> rents;
}
