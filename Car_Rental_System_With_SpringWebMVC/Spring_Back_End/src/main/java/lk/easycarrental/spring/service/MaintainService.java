package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.MaintainDTO;

import java.util.List;

public interface MaintainService {

    String generateMaintenanceId();

    void addMaintenance(MaintainDTO dto);

    void updateMaintenance(MaintainDTO dto);

    void deleteMaintenance(String maintenanceId);

    MaintainDTO searchMaintenance(String maintenanceId);

    List<MaintainDTO> getAllMaintenances();


}
