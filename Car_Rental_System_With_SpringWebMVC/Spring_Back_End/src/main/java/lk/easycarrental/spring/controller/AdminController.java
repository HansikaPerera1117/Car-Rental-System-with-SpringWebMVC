package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.service.AdminService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService service;

    @GetMapping(path = "/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchAdminByUsernameAndPassword(@PathVariable String username, @PathVariable String password) {
        if (service.findAdminByUserName(username)) {
            if (service.findAdminByPassWord(password)) {
                return new ResponseUtil("200", "Login Successful", true);
            } else {
                return new ResponseUtil("404", "Incorrect Password", false);
            }
        } else {
            return new ResponseUtil("404", "Incorrect Username", false);
        }
    }

}
