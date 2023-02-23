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

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllUses() {
        return new ResponseUtil("200", "Done", service.getAllUsers());
    }

    @GetMapping(path = "/generateUserId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateCustomerId() {
        return new ResponseUtil("200", "Ok", service.generateUserId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveUser(@RequestBody UserDTO dto){
        System.out.println(dto.toString());
        service.saveUser(dto);
        return new ResponseUtil("200","User Added Successfully "+dto.toString(),null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateUser(@RequestBody UserDTO dto){
        System.out.println(dto.toString());
        service.updateUser(dto);
        return new ResponseUtil("200","User Updated Successfully "+dto.toString(),null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteUser(@RequestParam String id){
        service.deleteUser(id);
        return new ResponseUtil("200",id + "User Deleted Successfully ",null);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUser(@PathVariable String id) {
        return new ResponseUtil("200", "Done", service.searchUser(id));
    }

    @PutMapping(path = "/resetPassword/{userID}/{password}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil resetUserPassword(@PathVariable String userID, @PathVariable String password){
        service.resetUserPassword(userID,password);
        return new ResponseUtil("200","User Password Reset Successfully",null);
    }

    @PutMapping(path = "/uploadImg/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("imageOfNICFront") MultipartFile imageOfNICFront, @RequestPart("imageOfNICBack") MultipartFile imageOfNICBack, @RequestPart("imageOfDrivingLicense") MultipartFile imageOfDrivingLicense, @PathVariable String id) {
        try {

            String projectPath = String.valueOf(new File("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages"));
            File uploadsDir = new File(projectPath + "\\Users");
            uploadsDir.mkdir();

            imageOfNICFront.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + imageOfNICFront.getOriginalFilename()));
            imageOfNICBack.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + imageOfNICBack.getOriginalFilename()));
            imageOfDrivingLicense.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + imageOfDrivingLicense.getOriginalFilename()));

            String nicFrontPath = projectPath + "\\Users\\" + imageOfNICFront.getOriginalFilename();
            String nicBackPath = projectPath + "\\Users\\" + imageOfNICBack.getOriginalFilename();
            String licenceImgPath = projectPath + "\\Users\\" + imageOfDrivingLicense.getOriginalFilename();

            service.uploadUserImages(nicFrontPath, nicBackPath, licenceImgPath, id);

            return new ResponseUtil("200", "Uploaded", null);

            }catch (IOException e) {
                e.printStackTrace();
                    return new ResponseUtil("500",e.getMessage(),null);
            }
    }

    @GetMapping(path = "/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomerByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        if (service.findUserByUsername(username)) {
            if (service.findUserByPassword(password)) {
                return new ResponseUtil("200", "Login Successful", true);
            } else {
                return new ResponseUtil("404", "Incorrect Password", false);
            }
        } else {
            return new ResponseUtil("404", "Incorrect Username", false);
        }
    }

    @GetMapping(path = "/set/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findCustomerByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        return new ResponseUtil("200", "Done", service.findUserByUsernameAndPassword(username, password));
    }


}
