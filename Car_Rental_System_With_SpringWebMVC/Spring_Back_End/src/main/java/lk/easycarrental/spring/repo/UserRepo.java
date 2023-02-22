package lk.easycarrental.spring.repo;

import lk.easycarrental.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepo extends JpaRepository<User,String> {

    @Query(value = "SELECT userID FROM User ORDER BY userID DESC LIMIT 1", nativeQuery = true)
    String generateUserId();

    @Modifying
    @Transactional
    @Query(value = "UPDATE User SET imageOfNICFront=:imageOfNICFront,imageOfNICBack=:imageOfNICBack,imageOfDrivingLicense=:imageOfDrivingLicense WHERE userID=:userID", nativeQuery = true)
    void updateUserFilePaths(@Param("imageOfNICFront") String imageOfNICFront, @Param("imageOfNICBack") String imageOfNICBack, @Param("imageOfDrivingLicense") String imageOfDrivingLicense, @Param("userID") String userID);


}
