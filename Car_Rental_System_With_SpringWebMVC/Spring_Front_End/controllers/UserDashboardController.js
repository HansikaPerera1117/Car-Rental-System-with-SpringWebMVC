
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let patternName = /^[A-z ]{6,25}$/;
let patternAddress = /^[A-z0-9 ,/]{6,30}$/;
let patternContactNo = /^(011|070|071|072|074|075|076|077|078)[0-9]{7}$/;
let patternEmail = /^[a-z0-9]{5,30}(@gmail.com|@yahoo.com)$/;
let patternDrivingLicenceNo = /^(B)[0-9]{7}$/;
let patternNicNo = /^([0-9]{10}V)$|^([0-9]{12})$/;
let patternLoginUsername = /^[A-z0-9]{5,10}$/;
let patternLoginPassword = /^[A-z0-9@#$%&!*]{8,}$/;

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

$('#inputName,#inputAddress,#inputContact,#inputEmail,#inputNIC,#inputDrivingLicense,#inputUsername,#inputPassword,#formFileMultipleNICFront,#formFileMultipleNICBack,#formFileMultipleDL,inputNPassword').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#inputName,#inputAddress,#inputContact,#inputEmail,#inputNIC,#inputDrivingLicense,#inputUsername,#inputPassword,inputNPassword').on('keyup', function (event) {
    if (event.key == "Enter") {
        checkIfSignUpUserFormValid();
    }
});

function  checkIfSignUpUserFormValid(){
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let contactNo = $('#inputContact').val();
    let email = $('#inputEmail').val();
    let nicNo = $('#inputNIC').val();
    let licenceNo = $('#inputDrivingLicense').val();
    let username = $('#inputUsername').val();
    if (patternName.test(name) || patternAddress.test(address) || patternContactNo.test(contactNo) || patternEmail.test(email) || patternNicNo.test(nicNo) || patternDrivingLicenceNo.test(licenceNo) || patternLoginUsername.test(username) ){
     addUser();
    }
}


//----------------validation check and add style to inputFields start--------------------
$('#inputName').on('keyup', function () {
    checkInputName();
})

function checkInputName() {
    var name = $('#inputName').val();
    if (patternName.test(name)) {
        $("#inputName").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputName").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputAddress').on('keyup', function () {
    checkInputAddress();
})

function checkInputAddress() {
    var address = $('#inputAddress').val();
    if (patternAddress.test(address)) {
        $("#inputAddress").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputAddress").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputContact').on('keyup', function () {
    checkInputContact();
})

function checkInputContact() {
    var contact = $('#inputContact').val();
    if (patternContactNo.test(contact)) {
        $("#inputContact").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputContact").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputEmail').on('keyup', function () {
    checkInputEmail();
})

function checkInputEmail() {
    var email = $('#inputEmail').val();
    if (patternEmail.test(email)) {
        $("#inputEmail").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputEmail").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputNIC').on('keyup', function () {
    checkInputNIC();
})

function checkInputNIC() {
    var nic = $('#inputNIC').val();
    if (patternNicNo.test(nic)) {
        $("#inputNIC").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputNIC").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputDrivingLicense').on('keyup', function () {
    checkInputDrivingLicense();
})

function checkInputDrivingLicense() {
    var licenseNO = $('#inputDrivingLicense').val();
    if (patternDrivingLicenceNo.test(licenseNO)) {
        $("#inputDrivingLicense").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputDrivingLicense").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputUsername').on('keyup', function () {
    checkInputUsername();
})

function checkInputUsername() {
    var username = $('#inputUsername').val();
    if (patternLoginUsername.test(username)) {
        $("#inputUsername").css('border', '2px solid green');
        $('#btnUpdateUser').prop('disabled', false);
        return true;
    } else {
        $("#inputUsername").css('border', '2px solid red');
        $('#btnUpdateUser').prop('disabled', true);
        return false;
    }
}

$('#inputPassword').on('keyup', function () {
    checkInputPassword();
})

function checkInputPassword() {
    var password = $('#inputPassword').val();
    if (patternLoginPassword.test(password)) {
        $("#inputPassword").css('border', '2px solid green');
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputPassword").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
        return false;
    }
}

$('#inputNPassword').on('keyup', function () {
    checkInputNewPassword();
})

function checkInputNewPassword() {
    var nPassword = $('#inputNPassword').val();
    if (patternLoginPassword.test(nPassword)) {
        $("#inputNPassword").css('border', '2px solid green');
        $('#btnResetUserPw').prop('disabled', false);
        return true;
    } else {
        $("#inputNPassword").css('border', '2px solid red');
        $('#btnResetUserPw').prop('disabled', true);
        return false;
    }
}

//----------------validation check and add style to inputFields end--------------------

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
            loadAllMyRentIdsToComboBox(user.userID);
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

}

$("#btnUpdateUser").click(function (){
    if ($("#inputName").val() != "" || $("#inputAddress").val() != "" || $("#inputContact").val() != "" || $("#inputEmail").val() != "" || $("#inputNIC").val() != "" || $("#inputDrivingLicense").val() != "" || $("#inputUsername").val() != "" || $("#inputPassword").val() != "" || $("#formFileMultipleNICFront").val() != "" || $("#formFileMultipleNICBack").val() != "" || $("#formFileMultipleDL").val() != ""){
        updateUser();
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Check Again and Fill  Details",
            showConfirmButton: false,
            timer: 1500
        });
    }

});

function updateUser(){

    var id = $('#UserProfileID').text();
    var name = $('#inputName').val();
    var address =  $('#inputAddress').val();
    var contact = $('#inputContact').val();
    var email = $('#inputEmail').val();
    var nic = $('#inputNIC').val();
    var dLicense = $('#inputDrivingLicense').val();
    var username = $('#inputUsername').val();
    var password = $('#inputPassword').val();

    var user = {
        userID: id,
        name: name,
        address: address,
        contactNo: contact,
        email: email,
        nic: nic,
        drivingLicense: dLicense,
        username: username,
        password: password,
    }

    $.ajax({
        url: baseUrl + "user",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (resp){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "User Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            getLastLoginUser();
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "User Not Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

}

$("#btnUpdateUserImages").click(function (){
    var id = $('#UserProfileID').text();
    if ($("#formFileMultipleNICFront").val() != "" && $("#formFileMultipleNICBack").val() != "" && $("#formFileMultipleDL").val() != ""){
        uploadUserImages(id);
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Please Upload All Images Details",
            showConfirmButton: false,
            timer: 1500
        });
    }

});

function uploadUserImages(id) {

    var fileObjectNic1 = $('#formFileMultipleNICFront')[0].files[0];
    var fileNameNic1 = id + "-imageOfNICFront-" + $('#formFileMultipleNICFront')[0].files[0].name;

    var fileObjectNic2 = $('#formFileMultipleNICBack')[0].files[0];
    var fileNameNic2 = id + "-imageOfNICBack-" + $('#formFileMultipleNICBack')[0].files[0].name;

    var fileObjectLicence = $('#formFileMultipleDL')[0].files[0];
    var fileNameLicence = id + "-imageOfDrivingLicense-" + $('#formFileMultipleDL')[0].files[0].name;

    var data = new FormData();
    data.append("imageOfNICFront", fileObjectNic1, fileNameNic1);
    data.append("imageOfNICBack", fileObjectNic2, fileNameNic2);
    data.append("imageOfDrivingLicense", fileObjectLicence, fileNameLicence);

    $.ajax({
        url: baseUrl + "user/uploadImg/" + id,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Images Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Images Not Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$("#btnResetUserPw").click(function (){
    if ($("#inputNPassword").val() != ""){
        resetPassword();
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Add New Password",
            showConfirmButton: false,
            timer: 1500
        });

    }
});

function resetPassword(){
    var id = $('#UserProfileID').text();
    var newPassword = $('#inputNPassword').val();

    $.ajax({
        url: baseUrl + "user/resetPassword/"+ id + "/" + newPassword,
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

$("#btnDeleteUser").click(function (){
    if ($('#UserProfileID').text() != "") {
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
                deleteUser();
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

function deleteUser(){

    var id = $('#UserProfileID').text();
    $.ajax({
        url: baseUrl + "user?id=" + id,
        method: "DELETE",
        success: function (resp) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Your User Account Deleted Successfully",
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

function loadAllMyRentIdsToComboBox(userID){
    $('#selectUserRentId').empty();
    $('#selectUserRentId').append(new Option("-Select RentId-", ""));
    $.ajax({
        url: "http://localhost:8080/Spring_Back_End_war/rent/getAllByUserID/" + userID,
        method: "GET",
        success: function (resp) {
            let i = 0;
            for (let rent of resp.data) {
                console.log(rent);
               if ((rent.status === "Pending") || (rent.status === "Accepted")){
                   $('#selectUserRentId').append(new Option(rent.rentID, i));
                   i++;
               }
            }
        }
    })
}

$('#selectUserRentId').change(function () {
    let rentId = $('#selectUserRentId').find('option:selected').text();
    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (res) {
            let rent = res.data;

            let driverId;
            let driverName;
            let driverContact;
            if (rent.driverID === null) {
                driverId = "No Driver";
                driverName ="No Driver";
                driverContact="No Driver";
            } else {
                driverId = rent.driverID.driverID;
                driverName = rent.driverID.name
                driverContact = rent.driverID.contactNo;
            }


            $("#inputRentDate").val(rent.rentDate);
            $("#inputCraID").val(rent.cars.registrationNumber);
            $("#inputTransmissionType").val(rent.cars.transmissionType);
            $("#inputFreeKMForADay").val(rent.cars.freeKMForADay);
            $("#inputFreeKMForAMonth").val(rent.cars.freeKMForAMonth);
            $("#inputPricePerExtraKM").val(rent.cars.pricePerExtraKM);
            $("#inputUserID").val(rent.users.userID);
            $("#inputNameOfUser").val(rent.users.name);
            $("#inputPickUpDate").val(rent.pickUpDate);
            $("#inputPickUpTime").val(rent.pickUpTime);
            $("#inputPickUpVenue").val(rent.pickUpVenue);
            $("#inputReturnDate").val(rent.returnDate);
            $("#inputReturnTime").val(rent.returnTime);
            $("#inputReturnVenue").val(rent.returnVenue);
            $("#inputLossDamageWaiver").val(rent.lossDamageWaiver);
            $("#inputDriverName").val(driverName);
            $("#inputDriverContactNo").val(driverContact);
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Rent Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
})

$("#btnRemoverUserRent").click(function (){
    let rentId = $('#selectUserRentId').find('option:selected').text();

    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (res) {
            let rent = res.data;

            let driverid;
            if (rent.driverID === null) {
                driverid = "No Driver";
            } else {
                driverid = rent.driverID.driverID;
            }

            let rentId = rent.rentID;
            let carRegNo = rent.cars.registrationNumber;
            let driverId = driverid;
            let userId = rent.users.userID;

            if (rent.status === "Pending") {
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
                        cancelRental(rentId,carRegNo,driverId,userId);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "You Can't Delete This Car Reservation...",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            },
            error: function (error) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Rent Is Not Exist...",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })

});

function cancelRental(rentId,carRegNo,driverId,userId) {
    let status = "Cancelled";
    console.log(rentId,carRegNo,driverId,userId);

    $.ajax({
        url: baseUrl + "rent/" + rentId + "/" + status,
        method: "PUT",
        success: function (res) {
            console.log(res)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Rent Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            let status = "Available";
            updateCarStatusByRegNo(status, carRegNo);
            updateDriverStatusByDriverID(driverId);
            loadAllMyRentIdsToComboBox(userId);
            clearRentScheduleFields();
        },
        error: function (error){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Rent Not Deleted",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function updateCarStatusByRegNo(availability, registrationNumber) {
    $.ajax({
        url: baseUrl + "car/updateCarAvailability/" + registrationNumber + "/" + availability,
        method: "PUT",
        success: function (res) {
            console.log("Update Car availability to available");
        },
        error: function (error){
            console.log("Update Car availability to not available");
        }
    })
}

function updateDriverStatusByDriverID(driverID) {
    if (driverID === "No Driver") {
        console.log("This Rent Has No Driver to Update Driver Availability.");
    }else{

        $.ajax({
            url: baseUrl + "driver/updateAvailable/" + driverID,
            method: "PUT",
            success: function (res) {
                console.log("Update Driver Availability to available");
            },
            error: function (error) {
                console.log("Update Driver Availability to not available");
            }
        })
    }
}

function clearRentScheduleFields(){
    $("#inputRentDate").val("");
    $("#inputCraID").val("");
    $("#inputTransmissionType").val("");
    $("#inputFreeKMForADay").val("");
    $("#inputFreeKMForAMonth").val("");
    $("#inputPricePerExtraKM").val("");
    $("#inputUserID").val("");
    $("#inputNameOfUser").val("");
    $("#inputPickUpDate").val("");
    $("#inputPickUpTime").val("");
    $("#inputPickUpVenue").val("");
    $("#inputReturnDate").val("");
    $("#inputReturnTime").val("");
    $("#inputReturnVenue").val("");
    $("#inputLossDamageWaiver").val("");
    $("#inputDriverName").val("");
    $("#inputDriverContactNo").val("");
}