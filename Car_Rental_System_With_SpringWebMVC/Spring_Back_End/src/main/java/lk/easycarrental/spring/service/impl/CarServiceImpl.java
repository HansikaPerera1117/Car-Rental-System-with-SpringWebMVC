package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.CarDTO;
import lk.easycarrental.spring.entity.Car;
import lk.easycarrental.spring.repo.CarRepo;
import lk.easycarrental.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!repo.existsById(dto.getRegistrationNumber())) {
            repo.save(mapper.map(dto, Car.class));
        } else {
            throw new RuntimeException("Car "+dto.getRegistrationNumber()+" Already Exist....!");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (repo.existsById(dto.getRegistrationNumber())) {
            repo.updateCar(dto.getRegistrationNumber(),dto.getBrand(),dto.getType(),dto.getNoOfPassengers(),dto.getTransmissionType(),dto.getFuelType(),dto.getDailyRate(),dto.getMonthlyRate(),dto.getFreeKMForADay(),dto.getFreeKMForAMonth(),dto.getPricePerExtraKM(),dto.getCompleteKm(),dto.getColor());
        } else {
            throw new RuntimeException("Car "+dto.getRegistrationNumber()+" Not Exist to Update....!");
        }
    }

    @Override
    public void deleteCar(String registrationNumber) {
        if (repo.existsById(registrationNumber)) {
            repo.deleteById(registrationNumber);
        } else {
            throw new RuntimeException("Car "+registrationNumber+" Not Exist to Delete....!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {}.getType());
    }

    @Override
    public CarDTO searchCar(String registrationNumber) {
        return mapper.map(repo.findById(registrationNumber).get(), CarDTO.class);
    }

    @Override
    public void updateCarFilePaths(String frontImage, String backImage, String sideImage, String interiorImage, String registrationNumber) {
        if (repo.existsById(registrationNumber)) {
            repo.updateCarFilePaths(frontImage, backImage, sideImage, interiorImage, registrationNumber);
        } else {
            throw new RuntimeException("Car "+registrationNumber+" Not Exist to Update....!");
        }
    }

    @Override
    public int getCountOfCarsByStatus(String availability) {
        return repo.getCountOfCarsByStatus(availability);

    }

    @Override
    public List<String> getCarRegistrationNumbersByType(String type) {
        return repo.getCarRegistrationNoByType(type);
    }
}
