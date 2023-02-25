package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.MaintainDTO;

import java.util.List;

public interface MaintainService {

    String generateMaintenanceId();

    void addMaintenance(MaintainDTO dto);

    void updateMaintenance(MaintainDTO dto);

    void deleteMaintenance(String maintainID);

    MaintainDTO searchMaintenance(String maintainID);

    List<MaintainDTO> getAllMaintenances();

    void updateMaintenanceStatus(String maintainID, String status);


}
