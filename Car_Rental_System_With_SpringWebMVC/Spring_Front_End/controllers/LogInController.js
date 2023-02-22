
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

getNewLoginId();

function getNewLoginId() {
    $.ajax({
        url: baseUrl + "login/generateLogId",
        method: "GET",
        success: function (res) {
            $('#txtLogId').val(res.data);
        }
    });
}

$('#btnLogIn').click(function () {
    var role = $('#inputRole').find('option:selected').text();

    if ($('#inputUsername').val() != "" && $('#inputPassword').val() != "" && role != "Select Your Role") {
        login();
    }
});

function login() {
    var username = $('#inputUsername').val();
    var password = $('#inputPassword').val();
    var role = $('#inputRole').find('option:selected').text();

    console.log(role);

    if (role === "Admin") {
        searchAdmin(role, username, password);
    } else if (role === "User") {
        searchCustomer(role, username, password);
    } else if (role === "Driver") {
        searchDriver(role, username, password);
    }
}

