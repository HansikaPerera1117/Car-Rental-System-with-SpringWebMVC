package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.dto.UserDTO;
import lk.easycarrental.spring.entity.User;
import lk.easycarrental.spring.repo.UserRepo;
import lk.easycarrental.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

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
        }else {
            User entity = mapper.map(dto, User.class);
            repo.save(entity);
        }

    }

    @Override
    public void updateUser(UserDTO dto) {
        if (repo.existsById(dto.getUserID())) {
            repo.updateUser(dto.getUserID(),dto.getName(),dto.getAddress(),dto.getContactNo(),dto.getEmail(),dto.getNic(),dto.getDrivingLicense(),dto.getUsername(),dto.getPassword());
        }else {
            throw new RuntimeException("User " + dto.getUserID() + " Not Exist to Update....!");
        }
    }

    @Override
    public void deleteUser(String userID) {
        if (repo.existsById(userID)) {
            repo.deleteById(userID);
        } else {
            throw new RuntimeException("User " + userID + " Not Exist to Delete....!");
        }
    }

    @Override
    public UserDTO searchUser(String userID) {
        if (repo.existsById(userID)) {
            return mapper.map(repo.findById(userID).get(),UserDTO.class);
        } else {
            throw new RuntimeException("User " + userID + " Not Exist....!");
        }
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return mapper.map(repo.findAll(), new TypeToken<List<UserDTO>>() {
        }.getType());
    }

    @Override
    public void resetUserPassword(String userID, String password) {
        if (repo.existsById(userID)){
            repo.resetUserPassword(userID,password);
        } else {
            throw new RuntimeException("User "+userID+ " Not Exist to Reset Password....!");
        }
    }

    @Override
    public void uploadUserImages(String nicFrontPath, String nicBackPath, String licenceImgPath, String id) {
        if (repo.existsById(id)) {
            repo.updateUserFilePaths(nicFrontPath, nicBackPath, licenceImgPath, id);
        } else {
            throw new RuntimeException("User Not Found");
        }
    }

    @Override
    public boolean findUserByUsername(String username) {
        return repo.findUserByUsername(username).isPresent();
    }

    @Override
    public boolean findUserByPassword(String password) {
        return repo.findUserByPassword(password).isPresent();
    }

    @Override
    public UserDTO findUserByUsernameAndPassword(String username, String password) {
        return mapper.map(repo.findUserByUsernameAndPassword(username, password).get(), UserDTO.class);

    }

    @Override
    public int getCountOfUsersRegistered() {
        return repo.countByUserID();
    }

    @Override
    public void updateUserStatus(String userID) {
        if (repo.existsById(userID)) {
            repo.updateUserStatus(userID);
        } else {
            throw new RuntimeException("User " + userID + " Not Exist....!");
        }
    }


}
