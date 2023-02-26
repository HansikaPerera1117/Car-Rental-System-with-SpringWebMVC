package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.RentDTO;
import lk.easycarrental.spring.service.RentService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/rent")
@CrossOrigin
public class RentController {

    @Autowired
    RentService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRents() {
        return new ResponseUtil("200", "Done", service.getAllRents());
    }

    @GetMapping(path = "/generateRentId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateRentId() {
        return new ResponseUtil("200", "Done", service.generateRentId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil addRent(@RequestBody RentDTO dto) {
        System.out.println(dto.toString());
        service.addRent(dto);
        return new ResponseUtil("200","Rent Placed Successfully "+dto.toString(),null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarRent(@RequestBody RentDTO dto) {
        service.updateRent(dto);
        return new ResponseUtil("200","Rent Updated Successfully "+dto.toString(),null);
    }

    @DeleteMapping(params = {"rentId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarRent(@RequestParam String rentId) {
        service.deleteRent(rentId);
        return new ResponseUtil("200",rentId+" Rent Deleted Successfully ",null);
    }

    @GetMapping(path = "/{rentId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRent(@PathVariable String rentId) {
        return new ResponseUtil("200", "Done", service.searchRent(rentId));
    }

    @PutMapping(path = "/uploadImg/{rentId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadBanSlipAndPath(@RequestPart("bankSlip") MultipartFile bankSlip, @PathVariable String rentId) {
        try {
            String projectPath = String.valueOf(new File("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages"));
            File uploadsDir = new File(projectPath + "\\Rent");
            uploadsDir.mkdir();

            bankSlip.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + bankSlip.getOriginalFilename()));

            String bankSlipImage = projectPath + "\\Rent\\" + bankSlip.getOriginalFilename();

            service.updateBankSlip(bankSlipImage, rentId);

            return new ResponseUtil("200", "Uploaded", null);

        }catch (IOException e) {
            e.printStackTrace();
            return new ResponseUtil("500",e.getMessage(),null);
        }
    }

    @GetMapping(path = "/count/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCountOfRentsByStatus(@PathVariable String status) {
        return new ResponseUtil("200", "rentCount", service.getCountOfRentsByStatus(status));
    }

    @PutMapping(path = "/{rentId}/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRentStatus(@PathVariable String rentId, @PathVariable String status) {
        service.updateCarRentStatus(rentId, status);
        return new ResponseUtil("200", "Done", null);
    }

    @GetMapping(path = "/get/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRentsByStatus(@PathVariable String status) {
        return new ResponseUtil("200", "Done", service.getCarRentsByStatus(status));
    }

//    @PutMapping(path = "/updateRentDriver/{rentId}/{driverID}", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseUtil updateRentDriver(@PathVariable String rentId, @PathVariable String driverID) {
//        service.updateRentDriver(rentId,driverID);
//        return new ResponseUtil("200", "Done", null);
//    }

    @GetMapping(path = "/getCarRents/{status}/{driverID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCarRentsByDrivingID(@PathVariable String status, @PathVariable String driverID) {
        return new ResponseUtil("200", "Done", service.getAllByDriverID(status, driverID));
    }

    @GetMapping(path = "/getTodayRents/{today}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getTodayRents(@PathVariable String today) {
        return new ResponseUtil("200", "Done", service.getTodayRents(today));
    }

    @GetMapping(path = "/getAllByUserID/{userID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllByUserID(@PathVariable String userID) {
        return new ResponseUtil("200", "Done", service.getAllByUserID(userID));
    }

}
