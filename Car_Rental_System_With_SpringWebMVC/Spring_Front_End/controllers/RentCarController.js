
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
    let type = $("#h1CarType").text();

}