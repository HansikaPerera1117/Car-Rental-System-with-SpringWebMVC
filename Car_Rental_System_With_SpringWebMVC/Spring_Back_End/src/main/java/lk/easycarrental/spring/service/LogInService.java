package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.LogInDTO;

public interface LogInService {

    void saveLogData(LogInDTO dto);

    String generateLoginId();

    String getLastLoginId();

    LogInDTO searchLogin(String loginId);
}
