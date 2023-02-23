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
    private String status;

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    private List<Rent> rents;
}
