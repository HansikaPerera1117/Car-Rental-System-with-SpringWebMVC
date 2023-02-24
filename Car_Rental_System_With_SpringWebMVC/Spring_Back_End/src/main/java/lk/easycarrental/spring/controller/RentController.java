package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.service.RentService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
