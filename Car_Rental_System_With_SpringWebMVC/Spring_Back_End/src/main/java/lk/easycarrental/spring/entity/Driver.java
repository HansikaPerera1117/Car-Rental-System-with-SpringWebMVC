package lk.easycarrental.spring.entity;

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
@Entity
public class Driver {
    @Id
    private String driverID;
    private String name;
    private String address;
    private String contactNo;
    private String nic;
    private String drivingLicense;
    private String username;
    private String password;
    private String availability;

    @OneToMany(mappedBy = "driverID",cascade = CascadeType.ALL)
    private List<Rent> rents;

    public Driver(String driverID) {
        this.driverID = driverID;
    }
}
