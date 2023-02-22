package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.UserDTO;
import lk.easycarrental.spring.entity.User;
import lk.easycarrental.spring.repo.UserRepo;
import lk.easycarrental.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public String generateUserId() {
        String lastId = repo.generateUserId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "U00-000" + tempId;
            } else if (tempId <= 99) {
                id = "U00-00" + tempId;
            } else if (tempId <= 999) {
                id = "U00-0" + tempId;
            } else if (tempId <= 9999) {
                id = "U00-" + tempId;
            }
        } else {
            id = "U00-0001";
        }
        return id;
    }

    @Override
    public void saveUser(UserDTO dto) {
        if(repo.existsById(dto.getUserID())){
            throw new RuntimeException("User "+dto.getUserID()+" Already Exist....!");
        }
        User entity = mapper.map(dto, User.class);
        repo.save(entity);
    }

    @Override
    public void uploadUserImages(String nicfPath, String nicbPath, String licenceImgPath, String id) {
        if (repo.existsById(id)) {
            repo.updateUserFilePaths(nicfPath, nicbPath, licenceImgPath, id);
        } else {
            throw new RuntimeException("User Not Found");
        }
    }
}
