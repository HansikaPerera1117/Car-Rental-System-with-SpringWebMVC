package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.LogInDTO;
import lk.easycarrental.spring.service.LogInService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LogInController {

    @Autowired
    LogInService service;

    @GetMapping(path = "/getLastLogin",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastLoginId(){
        LogInDTO dto = service.searchLogin(service.getLastLoginId());
        return new ResponseUtil("200","Done",dto);
    }

    @GetMapping(path = "/generateLogId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateLogId(){
        return new ResponseUtil("200","Done",service.generateLoginId());
    }

}
