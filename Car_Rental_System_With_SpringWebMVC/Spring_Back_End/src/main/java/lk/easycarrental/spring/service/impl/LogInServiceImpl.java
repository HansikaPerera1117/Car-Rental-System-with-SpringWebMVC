package lk.easycarrental.spring.service.impl;

import lk.easycarrental.spring.dto.LogInDTO;
import lk.easycarrental.spring.entity.LogIn;
import lk.easycarrental.spring.repo.LogInRepo;
import lk.easycarrental.spring.service.LogInService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LogInServiceImpl implements LogInService {

    @Autowired
    LogInRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveLogData(LogInDTO dto) {
        if (!repo.existsById(dto.getLoginID())) {
            repo.save(mapper.map(dto, LogIn.class));
        } else {
            throw new RuntimeException("Login Already Exists...");
        }
    }

    @Override
    public String generateLoginId() {
        String lastId = repo.getLastLoginId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "LogId-000" + tempId;
            } else if (tempId <= 99) {
                id = "LogId-00" + tempId;
            } else if (tempId <= 999) {
                id = "LogId-0" + tempId;
            } else if (tempId <= 9999) {
                id = "LogId-" + tempId;
            }
        } else {
            id = "LogId-0001";
        }
        return id;
    }

    @Override
    public String getLastLoginId() {
        return repo.getLastLoginId();
    }

    @Override
    public LogInDTO searchLogin(String loginId) {
        if (repo.existsById(loginId)) {
            return mapper.map(repo.findById(loginId).get(), LogInDTO.class);
        } else {
            throw new RuntimeException("Login Not Found...");
        }
    }
}
