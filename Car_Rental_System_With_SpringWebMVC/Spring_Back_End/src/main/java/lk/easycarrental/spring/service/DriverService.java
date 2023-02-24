package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    String generateDriverId();

    void saveDriver(DriverDTO dto);

    void updateDriver(DriverDTO dto);

    void deleteDriver(String driverID);

    DriverDTO searchDriver(String driverID);

    List<DriverDTO> getAllDrivers();

    void resetDriverPassword(String driverID, String password);

    boolean findDriverByUsername(String username);

    boolean findDriverByPassword(String password);

    DriverDTO findDriverByUsernameAndPassword(String username, String password);

    int getCountOfDriversByStatus(String  availability);

    List<DriverDTO> getRandomDriver();


}
