
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

//----------------cars--------------------------
let patternRegNo = /^[A-Z ]{2,3}(-)[0-9]{4}$/;
let patternBrand = /^[A-z0-9 ,:.-]{8,30}$/;
let patternNoOfPassengers = /^[1-9][0-9]{0,1}$/;
let patternDailyRate = /^[1-9][0-9]*(.[0-9]{1,2})?$/;
let patternMonthlyRate = /^[1-9][0-9]*(.[0-9]{1,2})?$/;
let patternFreeKmForADay = /^[1-9][0-9]{0,3}$/;
let patternFreeKmForAMonth = /^[1-9][0-9]{0,6}$/;
let patternPriceForExtraKm = /^[1-9][0-9]*(.[0-9]{1,2})?$/;
let patternCompleteKm = /^[1-9][0-9]{0,}$/;
let patternColor = /^[A-z]{2,10}$/;

$("#btnAddCar").prop('disabled', true);
$("#btnUpdateCar").prop('disabled', true);



//--------------maintains----------------
let patternDescription = /^[A-z /-]{6,25}$/;


setDates();
loadTodayRents();
loadAllUsers();
getRegisterUsersCount();

loadAllCars();
getAvailableCarCount();
getRentedCarCount();

generateDriverId();
loadAllDrivers();
getAvailableDriverCount();

loadAllRents();
loadAllDriverIDsToComboBox();
getRentCount();

generatePaymentID();
loadAllPayments();
loadAllRentIdsToPaymentComboBox();

loadPendingRentals();

loadAllDailyIncomes();
loadAllWeeklyIncomes();
loadAllMonthlyIncomes();
loadAllAnnuallyIncomes();

generateMaintenanceId();
loadAllCarRegNosToComboBox();
loadAllMaintenances();
getUnderMaintenanceCarCount();



$("#home").css('display','block');
$("#cars").css('display','none');
$("#users").css('display','none');
$("#drivers").css('display','none');
$("#rents").css('display','none');
$("#payments").css('display','none');
$("#requests").css('display','none');
$("#incomes").css('display','none');
$("#maintains").css('display','none');

$("#menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
$("#menuHome").css("background-color", "#B7B7B7");


$("#menuHome").click(function (){
    $("#menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuHome").css("background-color", "#B7B7B7");

    $("#home").css('display','block');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuCars").click(function (){
    $("#menuHome, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuCars").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','block');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuUsers").click(function (){
    $("#menuHome, #menuCars, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuUsers").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','block');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuDrivers").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuDrivers").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','block');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuRents").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuRents").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','block');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuPayments").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuPayments").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','block');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuRequests").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuRequests").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','block');
    $("#incomes").css('display','none');
    $("#maintains").css('display','none');

});

$("#menuIncomes").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuMaintains").css("background-color", "white");
    $("#menuIncomes").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','block');
    $("#maintains").css('display','none');

});

$("#menuMaintains").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes").css("background-color", "white");
    $("#menuMaintains").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');
    $("#payments").css('display','none');
    $("#requests").css('display','none');
    $("#incomes").css('display','none');
    $("#maintains").css('display','block');

});


//--------------------home start-------------------------------------------
function getToday(){
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    return current_date;
}

function setDates() {
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var current_time = date.getHours()+":"+date.getMinutes();

    $("#lblDate").text("Date : "+current_date);
    $("#lblTime").text("Time : "+current_time);

}


function loadTodayRents() {

    let today = getToday();

    $('#tblTodayRents').empty();

    $.ajax({
        url: baseUrl + "rent/getTodayRents/" + today,
        method: "GET",
        success: function (res) {
            for (const booking of res.data) {
                let driverId;
                if (booking.driverID === null) {
                    driverId = "No Driver";
                } else {
                    driverId = booking.driverID.driverID;
                }
                let row = `<tr><td>${booking.rentID}</td><td>${booking.rentDate}</td><td>${booking.users.userID}</td><td>${booking.users.name}</td><td>${booking.cars.registrationNumber}</td><td>${booking.pickUpDate}</td><td>${booking.returnDate}</td><td>${driverId}</td><td>${booking.status}</td></tr>`;
                $('#tblTodayRents').append(row);
            }
        }
    });
}

//--------------------home end-------------------------------------------



//--------------------User start-------------------------------------------

function loadAllUsers() {
    $('#tblUsers').empty();
    $.ajax({
        url: baseUrl + "user",
        method: "GET",
        success: function (res) {
            for (const user of res.data) {
                let row = `<tr><td>${user.userID}</td><td>${user.name}</td><td>${user.address}</td><td>${user.contactNo}</td><td>${user.email}</td><td>${user.nic}</td><td>${user.drivingLicense}</td><td>${user.status}</td></tr>`;
                $('#tblUsers').append(row);
            }
            bindUserTblClickEvents();
        }
    })
}

function bindUserTblClickEvents() {
    $('#tblUsers>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();
        let email = $(this).children().eq(4).text();
        let nic = $(this).children().eq(5).text();
        let licence = $(this).children().eq(6).text();
        let status = $(this).children().eq(7).text();


        $('#inputUserUserID').val(id);
        $('#inputUserName').val(name);
        $('#inputUserAddress').val(address);
        $('#inputUserContactNo').val(contact);
        $('#inputUserEmail').val(email);
        $('#inputUserNIC').val(nic);
        $('#inputUserDrivingLicense').val(licence);
        $('#inputUserStatus').val(status);

        searchAndLoadUserImgs(id);

    });
}

function searchAndLoadUserImgs(id) {
    $('#inputImgOfNICFront').empty();
    $('#inputImgOfNICBack').empty();
    $('#inputImageOfUserDrivingLicense').empty();

    $.ajax({
        url: baseUrl + "user/" + id,
        method: "GET",
        success: function (res) {
            let user = res.data;

            let nicFrontPath = user.imageOfNICFront;
            let nicFrontImg = nicFrontPath.split("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages\\Users")[1];
            let nicFrontImgSrc = "../assests/savedImages/Users" + nicFrontImg;
            console.log(nicFrontImgSrc);

            let nicBackPath = user.imageOfNICBack;
            let nicBackImg = nicBackPath.split("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages\\Users")[1];
            let nicBackImgSrc = "../assests/savedImages/Users" + nicBackImg;

            let licencePath = user.imageOfDrivingLicense;
            let licenceImg = licencePath.split("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages\\Users")[1];
            let licenceImgSrc = "../assests/savedImages/Users" + licenceImg;

            let nicfImg = `<img src=${nicFrontImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
            $('#inputImgOfNICFront').append(nicfImg);

            let nicbImg = `<img src=${nicBackImgSrc} alt="NIC Back" style="background-size: cover;width: 100%;height: 100%">`;
            $('#inputImgOfNICBack').append(nicbImg);

            let licImg = `<img src=${licenceImgSrc} alt="Licence" style="background-size: cover;width: 100%;height: 100%">`;
            $('#inputImageOfUserDrivingLicense').append(licImg);
        }
    })
}

$("#btnUserSearch").click(function () {
    var id = $("#inputUserSearch").val();

    $.ajax({
        url: baseUrl + "user/" + id,
        method: "GET",
        success: function (res) {
            let user = res.data;

            $('#inputUserUserID').val(user.userID);
            $('#inputUserName').val(user.name);
            $('#inputUserAddress').val(user.address);
            $('#inputUserContactNo').val(user.contactNo);
            $('#inputUserEmail').val(user.email);
            $('#inputUserNIC').val(user.nic);
            $('#inputUserDrivingLicense').val(user.drivingLicense);
            $('#inputUserStatus').val(user.status);

            searchAndLoadUserImgs(id);
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "User " + id + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

$('#btnAcceptUser').click(function () {
    if ($('#inputUserUserID').val() != "") {
        let id = $('#inputUserUserID').val();
        acceptUser(id);
        clearUserFields();

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "User Not Selected By Table",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

function acceptUser(id) {
    $.ajax({
        url: baseUrl + "user/updateStatus/" + id,
        method: "PUT",
        success: function (resp) {
            console.log(resp);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "User Accepted",
                showConfirmButton: false,
                timer: 1500
            });
            loadAllUsers();
        }
    })
}

function clearUserFields() {
    $('#inputUserUserID').val("");
    $('#inputUserName').val("");
    $('#inputUserAddress').val("");
    $('#inputUserContactNo').val("");
    $('#inputUserEmail').val("");
    $('#inputUserNIC').val("");
    $('#inputUserDrivingLicense').val("");
    $('#inputUserStatus').val("");
    $('#inputImgOfNICFront').empty();
    $('#inputImgOfNICBack').empty();
    $('#inputImageOfUserDrivingLicense').empty();
    $("#inputUserSearch").val("");
}

$("#btnDenyUser").click(function (){
    deleteUser();
});

function deleteUser(){
    let id = $('#inputUserUserID').val();
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
            getRegisterUsersCount();
            loadAllUsers();
            clearUserFields();
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

function getRegisterUsersCount() {
    $.ajax({
        url: baseUrl + "user/count",
        method: "GET",
        success: function (resp) {

            if (resp.data != 0) {
                if (resp.data < 10) {
                    $('#lblNoOfUsers').text("0" + resp.data);
                } else {
                    $('#lblNoOfUsers').text(resp.data);
                }
            } else {
                $('#lblNoOfUsers').text("00");
            }

        }
    })
}

$("#btnRefreshUser").click(function (){
    clearUserFields()
});


//--------------------User end-------------------------------------------


//--------------------Car start-------------------------------------------

//------validation-------
$('#inputRegisterNo').on('keyup', function (event) {
    var regNo = $('#inputRegisterNo').val();
    checkRegNo();
    if (event.key === "Enter") {
        if (patternRegNo.test(regNo)) {
            $('#inputBrand').focus();
        } else {
            $('#inputBrand').focus();
        }
    }
});

function checkRegNo() {
    var regNo = $('#inputRegisterNo').val();

    if (patternRegNo.test(regNo)) {
        $("#inputRegisterNo").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputRegisterNo").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputBrand').on('keyup', function (event) {
    var brand = $('#inputBrand').val();
    checkBrand();
    if (event.key === "Enter") {
        if (patternBrand.test(brand)) {
            $('#selectType').focus();
        } else {
            $('#selectType').focus();
        }
    }
});

function checkBrand() {
    var brand = $('#inputBrand').val();
    if (patternBrand.test(brand)) {
        $("#inputBrand").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputBrand").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#selectType').click(function () {
    checkType();
})

function checkType() {
    var type = $('#selectType').find('option:selected').text();
    if (type != "- Select Car Type -") {
        $("#selectType").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#selectType").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#selectTransmissionType').click(function () {
    checkTransmission();
})

function checkTransmission() {
    var transType = $('#selectTransmissionType').find('option:selected').text();
    if (transType != "- Select Transmission -") {
        $("#selectTransmissionType").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#selectTransmissionType").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#selectFuelType').click(function () {
    checkFuel();
})

function checkFuel() {
    var fuel = $('#selectFuelType').find('option:selected').text();
    if (fuel != "- Select Fuel Type -") {
        $("#selectFuelType").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#selectFuelType").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputNoOfPassengers').on('keyup', function (event) {
    var noOfPassengers = $('#inputNoOfPassengers').val();
    checkNoOfPassengers();
    if (event.key === "Enter") {
        if (patternNoOfPassengers.test(noOfPassengers)) {
            $('#inputFrontImg').focus();
        } else {
            $('#inputFrontImg').focus();
        }
    }
});

function checkNoOfPassengers() {
    var noOfPassengers = $('#inputNoOfPassengers').val();

    if (patternNoOfPassengers.test(noOfPassengers)) {
        $("#inputNoOfPassengers").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputNoOfPassengers").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputDailyRate').on('keyup', function (event) {
    var dailyRate = $('#inputDailyRate').val();
    checkDailyRate();
    if (event.key === "Enter") {
        if (patternDailyRate.test(dailyRate)) {
            $('#inputMonthlyRate').focus();
        } else {
            $('#inputMonthlyRate').focus();
        }
    }
});

function checkDailyRate() {
    var dailyRate = $('#inputDailyRate').val();
    if (patternDailyRate.test(dailyRate)) {
        $("#inputDailyRate").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputDailyRate").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputMonthlyRate').on('keyup', function (event) {
    var monthlyRate = $('#inputMonthlyRate').val();
    checkMonthlyRate();
    if (event.key === "Enter") {
        if (patternMonthlyRate.test(monthlyRate)) {
            $('#inputFreeKmForADay').focus();
        } else {
            $('#inputFreeKmForADay').focus();
        }
    }
});

function checkMonthlyRate() {
    var monthlyRate = $('#inputMonthlyRate').val();
    if (patternMonthlyRate.test(monthlyRate)) {
        $("#inputMonthlyRate").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputMonthlyRate").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputFreeKmForADay').on('keyup', function (event) {
    var freeKmForADay = $('#inputFreeKmForADay').val();
    checkFreeKmForPrice();
    if (event.key === "Enter") {
        if (patternFreeKmForADay.test(freeKmForADay)) {
            $('#inputFreeKmForAMonth').focus();
        } else {
            $('#inputFreeKmForAMonth').focus();
        }
    }
});

function checkFreeKmForPrice() {
    var freeKmForADay = $('#inputFreeKmForADay').val();
    if (patternFreeKmForADay.test(freeKmForADay)) {
        $("#inputFreeKmForADay").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputFreeKmForADay").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputFreeKmForAMonth').on('keyup', function (event) {
    var freeKmForAMonth = $('#inputFreeKmForAMonth').val();
    checkFreeKmForDuration();
    if (event.key === "Enter") {
        if (patternFreeKmForAMonth.test(freeKmForAMonth)) {
            $('#inputPricePerExtraKm').focus();
        } else {
            $('#inputPricePerExtraKm').focus();
        }
    }
});

function checkFreeKmForDuration() {
    var freeKmForAMonth = $('#inputFreeKmForAMonth').val();
    if (patternFreeKmForAMonth.test(freeKmForAMonth)) {
        $("#inputFreeKmForAMonth").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputFreeKmForAMonth").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputPricePerExtraKm').on('keyup', function (event) {
    var priceForExtraKm = $('#inputPricePerExtraKm').val();
    checkPriceForExtraKm();
    if (event.key === "Enter") {
        if (patternPriceForExtraKm.test(priceForExtraKm)) {
            $('#inputCompleteKm').focus();
        } else {
            $('#inputCompleteKm').focus();
        }
    }
});

function checkPriceForExtraKm() {
    var priceForExtraKm = $('#inputPricePerExtraKm').val();
    if (patternPriceForExtraKm.test(priceForExtraKm)) {
        $("#inputPricePerExtraKm").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputPricePerExtraKm").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputCompleteKm').on('keyup', function () {
    var completeKm = $('#inputCompleteKm').val();
    checkCompleteKm();
    if (event.key === "Enter") {
        if (patternCompleteKm.test(completeKm)) {
            $('#inputColour').focus();
        } else {
            $('#inputColour').focus();
        }
    }
});

function checkCompleteKm() {
    var completeKm = $('#inputCompleteKm').val();
    if (patternCompleteKm.test(completeKm)) {
        $("#inputCompleteKm").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputCompleteKm").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}

$('#inputColour').on('keyup', function () {
    var color = $('#inputColour').val();
    checkColor();
    if (event.key === "Enter") {
        if (patternColor.test(color)) {
            $('#selectCarAvailability').focus();
        } else {
            $('#selectCarAvailability').focus();
        }
    }
});

function checkColor() {
    var color = $('#inputColour').val();
    if (patternColor.test(color)) {
        $("#inputColour").css('border', '3px solid green').focus();
        $("#btnAddCar").prop('disabled', false);
        $("#btnUpdateCar").prop('disabled', false);
        return true;
    } else {
        $("#inputColour").css('border', '3px solid red').focus();
        $("#btnAddCar").prop('disabled', true);
        $("#btnUpdateCar").prop('disabled', true);
        return false;
    }
}


//----------------------------------------------------------------

$("#btnAddCar").click(function (){
    if ($("#inputRegisterNo").val() != "" && $("#inputBrand").val() != "" && $('#selectType').find('option:selected').text() != "- Select Car Type -" && $('#selectTransmissionType').find('option:selected').text() != "- Select Transmission -" && $('#selectFuelType').find('option:selected').text() != "- Select Fuel Type -" && $("#inputNoOfPassengers").val() != "" && $("#inputFrontImg").val() != "" && $("#inputSideImg").val() != "" && $("#inputBackImg").val() != "" && $("#inputInteriorImg").val() != "" && $("#inputDailyRate").val() != "" && $("#inputMonthlyRate").val() != "" && $("#inputFreeKmForADay").val() != "" && $("#inputFreeKmForAMonth").val() != "" && $("#inputPricePerExtraKm").val() != "" && $("#inputCompleteKm").val() != "" && $("#inputColour").val() != ""){
        addCar();
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Check Again and Fill All Details",
            showConfirmButton: false,
            timer: 1500
        });
    }
})

function addCar() {
    let regNo = $('#inputRegisterNo').val();
    let brand = $('#inputBrand').val();
    let type = $('#selectType').find('option:selected').text();
    let transmission = $('#selectTransmissionType').find('option:selected').text();
    let fuel = $('#selectFuelType').find('option:selected').text();
    let noOfPassengers = $('#inputNoOfPassengers').val();
    let dailyRate = $('#inputDailyRate').val();
    let monthlyRate = $('#inputMonthlyRate').val();
    let freeKmForADay = $('#inputFreeKmForADay').val();
    let freeKmForAMonth = $('#inputFreeKmForAMonth').val();
    let priceForExtraKm = $('#inputPricePerExtraKm').val();
    let completeKm = $('#inputCompleteKm').val();
    let color = $('#inputColour').val();
    let availability = "Available";

    var car = {
        registrationNumber: regNo,
        brand: brand,
        type: type,
        noOfPassengers: noOfPassengers,
        transmissionType: transmission,
        fuelType: fuel,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        freeKMForADay: freeKmForADay,
        freeKMForAMonth: freeKmForAMonth,
        pricePerExtraKM: priceForExtraKm,
        completeKm: completeKm,
        color: color,
        availability: availability
    }

    $.ajax({
        url: baseUrl + "car",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (resp) {
            uploadCarImages(regNo);
            loadAllCars();
            getAvailableCarCount();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function uploadCarImages(registrationNumber) {
    var fileObjectFront = $('#inputFrontImg')[0].files[0];
    var fileNameFront = registrationNumber + "-frontImage-" + $('#inputFrontImg')[0].files[0].name;

    var fileObjectBack = $('#inputBackImg')[0].files[0];
    var fileNameBack = registrationNumber + "-backImage-" + $('#inputBackImg')[0].files[0].name;

    var fileObjectSide = $('#inputSideImg')[0].files[0];
    var fileNameSide = registrationNumber + "-sideImage-" + $('#inputSideImg')[0].files[0].name;

    var fileObjectInterior = $('#inputInteriorImg')[0].files[0];
    var fileNameInterior = registrationNumber + "-interiorImage-" + $('#inputInteriorImg')[0].files[0].name;

    var data = new FormData();
    data.append("frontImage", fileObjectFront, fileNameFront);
    data.append("backImage", fileObjectBack, fileNameBack);
    data.append("interiorImage", fileObjectInterior, fileNameInterior);
    data.append("sideImage", fileObjectSide, fileNameSide);

    $.ajax({
        url: baseUrl + "car/up/" + registrationNumber,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            clearAddCarFields();
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

function clearAddCarFields() {
     $('#inputRegisterNo').val("");
     $('#inputBrand').val("");
     $('#inputNoOfPassengers').val("");
     $('#inputDailyRate').val("");
     $('#inputMonthlyRate').val("");
     $('#inputFreeKmForADay').val("");
     $('#inputFreeKmForAMonth').val("");
     $('#inputPricePerExtraKm').val("");
     $('#inputCompleteKm').val("");
     $('#inputColour').val("");
     $('#inputFrontImg').val("");
     $('#inputSideImg').val("");
     $('#inputBackImg').val("");
     $('#inputInteriorImg').val("");
    $('#inputCarSearch').val("");

    $('#inputRegisterNo').css('border', 'none').focus();
    $('#inputBrand').css('border','none');
    $('#selectType').css('border','none');
    $('#selectTransmissionType').css('border','none');
    $('#selectFuelType').css('border','none');
    $('#inputNoOfPassengers').css('border','none');
    $('#inputDailyRate').css('border','none');
    $('#inputMonthlyRate').css('border','none');
    $('#inputFreeKmForADay').css('border','none');
    $('#inputFreeKmForAMonth').css('border','none');
    $('#inputPricePerExtraKm').css('border','none');
    $('#inputCompleteKm').css('border','none');
    $("#inputColour").css('border','none');
    $('#inputFrontImg').css('border','none');
    $('#inputSideImg').css('border','none');
    $('#inputBackImg').css('border','none');
    $('#inputInteriorImg').css('border','none');
    $('#inputCarSearch').css('border','none');
    $("#btnAddCar").prop('disabled', true);
    $("#btnUpdateCar").prop('disabled', true);
}

$('#btnUpdateCar').click(function () {
    updateCar();
    clearAddCarFields();
})

function updateCar() {
    let regNo = $('#inputRegisterNo').val();
    let brand = $('#inputBrand').val();
    let type = $('#selectType').find('option:selected').text();
    let transmission = $('#selectTransmissionType').find('option:selected').text();
    let fuel = $('#selectFuelType').find('option:selected').text();
    let noOfPassengers = $('#inputNoOfPassengers').val();
    let dailyRate = $('#inputDailyRate').val();
    let monthlyRate = $('#inputMonthlyRate').val();
    let freeKmForADay = $('#inputFreeKmForADay').val();
    let freeKmForAMonth = $('#inputFreeKmForAMonth').val();
    let priceForExtraKm = $('#inputPricePerExtraKm').val();
    let completeKm = $('#inputCompleteKm').val();
    let color = $('#inputColour').val();

    var car = {
        registrationNumber: regNo,
        brand: brand,
        type: type,
        noOfPassengers: noOfPassengers,
        transmissionType: transmission,
        fuelType: fuel,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        freeKMForADay: freeKmForADay,
        freeKMForAMonth: freeKmForAMonth,
        pricePerExtraKM: priceForExtraKm,
        completeKm: completeKm,
        color: color,
    }

    $.ajax({
        url: baseUrl + "car",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function (resp) {
             loadAllCars();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (ob) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Not Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$("#btnUpdateCarImages").click(function (){
    let regNo = $('#inputRegisterNo').val();
    if ($("#inputFrontImg").val() != "" && $("#inputSideImg").val() != "" && $("#inputBackImg").val() != "" && $("#inputInteriorImg").val() != ""){
        uploadUserImages(id);
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Please Upload All Images Details To Update",
            showConfirmButton: false,
            timer: 1500
        });
    }
    uploadCarImages(regNo)
});

function loadAllCars() {
    $('#tblCars').empty();
    $.ajax({
        url: baseUrl + "car",
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {
                let row = `<tr><td>${car.registrationNumber}</td><td>${car.brand}</td><td>${car.type}</td><td>${car.transmissionType}</td><td>${car.fuelType}</td><td>${car.noOfPassengers}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.freeKMForADay}</td><td>${car.freeKMForAMonth}</td><td>${car.pricePerExtraKM}</td><td>${car.completeKm}</td><td>${car.color}</td><td>${car.availability}</td></tr>`;
                $('#tblCars').append(row);
            }
            bindCarTableClickEvents();
        }
    });
}

function bindCarTableClickEvents() {
    $('#tblCars>tr').click(function () {
        let regNo = $(this).children().eq(0).text();
        let brand = $(this).children().eq(1).text();
        let type = $(this).children().eq(2).text();
        let transmission = $(this).children().eq(3).text();
        let fuel = $(this).children().eq(4).text();
        let passengers = $(this).children().eq(5).text();
        let daily = $(this).children().eq(6).text();
        let monthly = $(this).children().eq(7).text();
        let freeKmforADay = $(this).children().eq(8).text();
        let freeKmforAMonth = $(this).children().eq(9).text();
        let priseForExtraKm = $(this).children().eq(10).text();
        let completeKm = $(this).children().eq(11).text();
        let color = $(this).children().eq(12).text();
        let availability = $(this).children().eq(13).text();

         $('#inputRegisterNo').val(regNo);
         $('#inputBrand').val(brand);
         $('#selectType').find('option:selected').text(type);
         $('#selectTransmissionType').find('option:selected').text(transmission);
         $('#selectFuelType').find('option:selected').text(fuel);
         $('#inputNoOfPassengers').val(passengers);
         $('#inputDailyRate').val(daily);
         $('#inputMonthlyRate').val(monthly);
         $('#inputFreeKmForADay').val(freeKmforADay);
         $('#inputFreeKmForAMonth').val(freeKmforAMonth);
         $('#inputPricePerExtraKm').val(priseForExtraKm);
         $('#inputCompleteKm').val(completeKm);
         $('#inputColour').val(color);
         $('#selectCarAvailability').find('option:selected').text(availability);
    });

}

$("#btnSearchCar").click(function () {
    let registrationNo = $('#inputCarSearch').val();

    $.ajax({
        url: baseUrl + "car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;

            $('#inputRegisterNo').val(car.registrationNumber);
            $('#inputBrand').val(car.brand);
            $('#selectType').find('option:selected').text(car.type);
            $('#selectTransmissionType').find('option:selected').text(car.transmissionType);
            $('#selectFuelType').find('option:selected').text(car.fuelType);
            $('#inputNoOfPassengers').val(car.noOfPassengers);
            $('#inputDailyRate').val(car.dailyRate);
            $('#inputMonthlyRate').val(car.monthlyRate);
            $('#inputFreeKmForADay').val(car.freeKMForADay);
            $('#inputFreeKmForAMonth').val(car.freeKMForAMonth);
            $('#inputPricePerExtraKm').val(car.pricePerExtraKM);
            $('#inputCompleteKm').val(car.completeKm);
            $('#inputColour').val(car.color);
            $('#selectCarAvailability').find('option:selected').text(car.availability);

        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car " + registrationNo + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

$('#btnDeleteCar').click(function () {
    if ($('#inputRegisterNo').val() != "") {
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
                deleteCar();
                clearAddCarFields();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Please Select A Car To Delete",
            showConfirmButton: false,
            timer: 1500
        });
    }
})

function deleteCar() {
    let registrationNo = $('#inputRegisterNo').val();
    $.ajax({
        url: baseUrl + "car?registrationNo=" + registrationNo,
        method: "DELETE",
        success: function (resp) {
            loadAllCars();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Not Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function getAvailableCarCount() {
    let availability = "Available";
    $.ajax({
        url: baseUrl + "car/count/" + availability,
        method: "GET",
        success: function (resp) {
            console.log(resp)
            if (resp.data != 0) {
                if (resp.data < 10) {
                    $('#lblNoOfAvailableCars').text("0" + resp.data);
                } else {
                    $('#lblNoOfAvailableCars').text(resp.data);
                }
            } else {
                $('#lblNoOfAvailableCars').text("00");
            }
        }
    })
}

function getRentedCarCount() {
    let availability = "Not Available";
    $.ajax({
        url: baseUrl + "car/count/" + availability,
        method: "GET",
        success: function (resp) {
            console.log(resp)
            if (resp.data != 0) {
                if (resp.data < 10) {
                    $('#lblNoOfRentedCars').text("0" + resp.data);
                } else {
                    $('#lblNoOfRentedCars').text(resp.data);
                }
            } else {
                $('#lblNoOfRentedCars').text("00");
            }
        }
    })
}

$("#btnRefreshCar").click(function (){
   clearAddCarFields();
});

$("#btnCarSchedule").click(function (){
    let regNo = $('#inputRegisterNo').val();
    let brand = $('#inputBrand').val();
    let color = $('#inputColour').val();

    if (regNo != "") {
        loadCarSchedule(regNo,brand,color);
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Please Select A Car",
            showConfirmButton: false,
            timer: 1500
        });
    }


});

function loadCarSchedule(registrationNumber,brand,color) {
    $("#lblCarRegNo").text(registrationNumber);
    $("#lblCarBrand").text(brand);
    $("#lblCarColor").text(color);

    $('#tblCarSchedule').empty();
    let status = "Accepted";
    $.ajax({
        url:"http://localhost:8080/Spring_Back_End_war/rent/getCarRentSchedules/" + status + "/" + registrationNumber,//ara request eke methanta null gihin ne ekai meke url ek wens krnm sir ehenmok ha sir eka hadanm mn thawa ekama ekak thiynwa anthima eka kiyannada ok rent eke driver change krhama success eken enwa response eka.e unata driver change wela na db eke
        method:"GET",
        success:function (res) {
            for (let carRent of res.data) {
                console.log(carRent);
                let driverId;
                if (carRent.driverID === null) {
                    driverId = "No Driver";
                } else {
                    driverId = carRent.driverID.driverID;
                }
                let row = `<tr><td>${carRent.users.userID}</td><td>${carRent.users.name}</td><td>${carRent.rentID}</td><td>${carRent.rentDate}</td><td>${driverId}</td><td>${carRent.pickUpDate}</td><td>${carRent.pickUpTime}</td><td>${carRent.returnDate}</td><td>${carRent.returnTime}</td></tr>`;
                $('#tblCarSchedule').append(row);
            }
        }
    })
}


//--------------------Car end-------------------------------------------


//--------------------Driver start-------------------------------------------

function generateDriverId() {
    $.ajax({
        url: baseUrl + "driver/generateDriverId",
        method: "GET",
        success: function (res) {
            $('#inputDriverID').val(res.data);
        }
    })
}

$("#btnAddDriver").click(function (){
    saveDriver();
});

function saveDriver() {
    var driverID = $('#inputDriverID').val();
    var name = $('#inputDriverName').val();
    var address = $('#inputDriverAddress').val();
    var contact = $('#inputDriverContactNo').val();
    var nic = $('#inputDriverNIC').val();
    var drivingLicense = $('#inputDriverDrivingLicense').val();
    var username = $('#inputDriverUserName').val();
    var password = $('#inputDriverPassword').val();
    var availability = "Available";

    var driver = {
        driverID: driverID,
        name: name,
        address: address,
        contactNo: contact,
        nic: nic,
        drivingLicense: drivingLicense,
        username: username,
        password: password,
        availability: availability
    }

    $.ajax({
        url: baseUrl + "driver",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (res) {
            getAvailableDriverCount();
            loadAllDrivers();
            clearDriverFields()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Driver Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$('#btnDeleteDriver').click(function () {
    if ($('#inputDriverID').val() != "") {
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
                clearDriverFields();
                generateDriverId();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
})

function deleteDriver() {
    let driverID = $('#inputDriverID').val();
    $.ajax({
        url: baseUrl + "driver?driverID=" + driverID,
        method: "DELETE",
        success: function (resp) {
            getAvailableDriverCount();
            loadAllDrivers();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Driver Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver Not Deleted Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$('#btnUpdateDriver').click(function () {
    updateDriver();
    clearDriverFields();
})

function updateDriver() {

    var driverID = $('#inputDriverID').val();
    var name = $('#inputDriverName').val();
    var address = $('#inputDriverAddress').val();
    var contact = $('#inputDriverContactNo').val();
    var nic = $('#inputDriverNIC').val();
    var drivingLicense = $('#inputDriverDrivingLicense').val();
    var username = $('#inputDriverUserName').val();

    var driver = {
        driverID: driverID,
        name: name,
        address: address,
        contactNo: contact,
        nic: nic,
        drivingLicense: drivingLicense,
        username: username,
    }

    $.ajax({
        url: baseUrl + "driver",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(driver),
        success: function (resp) {
           loadAllDrivers();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Driver Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver Not Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function clearDriverFields() {
     $('#inputDriverID').val("");
     $('#inputDriverName').val("");
     $('#inputDriverAddress').val("");
     $('#inputDriverContactNo').val("");
     $('#inputDriverNIC').val("");
     $('#inputDriverDrivingLicense').val("");
     $('#inputDriverUserName').val("");
     $('#inputDriverPassword').val("");
    $('#inputDriverSearch').val("");

    generateDriverId();
}

function loadAllDrivers() {
    $('#tblDriver').empty();
    $.ajax({
        url: baseUrl + "driver",
        method: "GET",
        success: function (res) {
            console.log(res)
            for (const driver of res.data) {
                let row = `<tr><td>${driver.driverID}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.contactNo}</td><td>${driver.nic}</td><td>${driver.drivingLicense}</td><td>${driver.availability}</td></tr>`;
                $('#tblDriver').append(row);
            }
            bindRegisterDriversClickEvents();
        }
    })
}

function bindRegisterDriversClickEvents() {
    $('#tblDriver>tr').click(function () {
        let driverID = $(this).children().eq(0).text();
        $("#inputDriverPassword").prop("readonly", true);
        findDriver(driverID);
    })
}

$("#btnSearchDriver").click(function (){
    var driverID = $('#inputDriverSearch').val();
    $("#inputDriverPassword").prop("readonly", true);
    findDriver(driverID);
});

function findDriver(driverID) {
    $.ajax({
        url: baseUrl + "driver/" + driverID,
        method: "GET",
        success: function (resp) {
            let driver = resp.data;
            $('#inputDriverID').val(driver.driverID);
            $('#inputDriverName').val(driver.name);
            $('#inputDriverAddress').val(driver.address);
            $('#inputDriverContactNo').val(driver.contactNo);
            $('#inputDriverNIC').val(driver.nic);
            $('#inputDriverDrivingLicense').val(driver.drivingLicense);
            $('#inputDriverUserName').val(driver.username);
            $('#inputDriverPassword').val(driver.password);
            $('#selectDriverAvailability').find('option:selected').text(driver.availability);
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver " + driverID + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function getAvailableDriverCount() {
    let availability = "Available";
    $.ajax({
        url: baseUrl + "driver/count/" + availability,
        method: "GET",
        success: function (res) {
            if (res.data != 0) {
                if (res.data < 10) {
                    $('#lblNoOfAvailableDrivers').text("0" + res.data);
                } else {
                    $('#lblNoOfAvailableDrivers').text(res.data);
                }
            } else {
                $('#lblNoOfAvailableDrivers').text("00");
            }
        }
    })
}

$("#btnRefreshDriver").click(function (){
    clearDriverFields();
});


$("#btnDriverSchedule").click(function (){
    let driverID = $('#inputDriverID').val();
    let name = $('#inputDriverName').val();
    let contactNo = $('#inputDriverContactNo').val();

    loadDriverSchedule(driverID,name,contactNo);
});

function loadDriverSchedule(driverID,name,contactNo) {
    $("#lblDriverID").text(driverID);
    $("#lblDriverName").text(name);
    $("#lblDriverContactNo").text(contactNo);

    $('#tblDriverSchedule').empty();
    let status = "Accepted";
    $.ajax({
        url:"http://localhost:8080/Spring_Back_End_war/rent/getCarRents/" + status + "/" + driverID,
        method:"GET",
        success:function (res) {
            for (let carRent of res.data) {
                let row = `<tr><td>${carRent.users.userID}</td><td>${carRent.users.name}</td><td>${carRent.rentID}</td><td>${carRent.rentDate}</td><td>${carRent.cars.registrationNumber}</td><td>${carRent.pickUpDate}</td><td>${carRent.pickUpTime}</td><td>${carRent.returnDate}</td><td>${carRent.returnTime}</td></tr>`;
                $('#tblDriverSchedule').append(row);
            }
        }
    })
}

//--------------------Driver end-------------------------------------------


//--------------------rent start-------------------------------------------
let oldDriverId = "";

function getRentCount() {
    let status = "Accepted";
    $.ajax({
        url: baseUrl + "rent/count/" + status,
        method: "GET",
        success: function (resp) {
            console.log(resp)
            if (resp.data != 0) {
                if (resp.data < 10) {
                    console.log(resp);
                    $('#lblNoOfRents').text("0" + resp.data);
                } else {
                    $('#lblNoOfRents').text(resp.data);
                }
            } else {
                $('#lblNoOfRents').text("00");
            }
        }
    })
}

function loadAllRents(){
    $('#tblRent').empty();

    $.ajax({
        url: baseUrl + "rent",
        method: "GET",
        success: function (res) {
            console.log(res)
            for (let rent of res.data) {
                let driverId;
                if (rent.driverID === null) {
                    driverId = "No Driver";
                } else {
                    driverId = rent.driverID.driverID;
                    oldDriverId = rent.driverID.driverID;
                }
                let row = `<tr><td>${rent.rentID}</td><td>${rent.rentDate}</td><td>${rent.cars.registrationNumber}</td><td>${rent.users.userID}</td><td>${rent.pickUpDate}</td><td>${rent.pickUpTime}</td><td>${rent.pickUpVenue}</td><td>${rent.returnDate}</td><td>${rent.returnTime}</td><td>${rent.returnVenue}</td><td>${rent.lossDamageWaiver}</td><td>${driverId}</td><td>${rent.status}</td></tr>`;
                $('#tblRent').append(row);
            }
            bindRentClickEvents();
        }
    })
}

function bindRentClickEvents(){
    $('#tblRent>tr').click(function () {
        let rentId = $(this).children().eq(0).text();
        findRent(rentId);
    })
}

function findRent(rentId) {
    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (resp) {
            let rent = resp.data;

            let driverId;
            let driverName;
            if (rent.driverID === null) {
                driverId = "No Driver";
                driverName ="No Driver";
            } else {
                driverId = rent.driverID.driverID;
                driverName = rent.driverID.name
            }


            $('#inputRentID').val(rent.rentID);
            $('#inputRentDate').val(rent.rentDate);
            $('#inputCarRegNo').val(rent.cars.registrationNumber);
            $('#inputUserID').val(rent.users.userID);
            $('#inputNameOfUser').val(rent.users.name);
            $('#inputPickUpDate').val(rent.pickUpDate);
            $('#inputPickUpTime').val(rent.pickUpTime);
            $('#inputPickUpVenue').val(rent.pickUpVenue);
            $('#inputReturnDate').val(rent.returnDate);
            $('#inputReturnTime').val(rent.returnTime);
            $('#inputReturnVenue').val(rent.returnVenue);
            $('#selectDriverID').find('option:selected').text(driverId);
            $('#inputNameOfDriver').val(driverName);
            $('#inputLossDamageWaiver').val(rent.lossDamageWaiver);
            $('#inputRentStatus').val(rent.status);

            searchAndLoadRentBankSlipImgs(rentId);

        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Rent " + rentId + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function searchAndLoadRentBankSlipImgs(rentId) {
    $('#inputImageOfBankSlip').empty();

    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (res) {
            let rent = res.data;
            console.log(rent)
            let bankSlipPath = rent.bankSlip;
            let bankSlipImg = bankSlipPath.split("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages\\Rent")[1];
            let bankSlipImgScr = "../assests/savedImages/Rent" + bankSlipImg;
            console.log(bankSlipImgScr);

            let slipImage = `<img src=${bankSlipImgScr} alt="Bank Slip" style="background-size: cover;width: 100%;height: 100%">`;
            $('#inputImageOfBankSlip').append(slipImage);

        }
    })
}

function loadAllDriverIDsToComboBox(){
    $('#selectDriverID').empty();
    $('#selectDriverID').append(new Option("-Select Driver-"));
    $.ajax({
        url: baseUrl + "driver",
        method: "GET",
        success: function (resp) {
            let i = 0;
            for (let driver of resp.data) {
                console.log(driver.driverID)
                $('#selectDriverID').append(new Option(driver.driverID, i));
                i++;
            }
        }
    });
}

$('#selectDriverID').change(function () {
    let driverID = $('#selectDriverID').find('option:selected').text();
    $.ajax({
        url: baseUrl + "driver/" + driverID,
        method: "GET",
        success: function (res) {
            let driver = res.data;
            $('#inputNameOfDriver').val(driver.name);
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "This Driver Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
})

$("#btnSearchRent").click(function (){
    var rentId = $('#inputRentSearch').val();
    findRent(rentId);
});

$("#btnRefreshRent").click(function (){
    clearRentFields();
});

function clearRentFields(){
    $('#inputRentID').val("");
    $('#inputRentDate').val("");
    $('#inputCarRegNo').val("");
    $('#inputUserID').val("");
    $('#inputNameOfUser').val("");
    $('#inputPickUpDate').val("");
    $('#inputPickUpTime').val("");
    $('#inputPickUpVenue').val("");
    $('#inputReturnDate').val("");
    $('#inputReturnTime').val("");
    $('#inputReturnVenue').val("");
    $('#selectDriverID').empty()
    $('#inputNameOfDriver').val("");
    $('#inputLossDamageWaiver').val("");
    $('#inputRentStatus').val("");
    $('#inputImageOfBankSlip').empty();
    $('#inputRentSearch').val("");
    loadAllDriverIDsToComboBox();
}

$("#btnChangeDriver").click(function (){
    let rentId =  $('#inputRentID').val();
    let driverId = $('#selectDriverID').find('option:selected').text();
     let status =  $('#inputRentStatus').val();

    $.ajax({
        url: baseUrl + "rent/updateRentDriver/" + rentId + "/" + driverId,
        method: "PUT",
        success: function (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Change The Driver Of Rent Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            loadAllRents();
            clearRentFields();
            updateOldDriverStatusAvailable(status,oldDriverId,driverId);
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver Not Changed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
});

function updateOldDriverStatusAvailable(status,oldDriverId,newDriverId) {
    console.log(oldDriverId);
    if (status === "Accepted") {
        $.ajax({
            url: baseUrl + "driver/updateAvailable/" + oldDriverId,
            method: "PUT",
            success: function (res) {
                loadAllDrivers();
                getAvailableDriverCount();
                updateNewDriverStatusAvailable(newDriverId);
            },
            error: function (error){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Driver Availability Not Changed",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

}

function updateNewDriverStatusAvailable(newDriverId){
    $.ajax({
        url: baseUrl + "driver/updateNonAvailable/" + newDriverId,
        method: "PUT",
        success: function (res) {
            loadAllDrivers();
            getAvailableDriverCount();
        },
        error: function (error){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Driver Availability Not Changed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

//--------------------rent end-------------------------------------------


//--------------------payment start-------------------------------------------

function generatePaymentID() {
    $.ajax({
        url: baseUrl + "payment/generatePaymentId",
        method: "GET",
        success: function (res) {
            $('#inputPaymentID').val(res.data);
        }
    })
}

function loadAllPayments(){
    $('#tblPayment').empty();
    $.ajax({
        url: baseUrl + "payment",
        method: "GET",
        success: function (res) {
            console.log(res)
            for (let payment of res.data) {
                let driver;
                if (payment.driverPayment === 0) {
                    driver = "No Driver";
                } else {
                    driver = payment.driverPayment;
                }
                let row = `<tr><td>${payment.paymentID}</td><td>${payment.date}</td><td>${payment.rentID}</td><td>${payment.rentPrice}</td><td>${payment.extraKM}</td><td>${payment.priseForExtraKM}</td><td>${payment.damageCharge}</td><td>${payment.returnLossDamageWaiver}</td><td>${driver}</td><td>${payment.totalPayment}</td></tr>`;
                $('#tblPayment').append(row);
            }
            bindPaymentClickEvents();
        },
        error : function (error){
            console.log("not load")
        }
    })
}

function bindPaymentClickEvents(){
    $('#tblPayment>tr').click(function () {
        let paymentId = $(this).children().eq(0).text();
        let date = $(this).children().eq(1).text();
        let rentId = $(this).children().eq(2).text();
        let rentPrice = $(this).children().eq(3).text();
        let extraKms = $(this).children().eq(4).text();
        let priseForExtraKm = $(this).children().eq(5).text();
        let damageCharge = $(this).children().eq(6).text();
        let returnLossDamW = $(this).children().eq(7).text();
        let driverPayment = $(this).children().eq(8).text();
        let totalPayment = $(this).children().eq(9).text();

        $('#selectRentID').empty();
        $('#inputPaymentID').val(paymentId);
        $('#inputPaymentDate').val(date);
        $('#selectRentID').append(new Option(rentId));
        $('#inputRentPrice').val(rentPrice);
        $('#inputExtraKM').val(extraKms);
        $('#inputPriseForExtraKM').val(priseForExtraKm);
        $('#inputDriverPayment').val(driverPayment);
        $('#inputTotalPayment').val(totalPayment);
        $('#inputDamageCharge').val(damageCharge);
        $('#inputReturnLossDamageWaiver').val(returnLossDamW);

        $('#btnPaymentPayed').prop("disabled",true);
    });
}

function clearPaymentFields(){
    $('#inputPaymentID').val("");
    $('#inputPaymentDate').val("");
    $('#inputRentPrice').val("");
    $('#inputExtraKM').val("");
    $('#inputPriseForExtraKM').val("");
    $('#inputDriverPayment').val("");
    $('#inputTotalPayment').val("");
    $('#inputDamageCharge').val("");
    $('#inputReturnLossDamageWaiver').val("");
    $('#inputPaymentSearch').val("");

    loadAllRentIdsToPaymentComboBox();
    generatePaymentID();

    $('#btnPaymentPayed').prop("disabled",false);
}

$("#btnRefreshPayment").click(function (){
    clearPaymentFields();
})

$("#btnSearchPayment").click(function () {
    let paymentID = $('#inputPaymentSearch').val();

    $.ajax({
        url: baseUrl + "payment/" + paymentID,
        method: "GET",
        success: function (res) {
            let payment = res.data;

            $('#selectRentID').empty();
            $('#inputPaymentID').val(payment.paymentID);
            $('#inputPaymentDate').val(payment.date);
            $('#selectRentID').append(new Option(payment.rentID));
            $('#inputRentPrice').val(payment.rentPrice);
            $('#inputExtraKM').val(payment.extraKM);
            $('#inputPriseForExtraKM').val(payment.priseForExtraKM);
            $('#inputDriverPayment').val(payment.driverPayment);
            $('#inputTotalPayment').val(payment.totalPayment);
            $('#inputDamageCharge').val(payment.damageCharge);
            $('#inputReturnLossDamageWaiver').val(payment.returnLossDamageWaiver);

            $('#btnPaymentPayed').prop("disabled",true);
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Payment " + paymentID + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

$("#inputPaymentDate").val(getToday());

function loadAllRentIdsToPaymentComboBox(){
    $('#selectRentID').empty();
    $('#selectRentID').append(new Option("-Select RentID-"));
    $.ajax({
        url: baseUrl + "rent",
        method: "GET",
        success: function (resp) {
            let i = 0;
            for (let rent of resp.data) {
                $('#selectRentID').append(new Option(rent.rentID, i));
                i++;
            }
        }
    });
}

$('#selectRentID').change(function () {
    let rentID = $('#selectRentID').find('option:selected').text();
    $.ajax({
        url: baseUrl + "rent/" + rentID,
        method: "GET",
        success: function (res) {

            let rent = res.data;
            calculateTotalRentDates(rent);

        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "This Rent Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
})

function calculateTotalRentDates(carRent) {

    var pickupDate = new Date(carRent.pickUpDate);
    var day = new Date(carRent.returnDate)
    var differenceInTime = day.getTime() - pickupDate.getTime();
    var differenceIndays = differenceInTime / (1000 * 3600 * 24);
    console.log("date difference : "+differenceIndays);

    searchCarDailyRate(carRent.cars.registrationNumber, differenceIndays);
}

function searchCarDailyRate(registrationNo, days) {
    $.ajax({
        url: baseUrl + "car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            let dailyRate = car.dailyRate;
            let cost = dailyRate * days;
            console.log("cost : "+cost)
            $('#inputRentPrice').val(cost);
        }
    })
}

$('#inputExtraKM').on('keyup', function (event) {
    if (event.key === "Enter") {
        if ($('#inputExtraKM').val() != "") {
            let extraKMs = $('#inputExtraKM').val();
           calculatePriceForExtraKMs(extraKMs);
        } else {
            $('#inputExtraKM').focus();
        }
    }
})

function calculatePriceForExtraKMs(extraKMs){
    let rentID = $('#selectRentID').find('option:selected').text();
    $.ajax({
        url: baseUrl + "rent/" + rentID,
        method: "GET",
        success: function (res) {
            let rent = res.data;
            let pricePerExtraKM = rent.cars.pricePerExtraKM;
            let costForExtraKMs = extraKMs * pricePerExtraKM;
            $('#inputPriseForExtraKM').val(costForExtraKMs);
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "This Rent Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$('#inputDamageCharge').on('keyup', function (event) {
    if (event.key === "Enter") {
        if ($('#inputDamageCharge').val() != "") {
            let damageCharge = $('#inputDamageCharge').val();
            calculateReturnLossDamageWaiver(damageCharge);
        } else {
            $('#inputDamageCharge').focus();
        }
    }
})

function calculateReturnLossDamageWaiver(damageCharge){
    let rentID = $('#selectRentID').find('option:selected').text();
    $.ajax({
        url: baseUrl + "rent/" + rentID,
        method: "GET",
        success: function (res) {
            let rent = res.data;
            let lossDamageWaiver = rent.lossDamageWaiver;
            let returnLossDamageWaiver = lossDamageWaiver - damageCharge;
            $('#inputReturnLossDamageWaiver').val(returnLossDamageWaiver);
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "This Rent Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$('#inputDriverPayment').on('keyup', function (event) {
    if (event.key === "Enter") {
        if ($('#inputDriverPayment').val() != "") {
            let driverPayment = $('#inputDriverPayment').val();
            calculateTotalPayment(driverPayment);
        } else {
            $('#inputDriverPayment').focus();
        }
    }
})

function calculateTotalPayment(driverCost){
    let rp = $('#inputRentPrice').val();
    let ppekms = $('#inputPriseForExtraKM').val();

    let driverPayment = parseFloat(driverCost);
    let rentPrice = parseFloat(rp);
    let priceForExtraKMs = parseFloat(ppekms);

    let totalPayment = driverPayment + rentPrice + priceForExtraKMs;
    $('#inputTotalPayment').val(totalPayment);
}

$("#btnPaymentPayed").click(function (){
    submitPayment();
});

function submitPayment() {
    let rentId = $('#selectRentID').find('option:selected').text();
    if (rentId != null) {
        searchCarRentForPayment(rentId);
    }
}

function searchCarRentForPayment(rentId) {
    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (res) {
            let carRent = res.data;
            console.log(carRent);
            addPayment(carRent);
        }
    })
}

function addPayment(carRent) {

    let paymentId = $('#inputPaymentID').val();
    let date = getToday().toLocaleString();
    let rentPrice = $('#inputRentPrice').val();
    let extraKMs = $('#inputExtraKM').val();
    let priceForEctraKMs = $('#inputPriseForExtraKM').val();
    let driverPayment = $('#inputDriverPayment').val();
    let totalPayment = $('#inputTotalPayment').val();
    let damageCharge = $('#inputDamageCharge').val();
    let returnLossDamage = $('#inputReturnLossDamageWaiver').val();


    var payment = {
        paymentID: paymentId,
        date: date,
        damageCharge: damageCharge,
        returnLossDamageWaiver: returnLossDamage,
        rentPrice: rentPrice,
        extraKM: extraKMs,
        priseForExtraKM: priceForEctraKMs,
        driverPayment: driverPayment,
        totalPayment: totalPayment,
        rentID: carRent,
    }

    $.ajax({
        url: baseUrl + "payment",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(payment),
        success: function (res) {
            console.log("Success");
            generatePaymentID();
            updateCarRentFinished(carRent.rentID);
            updateCStatus(carRent.cars.registrationNumber);
            if (carRent.driverID != null) {
                updateDStatus(carRent.driverID.driverID);
            }
            loadAllPayments();
            clearPaymentFields();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Payment Saved To The System Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error){
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

function updateCarRentFinished(rentId) {
    let status = "Finished";

    $.ajax({
        url: baseUrl + "rent/" + rentId + "/" + status,
        method: "PUT",
        success: function (res) {
            console.log("rent status updated");
            loadAllRents();
            loadTodayRents()
        },
        error: function (error){
            console.log("rent status not updated");
        }
    })
}

function updateCStatus(registrationNumber) {
    let availability = "Available";

    $.ajax({
        url: baseUrl + "car/updateCarAvailability/" + registrationNumber + "/" + availability,
        method: "PUT",
        success: function (res) {
            getAvailableCarCount();
            getRentedCarCount();
            loadAllCars();
        }
    })
}

function updateDStatus(driverID) {

    $.ajax({
        url: baseUrl + "driver/updateAvailable/" + driverID,
        method: "PUT",
        success: function (res) {
            getAvailableDriverCount();
            loadAllDrivers();
        }
    })
}


//--------------------payment end-------------------------------------------



//--------------------requests start-------------------------------------------

function loadPendingRentals() {
    let status = "Pending";

    $('#tblRentReqTable').empty();
    $.ajax({
        url: baseUrl + "rent/get/" + status,
        method: "GET",
        success: function (res) {
            for (const carRent of res.data) {
                let driverId;
                if (carRent.driverID === null) {
                    driverId = "No Driver";
                } else {
                    driverId = carRent.driverID.driverID;
                }
                let row = `<tr><td>${carRent.rentID}</td><td>${carRent.rentDate}</td><td>${carRent.cars.registrationNumber}</td><td>${carRent.users.userID}</td><td>${carRent.pickUpDate}</td><td>${carRent.pickUpTime}</td><td>${carRent.pickUpVenue}</td><td>${carRent.returnDate}</td><td>${carRent.returnTime}</td><td>${carRent.returnVenue}</td><td>${carRent.lossDamageWaiver}</td><td>${driverId}</td><td>${carRent.status}</td></tr>`;
                $('#tblRentReqTable').append(row);
            }
            bindRentalRequestTableClickEvents();
        }
    })
}

function bindRentalRequestTableClickEvents(){
    $('#tblRentReqTable>tr').click(function () {
        let rentId = $(this).children().eq(0).text();
        findRentReq(rentId);
    })
}

function findRentReq(rentId) {
    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (resp) {
            let rent = resp.data;

            let driverId;
            let driverName;
            if (rent.driverID === null) {
                driverId = "No Driver";
                driverName ="No Driver";
            } else {
                driverId = rent.driverID.driverID;
                driverName = rent.driverID.name
            }

            $('#inputReqRentID').val(rent.rentID);
            $('#inputReqRentDate').val(rent.rentDate);
            $('#inputReqCarRegNo').val(rent.cars.registrationNumber);
            $('#inputReqUserID').val(rent.users.userID);
            $('#inputReqNameOfUser').val(rent.users.name);
            $('#inputReqPickUpDate').val(rent.pickUpDate);
            $('#inputReqPickUpTime').val(rent.pickUpTime);
            $('#inputReqPickUpVenue').val(rent.pickUpVenue);
            $('#inputReqReturnDate').val(rent.returnDate);
            $('#inputReqReturnTime').val(rent.returnTime);
            $('#inputReqReturnVenue').val(rent.returnVenue);
            $('#inputReqDriverID').val(driverId);
            $('#inputReqNameOfDriver').val(driverName);
            $('#inputReqLossDamageWaiver').val(rent.lossDamageWaiver);
            $('#inputReqRentStatus').val(rent.status);

            searchAndLoadRentReqBankSlipImgs(rentId);

        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Rent " + rentId + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function searchAndLoadRentReqBankSlipImgs(rentId) {
    $('#inputReqImageOfBankSlip').empty();

    $.ajax({
        url: baseUrl + "rent/" + rentId,
        method: "GET",
        success: function (res) {
            let rent = res.data;
            console.log(rent)
            let bankSlipPath = rent.bankSlip;
            let bankSlipImg = bankSlipPath.split("E:\\Working Directory\\works\\GitUplode\\Car Rental System\\Car_Rental_System_With_SpringWebMVC\\Spring_Front_End\\assests\\savedImages\\Rent")[1];
            let bankSlipImgScr = "../assests/savedImages/Rent" + bankSlipImg;
            console.log(bankSlipImgScr);

            let slipImage = `<img src=${bankSlipImgScr} alt="Bank Slip" style="background-size: cover;width: 100%;height: 100%">`;
            $('#inputReqImageOfBankSlip').append(slipImage);

        }
    })
}

$("#btnSearchRentReq").click(function (){
    var rentId = $('#inputRentReqSearch').val();
    findRentReq(rentId);
});

$("#btnRentReqAccept").click(function (){
    if ($('#inputReqRentID').val() != "") {
        acceptRental();
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: "Please Select Car Rent from Table",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

function acceptRental() {
    let rentId = $('#inputReqRentID').val();
    let status = "Accepted";

    $.ajax({
        url: baseUrl + "rent/" + rentId + "/" + status,
        method: "PUT",
        success: function (res) {
            loadAllRents();
            loadPendingRentals();
            loadTodayRents();
            updateDriverStatus();
            updateCarStatus();
            clearRentRequestFields();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Rental Accepted Successfully",
                timer: 1500
            });
        },
        error: function (ob) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Rental Not Accepted",
                timer: 1500
            });

        }
    })
}

function updateCarStatus() {
    let registrationNo = $('#inputReqCarRegNo').val();
    let status = "Not Available";

    $.ajax({
        url: baseUrl + "car/updateCarAvailability/" + registrationNo + "/" + status,
        method: "PUT",
        success: function (res) {
            loadAllCars();
            getAvailableCarCount();
            getRentCount();
        }

    })
}

function updateDriverStatus() {
    let driverID = $('#inputReqDriverID').val();

    if (driverID != "No Driver") {
        $.ajax({
            url: baseUrl + "driver/updateNonAvailable/" + driverID,
            method: "PUT",
            success: function (res) {
                loadAllDrivers();
                getAvailableDriverCount();
            }
        })
    }
}

function clearRentRequestFields(){
    $('#inputReqRentID').val("");
    $('#inputReqRentDate').val("");
    $('#inputReqCarRegNo').val("");
    $('#inputReqUserID').val("");
    $('#inputReqNameOfUser').val("");
    $('#inputReqPickUpDate').val("");
    $('#inputReqPickUpTime').val("");
    $('#inputReqPickUpVenue').val("");
    $('#inputReqReturnDate').val("");
    $('#inputReqReturnTime').val("");
    $('#inputReqReturnVenue').val("");
    $('#inputReqDriverID').val("");
    $('#inputReqNameOfDriver').val("");
    $('#inputReqLossDamageWaiver').val("");
    $('#inputReqRentStatus').val("");
    $('#inputReqImageOfBankSlip').empty();
    $('#inputRentReqSearch').val("");
    $('#inputReqReasonDeny').val("");

}

$('#btnRentReqDeny').click(function () {

    if ($('#inputReqRentID').val() != "" && $('#inputReqReasonDeny').val() != "") {
        let rentId = $('#inputReqRentID').val();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny!'
        }).then((result) => {
            if (result.isConfirmed) {
                rejectRentals(rentId);
                Swal.fire(
                    'Deny!',
                    'Request has been Denied.',
                    'success'
                )
            }
        })

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: "Please Select Car Rent from Table Or Send Reason To Deny Request",
            showConfirmButton: false,
            timer: 1500
        });
    }
})

function rejectRentals(rentId) {
    $.ajax({
        url: baseUrl + "rent?rentId=" + rentId,
        method: "DELETE",
        success: function (res) {
            loadAllRents();
            loadPendingRentals();
            loadTodayRents()
            clearRentRequestFields();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Rental Deny",
                timer: 1500
            });

        },
        error: function (ob) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Rental Not Deny",
                timer: 1500
            });
        }
    })
}

$("#btnRefreshRentRequest").click(function (){
    clearRentRequestFields();
});

//--------------------requests end-------------------------------------------


//-----------------------------incomes start-----------------------------

function loadAllDailyIncomes() {
    $('#tblDailyIncome').empty();
    $.ajax({
        url: baseUrl + "payment/dailyIncome",
        method: "GET",
        success: function (res) {
            for (const income of res.data) {
                console.log(income);
                let row = `<tr><td>${income.rentPrice}</td><td>${income.totalPayment}</td></tr>`;
                $('#tblDailyIncome').append(row);
            }
        }
    })
}

function loadAllWeeklyIncomes() {
    $('#tblWeeklyIncome').empty();
    $.ajax({
        url: baseUrl + "payment/weeklyIncome",
        method: "GET",
        success: function (res) {
            for (const income of res.data) {
                console.log(income);
                let row = `<tr><td>${income.rentPrice}</td><td>${income.totalPayment}</td></tr>`;
                $('#tblWeeklyIncome').append(row);
            }
        }
    })
}

function loadAllMonthlyIncomes() {
    $('#tblMonthlyIncome').empty();
    $.ajax({
        url: baseUrl + "payment/monthlyIncome",
        method: "GET",
        success: function (res) {
            for (const income of res.data) {
                console.log(income);
                let row = `<tr><td>${income.paymentID}</td><td>${income.totalPayment}</td></tr>`;
                $('#tblMonthlyIncome').append(row);
            }
        }
    })
}

function loadAllAnnuallyIncomes() {
    $('#tblAnnuallyIncome').empty();
    $.ajax({
        url: baseUrl + "payment/yearlyIncome",
        method: "GET",
        success: function (res) {
            for (const income of res.data) {
                console.log(income);
                let row = `<tr><td>${income.rentPrice}</td><td>${income.totalPayment}</td></tr>`;
                $('#tblAnnuallyIncome').append(row);
            }
        }
    })
}

//-----------------------------incomes end-----------------------------


//--------------------Maintain start-------------------------------------------
//----------validation----------------

$('#inputMaintainDescription').on('keyup', function () {
    checkInputMaintainDescription();
})

function checkInputMaintainDescription() {
    var desc = $('#inputMaintainDescription').val();
    if (patternDescription.test(desc)) {
        $("#inputMaintainDescription").css('border', '2px solid green');
        $("#btnAddMaintain").prop('disabled', false)
        return true;
    } else {
        $("#inputMaintainDescription").css('border', '2px solid red');
        $("#btnAddMaintain").prop('disabled', true)
        return false;
    }
}

//--------------------------------------

function generateMaintenanceId() {
    $.ajax({
        url: baseUrl + "maintain/generateMaintenanceId",
        method: "GET",
        success: function (res) {
            $('#inputMaintainID').val(res.data);
        }
    })
}

function loadAllCarRegNosToComboBox(){
    $('#selectMaintainCarRNo').empty();
    $('#selectMaintainCarRNo').append(new Option("-Select Car-", ""));
    $.ajax({
        url: baseUrl + "car",
        method: "GET",
        success: function (resp) {
            let i = 0;
            for (let regNo of resp.data) {
                $('#selectMaintainCarRNo').append(new Option(regNo.registrationNumber, i));
                i++;
            }
        }
    });
}

$('#selectMaintainCarRNo').change(function () {
    let registrationNo = $('#selectMaintainCarRNo').find('option:selected').text();
    $.ajax({
        url: baseUrl + "car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            if (car.availability === "Available"){
                $("#inputMaintainDescription").focus();
            }else if (car.availability === "Under Maintenance"){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: "This Car is Already in Maintains at This Moment",
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#selectMaintainCarRNo").focus();
            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "This Car is Not Available at This Moment",
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#selectMaintainCarRNo").focus();
            }
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "This Car Is Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
})

$("#btnAddMaintain").click(function (){
    let des = $('#inputMaintainDescription').val();
    if ( $('#inputMaintainDescription').val() != "" && patternDescription.test(des)){
        addMaintenances();
    }else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: "Add Description",
            showConfirmButton: false,
            timer: 1500
        });
    }

});

function addMaintenances(){
    let maintenanceId = $('#inputMaintainID').val();
    let registrationNo = $('#selectMaintainCarRNo').find('option:selected').text();
    let description = $('#inputMaintainDescription').val();
    let maintainStatus = $('#selectMaintainStatus').find('option:selected').text();

    console.log(maintenanceId)
    var maintenance = {
        maintainID: maintenanceId,
        registrationNumber: registrationNo,
        description: description,
        status: maintainStatus,
    }

    $.ajax({
        url: baseUrl + "maintain",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(maintenance),
        success: function (resp) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Maintenances Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            updateCarStatusInMaintain(registrationNo)
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Maintenances Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function updateCarStatusInMaintain(registrationNo) {
    let status = "Under Maintenance";
    $.ajax({
        url: baseUrl + "car/updateCarAvailability/" + registrationNo + "/" + status,
        method: "PUT",
        success: function (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Added To Maintenances Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            loadAllCars();
            getAvailableCarCount();
            loadAllMaintenances();
            generateMaintenanceId();
            clearMaintenanceFields();
            getUnderMaintenanceCarCount();

        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Update Car Availability Unsuccessfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$("#btnRemoveMaintain").click(function (){
    removeMaintenances();
})

function removeMaintenances(){
    let maintenanceId = $('#inputMaintainID').val();
    let status = "Done Maintenance";
    $.ajax({
        url: baseUrl + "maintain/updateMaintenanceStatus/" + maintenanceId + "/" + status,
        method: "PUT",
        success: function (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Complete Maintenances of Car",
                showConfirmButton: false,
                timer: 1500
            });
            updateCarStatusToAvailableDoneMaintain()
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Remover Car From Maintenances Unsuccessfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function updateCarStatusToAvailableDoneMaintain(){
    let registrationNo = $('#selectMaintainCarRNo').find('option:selected').text();
    let status = "Available";
    $.ajax({
        url: baseUrl + "car/updateCarAvailability/" + registrationNo + "/" + status,
        method: "PUT",
        success: function (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Car Available Now",
                showConfirmButton: false,
                timer: 1500
            });
            loadAllCars();
            getAvailableCarCount();
            loadAllMaintenances();
            clearMaintenanceFields();
            loadAllCarRegNosToComboBox()
            getUnderMaintenanceCarCount();

        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Car Not Available Yet From Maintenances",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function clearMaintenanceFields(){
     $('#inputMaintainDescription').val("");
     $('#inputMaintainSearch').val("");

    generateMaintenanceId();
}

function loadAllMaintenances(){
    $('#tblMaintain').empty();

    $.ajax({
        url: baseUrl + "maintain",
        method: "GET",
        success: function (res) {
            console.log(res)
            for (let maintenance of res.data) {
                let row = `<tr><td>${maintenance.maintainID}</td><td>${maintenance.registrationNumber}</td><td>${maintenance.description}</td><td>${maintenance.status}</td></tr>`;
                $('#tblMaintain').append(row);
            }
            bindMaintenancesClickEvents();
        }
    })
}

function bindMaintenancesClickEvents() {
    $('#tblMaintain>tr').click(function () {
        let maintaiId = $(this).children().eq(0).text();
        let carRegistrationNo = $(this).children().eq(1).text();
        let desc = $(this).children().eq(2).text();
        let status = $(this).children().eq(3).text();

         $('#selectMaintainCarRNo').empty();
         $('#inputMaintainID').val(maintaiId);
         $('#selectMaintainCarRNo').append(new Option(carRegistrationNo));
         $('#inputMaintainDescription').val(desc);
         $('#selectMaintainStatus').find('option:selected').text(status);

    })
}

$("#btnRefresh").click(function (){
    loadAllCarRegNosToComboBox();
    clearMaintenanceFields();
});

$("#btnSearchMaintain").click(function (){
    let maintainID = $('#inputMaintainSearch').val();

    $.ajax({
        url: baseUrl + "maintain/" + maintainID,
        method: "GET",
        success: function (res) {
            let maintain = res.data;
            $('#selectMaintainCarRNo').empty();
            $('#inputMaintainID').val(maintain.maintainID);
            $('#selectMaintainCarRNo').append(new Option(maintain.registrationNumber));
            $('#inputMaintainDescription').val(maintain.description);
            $('#selectMaintainStatus').find('option:selected').text(maintain.status);

        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Maintain " + maintainID + " Not Exist...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

function getUnderMaintenanceCarCount() {
    let availability = "Under Maintenance";
    $.ajax({
        url: baseUrl + "car/count/" + availability,
        method: "GET",
        success: function (resp) {
            console.log(resp)
            if (resp.data != 0) {
                if (resp.data < 10) {
                    $('#lblNoOfMaintainCars').text("0" + resp.data);
                } else {
                    $('#lblNoOfMaintainCars').text(resp.data);
                }
            } else {
                $('#lblNoOfMaintainCars').text("00");
            }
        }
    })
}

//--------------------Maintain end-------------------------------------------
