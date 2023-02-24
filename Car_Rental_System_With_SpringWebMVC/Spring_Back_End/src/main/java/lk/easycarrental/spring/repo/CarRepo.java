package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.dto.CarDTO;
import lk.easycarrental.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE Car SET backImage=:backImage,frontImage=:frontImage,interiorImage=:interiorImage,sideImage=:sideImage WHERE registrationNumber=:registrationNumber", nativeQuery = true)
    void updateCarFilePaths(@Param("frontImage") String frontImage, @Param("backImage") String backImage, @Param("sideImage") String sideImage, @Param("interiorImage") String interiorImage, @Param("registrationNumber") String registrationNumber);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Car SET brand=:brand,color=:color,dailyRate=:dailyRate,freeKMForADay=:freeKMForADay,freeKMForAMonth=:freeKMForAMonth,fuelType=:fuelType,monthlyRate=:monthlyRate,noOfPassengers=:noOfPassengers,pricePerExtraKM=:pricePerExtraKM,transmissionType=:transmissionType,type=:type,completeKm=:completeKm WHERE registrationNumber=:registrationNumber", nativeQuery = true)
    void updateCar(@Param("registrationNumber") String registrationNumber, @Param("brand") String brand, @Param("type") String type, @Param("noOfPassengers") int noOfPassengers, @Param("transmissionType") String transmissionType, @Param("fuelType") String fuelType, @Param("dailyRate") double dailyRate, @Param("monthlyRate") double monthlyRate, @Param("freeKMForADay") long freeKMForADay, @Param("freeKMForAMonth") long freeKMForAMonth, @Param("pricePerExtraKM") double pricePerExtraKM, @Param("completeKm") double completeKm, @Param("color") String  color);

    @Query(value = "SELECT COUNT(registrationNumber) FROM Car WHERE availability=:availability", nativeQuery = true)
    int getCountOfCarsByStatus(@Param("availability") String availability);

    @Query(value = "SELECT registrationNumber,color FROM Car WHERE type=:type ,brand=:brand, availability='Available'", nativeQuery = true)
    List<CarDTO> getCarRegistrationNoByTypeAndBrand(@Param("type") String type,@Param("brand") String brand);

}
