package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.RentDTO;
import lk.easycarrental.spring.entity.Rent;
import lk.easycarrental.spring.repo.RentRepo;
import lk.easycarrental.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RentServiceImpl implements RentService {

    @Autowired
    RentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generateRentId() {
        String lastId = repo.generateRentId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "RNT-000" + tempId;
            } else if (tempId <= 99) {
                id = "RNT-00" + tempId;
            } else if (tempId <= 999) {
                id = "RNT-0" + tempId;
            } else if (tempId <= 9999) {
                id = "RNT-" + tempId;
            }
        } else {
            id = "RNT-0001";
        }
        return id;
    }

    @Override
    public void addRent(RentDTO dto) {
        if (!repo.existsById(dto.getRentID())) {
            repo.save(mapper.map(dto, Rent.class));
        } else {
            throw new RuntimeException("Rent "+dto.getRentID()+" Already Exist....!");
        }
    }

    @Override
    public void updateRent(RentDTO dto) {

    }

    @Override
    public void deleteRent(String rentId) {

    }

    @Override
    public RentDTO searchRent(String rentId) {
        return null;
    }

    @Override
    public List<RentDTO> getAllRents() {
        return null;
    }

    @Override
    public void updateBankSlip(String bankSlip, String rentId) {
        if (repo.existsById(rentId)) {
            repo.updateRentFilePaths(bankSlip, rentId);
        } else {
            throw new RuntimeException("Rent Not Found");
        }
    }


}
