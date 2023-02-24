package lk.easycarrental.spring.service.impl;

import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.entity.Driver;
import lk.easycarrental.spring.repo.DriverRepo;
import lk.easycarrental.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public String generateDriverId() {
        String lastId = repo.generateDriverId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "D00-000" + tempId;
            } else if (tempId <= 99) {
                id = "D00-00" + tempId;
            } else if (tempId <= 999) {
                id = "D00-0" + tempId;
            } else if (tempId <= 9999) {
                id = "D00-" + tempId;
            }
        } else {
            id = "D00-0001";
        }
        return id;
    }

    @Override
    public void saveDriver(DriverDTO dto) {
        if (repo.existsById(dto.getDriverID())) {
            throw new RuntimeException("Driver "+dto.getDriverID()+" Already Exist....!");
        } else {
            repo.save(mapper.map(dto, Driver.class));
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (repo.existsById(dto.getDriverID())) {
            repo.updateDriver(dto.getDriverID(),dto.getAddress(),dto.getContactNo(),dto.getDrivingLicense(),dto.getName(),dto.getNic(),dto.getUsername());
        } else {
            throw new RuntimeException("Driver "+dto.getDriverID()+" Not Exist to Update....!");
        }
    }

    @Override
    public void deleteDriver(String driverID) {
        if (repo.existsById(driverID)) {
            repo.deleteById(driverID);
        } else {
            throw new RuntimeException("Driver "+driverID+" Not Exist to Delete....!");
        }
    }

    @Override
    public DriverDTO searchDriver(String driverID) {
        if (repo.existsById(driverID)) {
            return mapper.map(repo.findById(driverID).get(), DriverDTO.class);
        } else {
            throw new RuntimeException("Driver "+driverID+" Not Exist...!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {}.getType());
    }

    @Override
    public void resetDriverPassword(String driverID, String password) {
        if (repo.existsById(driverID)){
            repo.resetDriverPassword(driverID,password);
        } else {
            throw new RuntimeException("Driver "+driverID+ " Not Exist to Reset Password....!");
        }
    }

    @Override
    public boolean findDriverByUsername(String username) {
        return repo.findDriverByUsername(username).isPresent();
    }

    @Override
    public boolean findDriverByPassword(String password) {
        return repo.findDriverByPassword(password).isPresent();
    }

    @Override
    public DriverDTO findDriverByUsernameAndPassword(String username, String password) {
        return mapper.map(repo.findDriverByUsernameAndPassword(username, password).get(), DriverDTO.class);
    }

    @Override
    public int getCountOfDriversByStatus(String availability) {
        return repo.getCountOfDriversByStatus(availability);
    }
}
