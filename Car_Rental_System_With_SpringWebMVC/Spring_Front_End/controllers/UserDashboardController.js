
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
            loadMyCarRentsToTable(user.userID);
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
                title: "User Not Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

}

$("#btnDeleteUser").click(function (){
    deleteUser();
    location.replace("logIn.html");
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
                title: "User Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
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

//--------------meka karala na thama------------------------------------
function loadMyCarRentsToTable(userID) {

}