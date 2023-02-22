package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.AdminDTO;

import java.util.List;

public interface AdminService {

    boolean findAdminByUserName(String username);

    boolean findAdminByPassWord(String password);

    List<AdminDTO> getAllAdmins();}
