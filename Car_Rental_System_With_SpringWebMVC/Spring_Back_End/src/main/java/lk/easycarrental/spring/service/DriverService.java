package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.DriverDTO;

public interface DriverService {

    boolean findDriverByUsername(String username);

    boolean findDriverByPassword(String password);

    DriverDTO findDriverByUsernameAndPassword(String username, String password);

}
