package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,String> {

    Optional<User> findUserByUsername(String username);

    Optional<User> findUserByPassword(String password);

    Optional<User> findUserByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT userID FROM User ORDER BY userID DESC LIMIT 1", nativeQuery = true)
    String generateUserId();

    @Modifying
    @Transactional
    @Query(value = "UPDATE User SET address=:address,contactNo=:contactNo,drivingLicense=:drivingLicense,email=:email,name=:name,nic=:nic,password=:password,username=:username WHERE userID=:userID", nativeQuery = true)
    void updateUser(@Param("userID") String userID, @Param("name") String name, @Param("address") String address, @Param("contactNo") String  contactNo, @Param("email") String email, @Param("nic") String nic, @Param("drivingLicense") String drivingLicense,  @Param("username") String username,  @Param("password") String password);

    @Modifying
    @Transactional
    @Query(value = "UPDATE User SET password=:password WHERE userID=:userID", nativeQuery = true)
    void resetUserPassword(@Param("userID") String userID, @Param("password") String password);


    @Modifying
    @Transactional
    @Query(value = "UPDATE User SET imageOfNICFront=:imageOfNICFront,imageOfNICBack=:imageOfNICBack,imageOfDrivingLicense=:imageOfDrivingLicense WHERE userID=:userID", nativeQuery = true)
    void updateUserFilePaths(@Param("imageOfNICFront") String imageOfNICFront, @Param("imageOfNICBack") String imageOfNICBack, @Param("imageOfDrivingLicense") String imageOfDrivingLicense, @Param("userID") String userID);

}
