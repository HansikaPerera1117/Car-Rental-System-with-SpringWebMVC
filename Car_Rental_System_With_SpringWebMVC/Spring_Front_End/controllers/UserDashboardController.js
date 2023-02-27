
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
    updateUser();
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
    uploadUserImages(id);
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
    resetPassword();
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