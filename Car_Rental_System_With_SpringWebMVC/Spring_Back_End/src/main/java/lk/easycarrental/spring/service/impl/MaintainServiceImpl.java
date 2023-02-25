package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.repo.MaintainRepo;
import lk.easycarrental.spring.service.MaintainService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class MaintainServiceImpl implements MaintainService {

    @Autowired
    MaintainRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public String generateMaintenanceId() {
        String lastId = repo.generateMaintenanceId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "MT-000" + tempId;
            } else if (tempId <= 99) {
                id = "MT-00" + tempId;
            } else if (tempId <= 999) {
                id = "MT-0" + tempId;
            } else if (tempId <= 9999) {
                id = "MT-" + tempId;
            }
        } else {
            id = "MT-0001";
        }
        return id;
    }
}
