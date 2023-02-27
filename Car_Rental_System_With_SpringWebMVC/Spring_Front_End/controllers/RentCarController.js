
var baseURL = "http://localhost:8080/Spring_Back_End_war/";

generateRentId();
setDates();

function generateRentId() {
    $.ajax({
        url: baseURL + "rent/generateRentId",
        method: "GET",
        success: function (res) {
            console.log(res)
            $('#inputRentID').text(res.data);
        }
    })
}

function setDates() {
    let date = new Date().toJSON().split("T")[0];
    $("#inputRentDate").text(date);
}

//=================get brand===================================
    //-----------general--------------------------
var lableBrand = "";

$(".SuzukiAlto-PremiumBtn").click(function(){
    lableBrand = $("#Alto").text();
    console.log(lableBrand);
});
$(".SuzukiAltoK10Btn").click(function(){
    lableBrand = $("#AltoK10").text();
    console.log(lableBrand);
});
$(".SuzukiCelerioBtn").click(function(){
    lableBrand = $("#Celerio").text();
    console.log(lableBrand);
});
$(".PeroduaDaihatsuAxiaBtn").click(function(){
    lableBrand = $("#PeroduaAxia").text();
    console.log(lableBrand);
});
$(".ToyotaPriusCBtn").click(function(){
    lableBrand = $("#Aqua").text();
    console.log(lableBrand);
});

//-----------premium--------------------------

$(".ToyotaCorollaAxio").click(function(){
    lableBrand = $("#Corolla").text();
    console.log(lableBrand);
});
$(".PeroduaBezzaPrimeSedan").click(function(){
    lableBrand = $("#PeroduaBezza").text();
    console.log(lableBrand);
});
$(".ToyotaAllion").click(function(){
    lableBrand = $("#Allion").text();
    console.log(lableBrand);
});
$(".ToyotaAxioNKR165").click(function(){
    lableBrand = $("#Axio").text();
    console.log(lableBrand);
});

//-----------luxury--------------------------
$(".ToyotaPremio").click(function(){
    lableBrand = $("#Premio").text();
    console.log(lableBrand);
});
$(".MercedesBenz").click(function(){
    lableBrand = $("#MBenz").text();
    console.log(lableBrand);
});
$(".BMWi8").click(function(){
    lableBrand = $("#i8").text();
    console.log(lableBrand);
});
//================================================================

$(".btnBookCar").click(function (){
    setCarRegisterNoAndColoursToComboBox();
    setDataToRentFormFields();
});

function setCarRegisterNoAndColoursToComboBox(){
    let brand = lableBrand;
    let type = $("#CarType").text();

    clearRentalFields();
    $('#carColour').empty();
    $('#carColour').append(new Option("-Select Car Colour-", ""));
    $.ajax({
        url: baseURL + "car/getRegNo/"  + type + "/" + brand,
        method: "GET",
        success: function (res) {
            console.log(res);
            let i = 0;
            for (let regNo of res.data) {
                console.log(regNo);
                $('#carColour').append(new Option(regNo.color +" : "+regNo.registrationNumber, i));
                i++;
            }
        }
    })

}

$('#carColour').change(function () {
    let colorAndRegNo = $('#carColour').find('option:selected').text();
    let split = colorAndRegNo.split(":");
    let regNo = split[1];
    let registrationNo = regNo.trim();
    console.log(registrationNo)
    $('#inputCraID').text(registrationNo);
})

function clearRentalFields() {
    $('#inputCraID').text("");
    $('#inputId').text("");
    $('#inputUName').text("");
    $('#inputPickUpDate').val("");
    $('#inputPickUpTime').val("");
    $('#inputPickUpVenue').val("");
    $('#inputReturnDate').val("");
    $('#inputReturnTime').val("");
    $('#inputReturnVenue').val("");
    $('#inputBankSlip').val("");
    $('#inputLossDamageWaiver').val("");
    $("#inputDriverID").val("");
    $('#inputDriverName').val("");
    $('#inputDriverContactNo').val("");

    generateRentId();

}

function setDataToRentFormFields(){
    let type = $("#CarType").text();

    if (type === "General"){
        $("#inputLossDamageWaiver").val("10000")
    }else if (type === "Premium"){
        $("#inputLossDamageWaiver").val("15000")
    }else if (type === "Luxury") {
        $("#inputLossDamageWaiver").val("20000")
    }

    let userID = $("#UserID").text();
    let username = $("#UserName").text();

    $('#inputId').text(userID);
    $('#inputUName').text(username);
}

$('#radioWantDriver').click(function () {
    searchRandomDriverForRent();
});

$('#radioDontWantDriver').click(function () {
    clearRentalDriverFields();
});

function searchRandomDriverForRent() {
    $.ajax({
        url: baseURL + "driver/getRandomDriver",
        method: "GET",
        success: function (res) {
            for (let driver of res.data) {
                $("#inputDriverID").val(driver.driverID);
                $('#inputDriverName').val(driver.name);
                $('#inputDriverContactNo').val(driver.contactNo);

            }
        },
        error: function (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Drivers are not available in this time.Please try again shortly",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function clearRentalDriverFields() {
    $("#inputDriverID").val("");
    $('#inputDriverName').val("");
    $('#inputDriverContactNo').val("");
}

$("#btnPlaceBooking").click(function (){
    let regNo = $('#inputCraID').text();
    let color = $('#carColour').find('option:selected').text();

    if (regNo != "" && color !="" && color != "-Select Car Colour-" && $('#inputPickUpDate').val()!="" && $('#inputPickUpTime').val()!="" && $('#inputPickUpVenue').val()!="" && $('#inputReturnDate').val()!="" && $('#inputReturnTime').val()!="" && $('#inputReturnVenue').val()!="" && $('#inputBankSlip').val()!=""){
        let userId = $('#inputId').val();
        searchUserById(userId);
    }else {
        alert("Please fill rental fields");
    }
});

function searchUserById(userId) {
    $.ajax({
        url: baseURL + "user/" + userId,
        method: "GET",
        success: function (res) {
            let user = res.data;
            searchCarByRegNo(user);
        }
    });
}

function searchCarByRegNo(user) {
    let registrationNo = $('#inputCraID').text();
    $.ajax({
        url: baseURL + "car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            searchDriverByDriverID(user, car);
        }
    })
}

function searchDriverByDriverID(user, car) {
    let driverID = $('#inputDriverID').val();
    if ($('#inputDriverID').val() === "") {
        driverID = null;
    }
    if (driverID != null) {
        $.ajax({
            url: baseURL + "driver/" + driverID,
            method: "GET",
            success: function (res) {
                let driver = res.data;
                console.log(res.data);
                addCarRent(user, car, driver);
            }
        })
    } else {
        addCarRent(user, car, null);
    }
}

// =================wade wenwa sweet alert eke aulk==========================================

function addCarRent(user, car, driver) {
    let rentId = $('#inputRentID').text();
    let rentDate = $('#inputRentDate').text();
    let pickupDate = $('#inputPickUpDate').val();
    let pickupTime = $('#inputPickUpTime').val();
    let pickupVenue = $('#inputPickUpVenue').val();
    let returnDate = $('#inputReturnDate').val();
    let returnTime = $('#inputReturnTime').val();
    let returnVenue = $('#inputReturnVenue').val();
    let lossDamWare = $('#inputLossDamageWaiver').val();
    let status = "Pending";

    var rent = {
        rentID: rentId,
        rentDate: rentDate,
        pickUpDate: pickupDate,
        pickUpTime: pickupTime,
        pickUpVenue: pickupVenue,
        returnDate: returnDate,
        returnTime: returnTime,
        returnVenue: returnVenue,
        lossDamageWaiver: lossDamWare,
        status:status,
        users: user[0],
        cars: car,
        driverID: driver
    }

    $.ajax({
        url: baseURL + "rent",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(rent),

        success: function (resp) {

            uploadBankSlip(rentId);
            alert("Rent Placed Successfully");
            location.replace("userDashboard.html");
            Swal.fire({
                icon: 'success',
                title: 'Successful',
                text: 'Rent Placed Successfully'
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Rent Placed Successfully",
                showConfirmButton: false,
                timer: 1500
            });

        },
        error: function (error) {
            alert("Unsuccessfully");
            Swal.fire({
                icon: 'error',
                title: 'Unsuccessful',
                text: 'Rent Placed Unsuccessfully'
            })
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

function uploadBankSlip(rentId) {

    var fileObjectNic1 = $('#inputBankSlip')[0].files[0];
    var fileNameNic1 = rentId + "-bankSlip-" + $('#inputBankSlip')[0].files[0].name;

    var data = new FormData();
    data.append("bankSlip", fileObjectNic1, fileNameNic1);


    $.ajax({
        url: baseURL + "rent/uploadImg/" + rentId,
        method: "PUT",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            console.log("Uploaded");
            alert("BankSip Upload Successfully");
            Swal.fire({
                icon: 'success',
                title: 'Successful',
                text: 'BankSip Upload Successfully'
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "BankSip Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            alert("BankSip did not Uploaded");
            clearRentalFields();
            Swal.fire({
                icon: 'error',
                title: 'Unsuccessful',
                text: 'BankSip did not Uploaded'
            })
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





