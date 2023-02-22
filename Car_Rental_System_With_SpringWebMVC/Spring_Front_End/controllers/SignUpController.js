$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseURL = "http://localhost:8080/Spring_Back_End_war/";

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

    var user = {
        userId: id,
        name: name,
        address: address,
        contactNo: contactNo,
        email: email,
        nicNo: nicNo,
        licenceNo: licenceNo,
        username: username,
        password: password,
    }

    $.ajax({
        url: baseUrl + "user",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (resp) {
            uploadUserImages(id);
            swal({
                title: "Confirmation",
                text: resp.message,
                icon: "success",
                button: "Close",
                timer: 2000
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            swal({
                title: "Error!",
                text: errorReason.message,
                icon: "error",
                button: "Close",
                timer: 2000
            });
        }
    })
}

function uploadCustomerImages(id) {
    var fileObjectNic1 = $('#formFileMultipleNICFront')[0].files[0];
    var fileNameNic1 = id + "-nicfront-" + $('#formFileMultipleNICFront')[0].files[0].name;

    var fileObjectNic2 = $('#formFileMultipleNICBack')[0].files[0];
    var fileNameNic2 = id + "-nicback-" + $('#formFileMultipleNICBack')[0].files[0].name;

    var fileObjectLicence = $('#formFileMultipleDL')[0].files[0];
    var fileNameLicence = id + "-licence-" + $('#formFileMultipleDL')[0].files[0].name;

    var data = new FormData();
    data.append("nicf", fileObjectNic1, fileNameNic1);
    data.append("nicb", fileObjectNic2, fileNameNic2);
    data.append("licenceImg", fileObjectLicence, fileNameLicence);

    $.ajax({
        url: baseUrl + "user" + id,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
        }
    })
}