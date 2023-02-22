package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.UserDTO;
import lk.easycarrental.spring.service.UserService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService service;

    @GetMapping(path = "/generateUserId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateCustomerId() {
        return new ResponseUtil("200", "Ok", service.generateUserId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveUser(@RequestBody UserDTO dto){
        System.out.println(dto.toString());
        service.saveUser(dto);
        return new ResponseUtil("200","Customer Added Successfully "+dto.toString(),null);
    }

    @PutMapping(path = "/uploadImg/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("imageOfNICFront") MultipartFile imageOfNICFront, @RequestPart("imageOfNICBack") MultipartFile imageOfNICBack, @RequestPart("imageOfDrivingLicense") MultipartFile imageOfDrivingLicense, @PathVariable String id) {
        try {

            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();

            imageOfNICFront.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + imageOfNICFront.getOriginalFilename()));
            imageOfNICBack.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + imageOfNICBack.getOriginalFilename()));
            imageOfDrivingLicense.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + imageOfDrivingLicense.getOriginalFilename()));

            String nicFrontPath = projectPath + "/uploads" + imageOfNICFront.getOriginalFilename();
            String nicBackPath = projectPath + "/uploads" + imageOfNICBack.getOriginalFilename();
            String licenceImgPath = projectPath + "/uploads" + imageOfDrivingLicense.getOriginalFilename();

            service.uploadUserImages(nicFrontPath, nicBackPath, licenceImgPath, id);

            return new ResponseUtil("200", "Uploaded", null);


            } catch (URISyntaxException e) {
                e.printStackTrace();
                return new ResponseUtil("500",e.getMessage(),null);
            } catch (IOException e) {
                e.printStackTrace();
                    return new ResponseUtil("500",e.getMessage(),null);
            }
    }

}
