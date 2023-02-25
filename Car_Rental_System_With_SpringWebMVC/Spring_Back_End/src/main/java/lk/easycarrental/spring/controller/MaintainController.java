package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.MaintainDTO;
import lk.easycarrental.spring.service.MaintainService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/maintain")
@CrossOrigin
public class MaintainController {

    @Autowired
    MaintainService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllMaintenance() {
        return new ResponseUtil("200", "Done", service.getAllMaintenances());
    }

    @GetMapping(path = "/generateMaintenanceId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateMaintenanceId() {
        return new ResponseUtil("200", "Done", service.generateMaintenanceId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addMaintenance(@RequestBody MaintainDTO dto) {
        System.out.println(dto.toString());
        service.addMaintenance(dto);
        return new ResponseUtil("200","Maintenance Added Successfully "+dto.toString(),null);

    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateMaintenance(@RequestBody MaintainDTO dto) {
        service.updateMaintenance(dto);
        return new ResponseUtil("200","Maintenance Updated Successfully "+dto.toString(),null);
    }

    @DeleteMapping(params = {"maintenanceId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteMaintenance(@RequestParam String maintenanceId) {
        service.deleteMaintenance(maintenanceId);
        return new ResponseUtil("200",maintenanceId+" Maintenance Deleted Successfully ",null);

    }

    @PutMapping(path = "/updateMaintenanceStatus/{maintainID}/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateMaintenanceStatus(@PathVariable String maintainID, @PathVariable String status) {
        service.updateMaintenanceStatus(maintainID, status);
        return new ResponseUtil("200", "Done", null);
    }

    @GetMapping(path = "/{maintainID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchMaintenance(@PathVariable String maintainID) {
        return new ResponseUtil("200", "Done", service.searchMaintenance(maintainID));
    }

}
