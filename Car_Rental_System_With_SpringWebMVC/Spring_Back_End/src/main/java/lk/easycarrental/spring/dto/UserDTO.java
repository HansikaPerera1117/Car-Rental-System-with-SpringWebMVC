package lk.easycarrental.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
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
    private String nic;
    private String imageOfNICFront;
    private String imageOfNICBack;
    private String drivingLicense;
    private String imageOfDrivingLicense;
    private String username;
    private String password;

}
