package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.UserDTO;

public interface UserService {

    String generateUserId();

    void saveUser(UserDTO dto);

    void uploadUserImages(String nicfPath, String nicbPath, String licenceImgPath, String id);

}
