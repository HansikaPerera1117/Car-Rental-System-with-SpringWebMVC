package lk.easycarrental.spring.controller;

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



}