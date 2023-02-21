package lk.easycarrental.spring.dto;

import lk.easycarrental.spring.entity.Car;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class MaintainDTO {
    private String MID;
    private String description;
    private String status;

    private String registrationNumber;

}
