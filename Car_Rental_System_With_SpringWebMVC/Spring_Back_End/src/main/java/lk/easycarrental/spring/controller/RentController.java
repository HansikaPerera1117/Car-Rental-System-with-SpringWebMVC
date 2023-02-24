package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.RentDTO;
import lk.easycarrental.spring.service.RentService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

}
