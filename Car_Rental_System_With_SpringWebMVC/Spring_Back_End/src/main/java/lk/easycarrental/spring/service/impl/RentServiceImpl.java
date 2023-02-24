package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.RentDTO;
import lk.easycarrental.spring.service.RentService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RentServiceImpl implements RentService {
    @Override
    public void addRent(RentDTO dto) {
        
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
    public String generateRentId() {
        return null;
    }
}
