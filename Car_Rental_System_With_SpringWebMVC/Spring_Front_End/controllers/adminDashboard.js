
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

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

generateMaintenanceId();
loadAllCarRegNosToComboBox();
loadAllMaintenances();
getUnderMaintenanceCarCount();

loadAllRents();
loadAllDriverIDsToComboBox();
getRentCount();



loadPendingRentals();

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
                if (booking.driver === null) {
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

$("#btnAddCar").click(function (){
    addCar();
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
                icon: 'success',
                title: "User Not Added Successfully",
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
                icon: 'success',
                title: "Car Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

$("#btnUpdateCarImages").click(function (){
    let regNo = $('#inputRegisterNo').val();
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
                icon: 'success',
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
                icon: 'success',
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
                icon: 'success',
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

//==========================================driver schedule button eka hadanna===============================================
$("#btnDriverSchedule").click(function (){

});

//--------------------Driver end-------------------------------------------


//--------------------rent start-------------------------------------------

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
                let row = `<tr><td>${rent.rentID}</td><td>${rent.rentDate}</td><td>${rent.cars.registrationNumber}</td><td>${rent.users.userID}</td><td>${rent.pickUpDate}</td><td>${rent.pickUpTime}</td><td>${rent.pickUpVenue}</td><td>${rent.returnDate}</td><td>${rent.returnTime}</td><td>${rent.returnVenue}</td><td>${rent.lossDamageWaiver}</td><td>${rent.driverID.driverID}</td><td>${rent.status}</td></tr>`;
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
            $('#selectDriverID').find('option:selected').text(rent.driverID.driverID);
            $('#inputNameOfDriver').val(rent.driverID.name);
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

//===============================change driver wada krnne na==================================================================

// $("#btnChangeDriver").click(function (){
//    // let userId = $('#inputUserID').val();
//    // searchUserById(userId);
//
//     let rentId =  $('#inputRentID').val();
//     let driverId = $('#selectDriverID').find('option:selected').text();
//
//     $.ajax({
//         url: baseUrl + "rent/updateRentDriver/" + rentId + "/" + driverId,
//         method: "PUT",
//         success: function (res) {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: "Change The Driver Of Rent Successfully",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//             loadAllRents();
//             clearRentFields();
//         },
//         error: function (error) {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'error',
//                 title: "Driver Not Changed",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         }
//     })
// });

// function searchUserById(userId) {
//     $.ajax({
//         url: baseUrl + "user/" + userId,
//         method: "GET",
//         success: function (res) {
//             let user = res.data;
//             searchCarByRegNo(user);
//         }
//     });
// }
//
// function searchCarByRegNo(user) {
//     let registrationNo = $('#inputCarRegNo').val();
//     $.ajax({
//         url: baseUrl + "car/" + registrationNo,
//         method: "GET",
//         success: function (res) {
//             let car = res.data;
//             searchDriverByDriverID(user, car);
//         }
//     })
// }
//
// function searchDriverByDriverID(user, car) {
//
//     let driverID =   $('#selectDriverID').find('option:selected').text();
//         $.ajax({
//             url: baseUrl + "driver/" + driverID,
//             method: "GET",
//             success: function (res) {
//                 let driver = res.data;
//                 console.log(res.data);
//                 updateDriverOfRent(user, car, driver);
//             }
//         })
// }
//
// function updateDriverOfRent(user,car,driver){
//     let rentId = $('#inputRentID').val();
//     let rentDate = $('#inputRentDate').val();
//     let pickupDate = $('#inputPickUpDate').val();
//     let pickupTime = $('#inputPickUpTime').val();
//     let pickupVenue = $('#inputPickUpVenue').val();
//     let returnDate = $('#inputReturnDate').val();
//     let returnTime = $('#inputReturnTime').val();
//     let returnVenue = $('#inputReturnVenue').val();
//     let lossDamWare = $('#inputLossDamageWaiver').val();
//     let status =  $('#inputRentStatus').val();
//
//     var rent = {
//         rentID: rentId,
//         rentDate: rentDate,
//         pickUpDate: pickupDate,
//         pickUpTime: pickupTime,
//         pickUpVenue: pickupVenue,
//         returnDate: returnDate,
//         returnTime: returnTime,
//         returnVenue: returnVenue,
//         lossDamageWaiver: lossDamWare,
//         status:status,
//         users: user[0],
//         cars: car,
//         driverID: driver
//     }
//     $.ajax({
//         url: baseUrl + "rent",
//         method: "PUT",
//         contentType: "application/json",
//         data: JSON.stringify(rent),
//         success: function (resp) {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: "Driver Changed Successfully",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         },
//         error: function (error) {
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'error',
//                 title: "Driver Not Changed",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         }
//     })
// }


//--------------------rent end-------------------------------------------




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
                if (carRent.driver === null) {
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
            $('#inputReqDriverID').val(rent.driverID.driverID);
            $('#inputReqNameOfDriver').val(rent.driverID.name);
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
            swal({
                title: "Confirmation!",
                text: "Car Rental Accepted Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });
        },
        error: function (ob) {
            swal({
                title: "Error!",
                text: "Car Rental Not Accepted",
                icon: "error",
                button: "Close",
                timer: 2000
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
            swal({
                title: "Confirmation!",
                text: "Car Rental Deny",
                icon: "success",
                button: "Close",
                timer: 2000
            });
        },
        error: function (ob) {
            swal({
                title: "Error!",
                text: "Car Rental Not Deny",
                icon: "error",
                button: "Close",
                timer: 2000
            });
        }
    })
}

$("#btnRefreshRentRequest").click(function (){
    clearRentRequestFields();
});


//--------------------requests end-------------------------------------------


















//--------------------Maintain start-------------------------------------------

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
    addMaintenances();
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

