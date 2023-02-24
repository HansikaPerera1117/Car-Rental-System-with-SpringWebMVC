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


}
