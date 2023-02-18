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

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    private List<Rent> rents;
}
