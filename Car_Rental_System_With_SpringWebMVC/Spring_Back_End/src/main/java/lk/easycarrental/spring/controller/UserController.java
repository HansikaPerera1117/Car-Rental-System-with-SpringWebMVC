package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.UserDTO;
import lk.easycarrental.spring.service.UserService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


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

}
