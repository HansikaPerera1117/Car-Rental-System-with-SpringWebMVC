
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

getLastLoginDriver();

function getLastLoginDriver() {
    $.ajax({
        url: "http://localhost:8080/Spring_Back_End_war/login/getLastLogin",
        method: "GET",
        success: function (res) {
            let loginData = res.data;
            console.log(loginData);
            getAllDriverData(loginData.username, loginData.password);
        }
    })
}

function getAllDriverData(username, password) {
    $.ajax({
        url: "http://localhost:8080/Spring_Back_End_war/driver/set/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            let driver = res.data;
            setDriverDetails(driver);
           // loadDriverSchedule(driver.driverID);
        }
    })
}

function setDriverDetails(driver) {
    console.log(driver);
    $('#DriverID').text(driver.driverID);
    $('#DriverName').text(driver.name);
    $('#DriverProfileID').text(driver.driverID);

    $('#inputName').val(driver.name);
    $('#inputAddress').val(driver.address);
    $('#inputContact').val(driver.contactNo);
    $('#inputNIC').val(driver.nic);
    $('#inputDrivingLicense').val(driver.drivingLicense);
    $('#inputUsername').val(driver.username);
    $('#inputPassword').val(driver.password);
}