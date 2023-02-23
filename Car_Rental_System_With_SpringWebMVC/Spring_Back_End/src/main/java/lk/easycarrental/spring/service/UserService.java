package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.UserDTO;

public interface UserService {

    String generateUserId();

    void saveUser(UserDTO dto);

    void updateUser(UserDTO dto);

    void resetUserPassword(String userID, String password);

    void uploadUserImages(String nicfPath, String nicbPath, String licenceImgPath, String id);

    boolean findUserByUsername(String username);

    boolean findUserByPassword(String password);

    UserDTO findUserByUsernameAndPassword(String username, String password);

}
