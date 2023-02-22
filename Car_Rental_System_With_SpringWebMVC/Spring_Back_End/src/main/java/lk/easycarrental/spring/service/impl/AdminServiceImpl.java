package lk.easycarrental.spring.service.impl;

import lk.easycarrental.spring.dto.AdminDTO;
import lk.easycarrental.spring.repo.AdminRepo;
import lk.easycarrental.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
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

    @Override
    public List<AdminDTO> getAllAdmins() {
        return mapper.map(repo.findAll(), new TypeToken<List<AdminDTO>>() {
        }.getType());
    }
}
