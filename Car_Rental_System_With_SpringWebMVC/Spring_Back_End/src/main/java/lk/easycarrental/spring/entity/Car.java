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
public class Car {
    @Id
    public String registrationNumber;
    public String brand;
    public String type;
    public String frontImage;
    public String backImage;
    public String sideImage;
    public String interiorImage;
    public String noOfPassengers;
    public String transmissionType;
    public String fuelType;
    public String dailyRate;
    public String monthlyRate;
    public String freeKMForADay;
    public String freeKMForAMonth;
    public String pricePerExtraKM;
    public String color;
    public String availability;
}
