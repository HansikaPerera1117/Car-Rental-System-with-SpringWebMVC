package lk.easycarrental.spring.service;

public interface AdminService {

    boolean findAdminByUserName(String username);

    boolean findAdminByPassWord(String password);
}
