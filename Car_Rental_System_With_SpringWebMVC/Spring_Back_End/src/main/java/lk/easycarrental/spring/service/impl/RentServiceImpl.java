package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.dto.RentDTO;
import lk.easycarrental.spring.entity.Rent;
import lk.easycarrental.spring.repo.RentRepo;
import lk.easycarrental.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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
           Rent d= mapper.map(dto, Rent.class);
            System.out.println("===================");
            System.out.println(d.toString());
            System.out.println("===================");
            repo.save(mapper.map(dto, Rent.class));
        } else {
            throw new RuntimeException("Rent "+dto.getRentID()+" Already Exist....!");
        }
    }

    @Override
    public void updateRent(RentDTO dto) {
        if (repo.existsById(dto.getRentID())) {
            repo.save(mapper.map(dto, Rent.class));
        } else {
            throw new RuntimeException("Rent "+dto.getRentID()+" Not Exist to Update....!");
        }
    }

    @Override
    public void deleteRent(String rentId) {
        if (repo.existsById(rentId)) {
            repo.deleteById(rentId);
        } else {
            throw new RuntimeException("Rent "+rentId+" Not Exist to Delete....!");
        }
    }

    @Override
    public RentDTO searchRent(String rentId) {
        if (repo.existsById(rentId)) {
            return mapper.map(repo.findById(rentId).get(), RentDTO.class);
        } else {
            throw new RuntimeException("Rent "+rentId+" Not Exist....!");
        }
    }

    @Override
    public List<RentDTO> getAllRents() {
        return mapper.map(repo.findAll(), new TypeToken<List<RentDTO>>() {
        }.getType());
    }

    @Override
    public void updateBankSlip(String bankSlip, String rentId) {
        if (repo.existsById(rentId)) {
            repo.updateRentFilePaths(bankSlip, rentId);
        } else {
            throw new RuntimeException("Rent "+rentId+" Not Exist....!");
        }
    }

    @Override
    public void updateCarRentStatus(String rentID, String status) {
        if (repo.existsById(rentID)) {
            repo.updateCarRentStatus(rentID, status);
        } else {
            throw new RuntimeException("Rent "+rentID+" Not Exist to Update Status....!");
        }
    }

    @Override
    public List<RentDTO> getCarRentsByStatus(String status) {
        return mapper.map(repo.getAllByStatus(status), new TypeToken<List<RentDTO>>() {
        }.getType());
    }
//
//    @Override
//    public void updateRentDriver(String rentId ,String driverID) {
//        if (repo.existsById(rentId)) {
//            repo.updateRentFilePaths(driverID, rentId);
//        } else {
//            throw new RuntimeException("Rent "+rentId+" Not Exist....!");
//        }
//    }

    @Override
    public int getCountOfRentsByStatus(String status) {
        return repo.getCountOfRentsByStatus(status);
    }

    @Override
    public List<RentDTO> getAllByDriverID(String status, String driverID) {
        return mapper.map(repo.getAllByDriverID(status, driverID), new TypeToken<List<RentDTO>>() {
        }.getType());
    }

    @Override
    public List<RentDTO> getTodayRents(String today) {
        return mapper.map(repo.getTodayRents(today), new TypeToken<List<RentDTO>>() {
        }.getType());
    }

    @Override
    public List<RentDTO> getAllByUserID(String userID) {
        return mapper.map(repo.getAllByUserID(userID), new TypeToken<List<RentDTO>>() {
        }.getType());
    }


}
