
let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

generateRentId();
setDates();
setCarRegisterNoAndColoursToComboBox();

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

function setCarRegisterNoAndColoursToComboBox(){
    let type = $("#CarType").text();
    clearRentalFields();
    $('#carColour').empty();
    $('#carColour').append(new Option("-Select Car Colour-", ""));
    $.ajax({
        url: baseUrl + "car/getRegNo/" + type,
        method: "GET",
        success: function (res) {
            console.log(res);
            let i = 0;
            for (let regNo of res.data) {
                $('#carColour').append(new Option(regNo.color +" - "+regNo.registrationNumber, i));
                i++;
            }
        }
    })
}

function clearRentalFields() {
    $('#inputCraID').val("");
    $('#inputId').val("");
    $('#inputName').val("");
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