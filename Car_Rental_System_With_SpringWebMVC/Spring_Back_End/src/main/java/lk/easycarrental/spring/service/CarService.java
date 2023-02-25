package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.CarDTO;

import java.util.List;

public interface CarService {

    void saveCar(CarDTO dto);

    void updateCar(CarDTO dto);

    void deleteCar(String registrationNumber);

    List<CarDTO> getAllCars();

    CarDTO searchCar(String registrationNumber);

    void updateCarFilePaths(String frontImage, String backImage, String sideImage, String interiorImage, String registrationNumber);

    int getCountOfCarsByStatus(String availability);

    List<CarDTO> getCarRegistrationNoByTypeAndBrand(String type,String brand);

    void updateCarAvailability(String registrationNumber, String availability);


}
