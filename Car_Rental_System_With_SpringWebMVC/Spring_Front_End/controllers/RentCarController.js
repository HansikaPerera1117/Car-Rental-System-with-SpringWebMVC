
let baseURL = "http://localhost:8080/Spring_Back_End_war/";

generateRentId();
setDates();

function generateRentId() {
    $.ajax({
        url: baseUrl + "rent/generateRentId",
        method: "GET",
        success: function (res) {
            console.log(res)
            $('#inputRentID').text(res.data);
        }
    })
}

function setDates() {
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    $("#inputRentDate").text("Date : "+current_date);

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

//====================error================================
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
                $('#carColour').append(new Option(regNo.color +" - "+regNo.registrationNumber, i));
                i++;
            }
        }
    })


}

function clearRentalFields() {
    $('#inputCraID').val("");
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
    $('#inputDriverName').val("");
    $('#inputDriverContactNo').val("");

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
        url: baseUrl + "driver/getRandomDriver",
        method: "GET",
        success: function (res) {
            for (let driver of res.data) {
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
    $('#inputDriverName').val("");
    $('#inputDriverContactNo').val("");
}

