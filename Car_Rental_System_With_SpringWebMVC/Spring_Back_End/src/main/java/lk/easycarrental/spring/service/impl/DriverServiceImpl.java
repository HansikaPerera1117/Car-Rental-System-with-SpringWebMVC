package lk.easycarrental.spring.service.impl;

import lk.easycarrental.spring.dto.DriverDTO;
import lk.easycarrental.spring.repo.DriverRepo;
import lk.easycarrental.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public boolean findDriverByUsername(String username) {
        return repo.findDriverByUsername(username).isPresent();
    }

    @Override
    public boolean findDriverByPassword(String password) {
        return repo.findDriverByPassword(password).isPresent();
    }

    @Override
    public DriverDTO findDriverByUsernameAndPassword(String username, String password) {
        return mapper.map(repo.findDriverByUsernameAndPassword(username, password).get(), DriverDTO.class);
    }
}
