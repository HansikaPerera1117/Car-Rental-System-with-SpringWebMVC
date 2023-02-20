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
public class Driver {
    @Id
    public String driverID;
    public String name;
    public String address;
    public String contactNo;
    public String NIC;
    public String drivingLicense;
    public String username;
    public String password;
    public String availability;

}
