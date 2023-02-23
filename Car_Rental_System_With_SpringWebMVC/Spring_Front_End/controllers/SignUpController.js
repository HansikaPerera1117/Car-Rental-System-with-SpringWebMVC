$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

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

$("#btnSignUp").click(function (){
    addUser();
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
