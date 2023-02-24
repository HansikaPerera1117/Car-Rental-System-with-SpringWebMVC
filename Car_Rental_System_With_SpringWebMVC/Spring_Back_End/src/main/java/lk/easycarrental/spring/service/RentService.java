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

}
