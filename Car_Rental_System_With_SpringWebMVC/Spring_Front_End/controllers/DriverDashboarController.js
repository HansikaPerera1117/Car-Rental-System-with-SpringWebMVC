
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
            loadDriverSchedule(driver.driverID);
        }
    })
}


function loadDriverSchedule(driverID) {
    $('#tblDriverSchedule').empty();
    let status = "Accepted";
    $.ajax({
        url:"http://localhost:8080/Spring_Back_End_war/rent/getCarRents/" + status + "/" + driverID,
        method:"GET",
        success:function (res) {
            for (let carRent of res.data) {
                let row = `<tr><td>${carRent.driverID.driverID}</td><td>${carRent.rentID}</td><td>${carRent.rentDate}</td><td>${carRent.cars.registrationNumber}</td><td>${carRent.users.name}</td><td>${carRent.users.contactNo}</td><td>${carRent.pickUpDate}</td><td>${carRent.pickUpTime}</td><td>${carRent.pickUpVenue}</td><td>${carRent.returnDate}</td><td>${carRent.returnTime}</td><td>${carRent.returnVenue}</td></tr>`;
                $('#tblDriverSchedule').append(row);
            }
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

$("#btnResetDriverPassword").click(function (){
    resetPassword();
});

function resetPassword(){
    var id = $('#DriverProfileID').text();
    var newPassword = $('#inputNPassword').val();

    $.ajax({
        url: baseUrl + "driver/resetPassword/"+ id + "/" + newPassword,
        method: "PUT",
        success: function (resp){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Reset Password Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: " Unsuccessfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

}

$("#btnDeleteDriver").click(function (){
    if ($('#DriverProfileID').text() != "") {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteDriver();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                location.replace("logIn.html");
            }
        })
    }
});

function deleteDriver(){

    var id = $('#DriverProfileID').text();
    $.ajax({
        url: baseUrl + "driver?driverID=" + id,
        method: "DELETE",
        success: function (resp) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Your Driver Account Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Unsuccessfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}