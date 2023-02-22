package lk.easycarrental.spring.service.impl;

import lk.easycarrental.spring.repo.AdminRepo;
import lk.easycarrental.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public boolean findAdminByUserName(String username) {
        return repo.findAdminByUsername(username).isPresent();
    }

    @Override
    public boolean findAdminByPassWord(String password) {
        return repo.findAdminByPassword(password).isPresent();
    }
}
