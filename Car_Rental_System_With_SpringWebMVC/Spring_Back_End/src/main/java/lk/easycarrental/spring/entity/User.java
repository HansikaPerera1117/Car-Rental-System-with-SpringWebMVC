package lk.easycarrental.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    public String userID;
    public String name;
    public String address;
    public String contactNo;
    public String email;
    public String NIC;
    public String imageOfNIC;
    public String drivingLicense;
    public String imageOfDrivingLicense;
    public String username;
    public String password;
}
