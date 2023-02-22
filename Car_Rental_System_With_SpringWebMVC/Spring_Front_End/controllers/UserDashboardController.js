
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

getLastLoginUser();

function getLastLoginUser() {
    $.ajax({
        url: "http://localhost:8080/Spring_Back_End_war/login/getLastLogin",
        method: "GET",
        success: function (res) {
            let loginData = res.data;
            console.log(loginData);
            getAllUserData(loginData.username, loginData.password);
        }
    })
}

function getAllUserData(username, password) {
    $.ajax({
        url: "http://localhost:8080/Spring_Back_End_war/user/set/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            let user = res.data;
            setCustomerDetails(user);
            //loadMyCarRentsToTable(user.userID);
        }
    })
}

function setCustomerDetails(user) {
    console.log(user);
    $('#UserID').text(user.userID);
    $('#UserName').text(user.name);
    $('#UserProfileID').text(user.userID);

    $('#inputName').val(user.name);
    $('#inputAddress').val(user.address);
    $('#inputContact').val(user.contactNo);
    $('#inputEmail').val(user.email);
    $('#inputNIC').val(user.nic);
    $('#inputDrivingLicense').val(user.drivingLicense);
    $('#inputUsername').val(user.username);
    $('#inputPassword').val(user.password);

    // upadte eka image wenama anith details wenama karanna


}
