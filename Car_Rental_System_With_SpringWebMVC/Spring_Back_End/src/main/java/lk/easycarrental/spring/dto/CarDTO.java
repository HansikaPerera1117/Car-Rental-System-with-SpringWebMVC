package lk.easycarrental.spring.dto;

import lk.easycarrental.spring.entity.Maintain;
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
public class CarDTO {
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
    private String color;
    private String availability;

    private List<MaintainDTO> maintain;
}
