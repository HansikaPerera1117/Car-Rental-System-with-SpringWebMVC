package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.CarDTO;
import lk.easycarrental.spring.service.CarService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCars() {
        return new ResponseUtil("200", "Done", service.getAllCars());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO dto) {
        service.saveCar(dto);
        return new ResponseUtil("200","Car Added Successfully "+dto.toString(),null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO dto) {
        service.updateCar(dto);
        return new ResponseUtil("200","Car Update Successfully "+dto.toString(),null);

    }

    @DeleteMapping(params = {"registrationNo"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String registrationNo) {
        service.deleteCar(registrationNo);
        return new ResponseUtil("200",registrationNo+" Car Deleted Successfully ",null);
    }

    @GetMapping(path = "/{registrationNo}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable String registrationNo) {
        return new ResponseUtil("200", "Done", service.searchCar(registrationNo));
    }

    @PutMapping(path = "/up/{registrationNumber}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("frontImage") MultipartFile frontImage, @RequestPart("backImage") MultipartFile backImage, @RequestPart("sideImage") MultipartFile sideImage, @RequestPart("interiorImage") MultipartFile interiorImage, @PathVariable String registrationNumber) {
        try {
            String projectPath = String.valueOf(new File("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages"));
            File uploadsDir = new File(projectPath + "\\Cars");
            uploadsDir.mkdir();
            frontImage.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + frontImage.getOriginalFilename()));
            backImage.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + backImage.getOriginalFilename()));
            interiorImage.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + interiorImage.getOriginalFilename()));
            sideImage.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + sideImage.getOriginalFilename()));

            String frontImgPath = projectPath + "\\Cars\\" + frontImage.getOriginalFilename();
            String backImgPath = projectPath + "\\Cars\\" + backImage.getOriginalFilename();
            String interImgPath = projectPath + "\\Cars\\" + interiorImage.getOriginalFilename();
            String sideImgPath = projectPath + "\\Cars\\" + sideImage.getOriginalFilename();

            service.updateCarFilePaths(frontImgPath, backImgPath, interImgPath, sideImgPath, registrationNumber);

            return new ResponseUtil("200", "Uploaded", null);

        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseUtil("500", "Error", null);
        }
    }

    @GetMapping(path = "/count/{availability}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCountOfCarsByStatus(@PathVariable String availability) {
        return new ResponseUtil("200", "Done", service.getCountOfCarsByStatus(availability));
    }


}
