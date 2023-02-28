
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
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Re Check and fill all details",
            showConfirmButton: false,
            timer: 1500
        });
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
        searchUser(role, username, password);
    } else if (role === "Driver") {
        searchDriver(role, username, password);
    }
}

function searchAdmin(role, username, password) {
    $.ajax({
        url: baseUrl + "admin/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            if (res.data === true) {
                loginSave(role, username, password);

            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Incorrect Date.Try Again...",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    });
}

function searchUser(role, username, password) {
    $.ajax({
        url: baseUrl + "user/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            console.log(res.data);
            if (res.data === true) {
                loginSave(role, username, password);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Incorrect Date.Try Again...",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    })
}

function searchDriver(role, username, password) {
    $.ajax({
        url: baseUrl + "driver/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            console.log(res.data);
            if (res.data === true) {
                loginSave(role, username, password);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Incorrect Date.Try Again...",
                    showConfirmButton: false,
                    timer: 1500
                });            }
        }
    })
}

function loginSave(role, username, password) {
    let logId = $('#txtLogId').val();
    console.log(logId);
    $.ajax({
        url: baseUrl + "login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(
            {
                loginID: logId,
                username: username,
                password: password,
                role: role
            }
        ),
        success: function (resp) {
            if (role==="Admin"){
                location.replace("adminDashboard.html");
            } else if (role==="User"){
                location.replace("userDashboard.html");
            } else if (role==="Driver"){
                location.replace("driverDashboard.html");
            }
            console.log("Login data saved to DB");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "LogIn Successful",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "LogIn Unsuccessful",
                showConfirmButton: false,
                timer: 1500
            });
            console.log("Unsuccessful");
        }
    })
}


// show password hinde password
//
// $('#showPW').on('click', function(){
//     if($( "#showPW").prop( "checked", true )){
//         $('#inputPassword').setAttribute("Type","text");
//     }else{
//         $('#inputPassword').setAttribute("Type","password");
//     }
// })



