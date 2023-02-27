package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.RentDTO;

import java.util.List;

public interface RentService {

    String generateRentId();

    void addRent(RentDTO dto);

    void updateRent(RentDTO dto);

    void deleteRent(String rentId);

    RentDTO searchRent(String rentId);

    List<RentDTO> getAllRents();

    void updateBankSlip(String bankSlip, String rentId);

    void updateCarRentStatus(String rentID, String status);

    List<RentDTO> getCarRentsByStatus(String status);

    void updateRentDriver(String rentId ,String driverID);

    int getCountOfRentsByStatus(String status);

    List<RentDTO> getAllByDriverID(String status, String driverID);

    List<RentDTO> getAllByCars(String status, String registrationNumber);

    List<RentDTO> getTodayRents(String today);

    List<RentDTO> getAllByUserID(String userID);


}
