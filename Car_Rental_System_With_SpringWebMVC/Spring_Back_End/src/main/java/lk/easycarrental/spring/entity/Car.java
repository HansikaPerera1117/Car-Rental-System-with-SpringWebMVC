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
public class Car {
    @Id
    private String registrationNumber;
    private String brand;
    private String type;
    private String frontImage;
    private String backImage;
    private String sideImage;
    private String interiorImage;
    private int noOfPassengers;
    private String transmissionType;
    private String fuelType;
    private double dailyRate;
    private double monthlyRate;
    private long freeKMForADay;
    private long freeKMForAMonth;
    private double pricePerExtraKM;
    private double completeKm;
    private String color;
    private String availability;

    @OneToMany(mappedBy = "registrationNumber",cascade = CascadeType.ALL)
    private List<Maintain> maintain;
}
