package lk.easycarrental.spring.controller;


import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.service.DriverService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping(path = "/generateDriverId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateDriverId() {
        return new ResponseUtil("200", "Done", service.generateDriverId());
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers() {
        return new ResponseUtil("200", "Done", service.getAllDrivers());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto) {
        System.out.println(dto.toString());
        service.saveDriver(dto);
        return new ResponseUtil("200","Driver Added Successfully "+dto.toString(),null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto) {
        service.updateDriver(dto);
        return new ResponseUtil("200","Driver Updated Successfully "+dto.toString(),null);
    }

    @DeleteMapping(params = {"driverID"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String driverID) {
        service.deleteDriver(driverID);
        return new ResponseUtil("200",driverID+" Driver Deleted Successfully ",null);
    }

    @GetMapping(path = "/{driverID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String driverID) {
        return new ResponseUtil("200", "Done", service.searchDriver(driverID));
    }

    @PutMapping(path = "/resetPassword/{driverID}/{password}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil resetDriverPassword(@PathVariable String driverID, @PathVariable String password){
        service.resetDriverPassword(driverID,password);
        return new ResponseUtil("200","Driver Password Reset Successfully",null);
    }

    @GetMapping(path = "/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriverByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        if (service.findDriverByUsername(username)) {
            if (service.findDriverByPassword(password)) {
                return new ResponseUtil("200", "Login Successful", true);
            } else {
                return new ResponseUtil("404", "Incorrect Password", false);
            }
        } else {
            return new ResponseUtil("404", "Incorrect Username", false);
        }
    }

    @GetMapping(path = "/set/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findDriverByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        return new ResponseUtil("200", "Ok", service.findDriverByUsernameAndPassword(username, password));
    }

    @GetMapping(path = "/count/{availability}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCountOfDriversByAvailability(@PathVariable String availability){
        return new ResponseUtil("200","Done",service.getCountOfDriversByStatus(availability));
    }

    @GetMapping(path = "/getRandomDriver",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getRandomDriver(){
        return new ResponseUtil("200","Done",service.getRandomDriver());
    }


}
