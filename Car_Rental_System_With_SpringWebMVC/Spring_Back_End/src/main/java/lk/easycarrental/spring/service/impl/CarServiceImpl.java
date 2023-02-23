package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.CarDTO;
import lk.easycarrental.spring.entity.Car;
import lk.easycarrental.spring.repo.CarRepo;
import lk.easycarrental.spring.service.CarService;
import org.modelmapper.ModelMapper;
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

    }

    @Override
    public void deleteCar(String registrationNumber) {

    }

    @Override
    public List<CarDTO> getAllCars() {
        return null;
    }

    @Override
    public CarDTO searchCar(String registrationNumber) {
        return null;
    }

    @Override
    public void updateCarFilePaths(String frontImage, String backImage, String sideImage, String interiorImage, String registrationNumber) {
        if (repo.existsById(registrationNumber)) {
            repo.updateCarFilePaths(frontImage, backImage, sideImage, interiorImage, registrationNumber);
        } else {
            throw new RuntimeException("Car "+registrationNumber+" Not Exist to Update....!");
        }
    }
}
