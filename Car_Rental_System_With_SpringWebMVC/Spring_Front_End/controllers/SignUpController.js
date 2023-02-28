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

$('#inputName,#inputAddress,#inputContact,#inputEmail,#inputNIC,#inputDrivingLicense,#inputUsername,#inputPassword,#formFileMultipleNICFront,#formFileMultipleNICBack,#formFileMultipleDL').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


generateUserId();

function generateUserId() {
    $.ajax({
        url: baseUrl + "user/generateUserId",
        method: "GET",
        success: function (res) {
            $('#txtId').val(res.data);
        }
    })
}

$('#inputName,#inputAddress,#inputContact,#inputEmail,#inputNIC,#inputDrivingLicense,#inputUsername,#inputPassword').on('keyup', function (event) {
    if (event.key == "Enter") {
        checkIfSignUpUserFormValid();
    }
});

function  checkIfSignUpUserFormValid(){
    let name = $('#inputName').val();
    if (patternName.test(name)){
        $('#inputAddress').focus();
        let address = $('#inputAddress').val();
        if (patternAddress.test(address)){
            $('#inputContact').focus();
            let contactNo = $('#inputContact').val();
            if (patternContactNo.test(contactNo)){
                $('#inputEmail').focus();
                let email = $('#inputEmail').val();
                if (patternEmail.test(email)){
                    $('#inputNIC').focus();
                    let nicNo = $('#inputNIC').val();
                    if (patternNicNo.test(nicNo)){
                        $('#inputDrivingLicense').focus();
                        let licenceNo = $('#inputDrivingLicense').val();
                        if (patternDrivingLicenceNo.test(licenceNo)){
                            $('#inputUsername').focus();
                            let username = $('#inputUsername').val();
                            if (patternLoginUsername.test(username)){
                                $('#inputPassword').focus();
                                let password = $('#inputPassword').val();
                                if (patternLoginPassword.test(password)){
                                    addUser();

                                }
                            }
                        }
                    }
                }
            }
        }
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputName").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputAddress").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputContact").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputEmail").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputNIC").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputDrivingLicense").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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
        $('#btnSignUp').prop('disabled', false);
        return true;
    } else {
        $("#inputUsername").css('border', '2px solid red');
        $('#btnSignUp').prop('disabled', true);
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

//----------------validation check and add style to inputFields end--------------------

$("#btnSignUp").click(function (){
   if ($("#inputName").val() != "" && $("#inputAddress").val() != "" && $("#inputContact").val() != "" && $("#inputEmail").val() != "" && $("#inputNIC").val() != "" && $("#inputDrivingLicense").val() != "" && $("#inputUsername").val() != "" && $("#inputPassword").val() != "" && $("#formFileMultipleNICFront").val() != "" && $("#formFileMultipleNICBack").val() != "" && $("#formFileMultipleDL").val() != ""){
       addUser();
   }else {
       Swal.fire({
           position: 'top-end',
           icon: 'error',
           title: "Check Again and Fill All Details",
           showConfirmButton: false,
           timer: 1500
       });
   }
});

function addUser() {

    let id = $('#txtId').val();
    let name = $('#inputName').val();
    let address = $('#inputAddress').val();
    let contactNo = $('#inputContact').val();
    let email = $('#inputEmail').val();
    let nicNo = $('#inputNIC').val();
    let licenceNo = $('#inputDrivingLicense').val();
    let username = $('#inputUsername').val();
    let password = $('#inputPassword').val();
    let status = "Pending";

    var user = {
        userID: id,
        name: name,
        address: address,
        contactNo: contactNo,
        email: email,
        nic: nicNo,
        drivingLicense: licenceNo,
        username: username,
        password: password,
        status: status
    }

    $.ajax({
        url: baseUrl + "user",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (resp) {
            uploadUserImages(id);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "User Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            clearSignupTextFields();
            location.replace("logIn.html");
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "User Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

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

function clearSignupTextFields() {
    $('#txtId').val("");
    $('#inputName').val("");
    $('#inputAddress').val("");
    $('#inputContact').val("");
    $('#inputEmail').val("");
    $('#inputNIC').val("");
    $('#inputDrivingLicense').val("");
    $('#inputUsername').val("");
    $('#inputPassword').val("");
    $('#formFileMultipleNICFront').val("");
    $('#formFileMultipleNICBack').val("");
    $('#formFileMultipleDL').val("");
}
