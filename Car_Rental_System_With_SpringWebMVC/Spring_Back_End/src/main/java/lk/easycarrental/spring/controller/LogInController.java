package lk.easycarrental.spring.controller;

import lk.easycarrental.spring.dto.LogInDTO;
import lk.easycarrental.spring.service.LogInService;
import lk.easycarrental.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LogInController {

    @Autowired
    LogInService service;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveLogin(@RequestBody LogInDTO dto){
        service.saveLogData(dto);
        return new ResponseUtil("200","Saved...",null);
    }

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
