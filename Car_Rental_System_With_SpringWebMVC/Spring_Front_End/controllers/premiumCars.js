
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});


let baseUrl = "http://localhost:8080/Spring_Back_End_war/";


generateRentId();
setDates();



$("#all").css('display','block');
$("#NoOfPassengers").css('display','none');
$("#five").css('display','none');
$("#transmissionType").css('display','none');
$("#manual").css('display','none');
$("#auto").css('display','none');
$("#brand").css('display','none');
$("#toyota").css('display','none');
$("#perodua").css('display','none');
$("#price").css('display','none');
$("#fuel").css('display','none');
$("#petrol").css('display','none');
$("#diesel").css('display','none');
$("#rowNoOfPassengers").css('display','none');
$("#rowTransmissionType").css('display','none');
$("#rowBrand").css('display','none');
$("#rowFuelType").css('display','none');
$("#cars").css('display','none');


$("#navAll").click(function (){
    $("#all").css('display','block');
    $("#NoOfPassengers").css('display','none');
    $("#five").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#toyota").css('display','none');
    $("#perodua").css('display','none');
    $("#price").css('display','none');
    $("#fuel").css('display','none');
    $("#petrol").css('display','none');
    $("#diesel").css('display','none');
    $("#rowNoOfPassengers").css('display','none');
    $("#rowTransmissionType").css('display','none');
    $("#rowBrand").css('display','none');
    $("#rowFuelType").css('display','none');

    $("#navNoOfPassengers, #navTransmissionType, #navBrand, #navPrice, #navFuel").css("background-color", "black");
    $("#navAll").css("background-color", "#585858");
});

$("#navNoOfPassengers").click(function (){
    $("#all").css('display','none');
    $("#NoOfPassengers").css('display','block');
    $("#five").css('display','block');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#toyota").css('display','none');
    $("#perodua").css('display','none');
    $("#price").css('display','none');
    $("#fuel").css('display','none');
    $("#petrol").css('display','none');
    $("#diesel").css('display','none');
    $("#rowNoOfPassengers").css('display','block');
    $("#rowTransmissionType").css('display','none');
    $("#rowBrand").css('display','none');
    $("#rowFuelType").css('display','none');

    $("#navAll,#navTransmissionType, #navBrand, #navPrice, #navFuel").css("background-color", "black");
    $("#navNoOfPassengers").css("background-color", "#585858");
});

$("#navTransmissionType").click(function (){
    $("#all").css('display','none');
    $("#NoOfPassengers").css('display','none');
    $("#five").css('display','none');
    $("#transmissionType").css('display','block');
    $("#manual").css('display','block');
    $("#auto").css('display','block');
    $("#brand").css('display','none');
    $("#toyota").css('display','none');
    $("#perodua").css('display','none');
    $("#price").css('display','none');
    $("#fuel").css('display','none');
    $("#petrol").css('display','none');
    $("#diesel").css('display','none');
    $("#rowNoOfPassengers").css('display','none');
    $("#rowTransmissionType").css('display','block');
    $("#rowBrand").css('display','none');
    $("#rowFuelType").css('display','none');

    $("#navAll, #navNoOfPassengers, #navBrand, #navPrice, #navFuel").css("background-color", "black");
    $("#navTransmissionType").css("background-color", "#585858");
});

$("#navBrand").click(function (){
    $("#all").css('display','none');
    $("#NoOfPassengers").css('display','none');
    $("#five").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','block');
    $("#toyota").css('display','block');
    $("#perodua").css('display','block');
    $("#price").css('display','none');
    $("#fuel").css('display','none');
    $("#petrol").css('display','none');
    $("#diesel").css('display','none');
    $("#rowNoOfPassengers").css('display','none');
    $("#rowTransmissionType").css('display','none');
    $("#rowBrand").css('display','block');
    $("#rowFuelType").css('display','none');

    $("#navAll, #navNoOfPassengers, #navTransmissionType, #navPrice, #navFuel").css("background-color", "black");
    $("#navBrand").css("background-color", "#585858");
});

$("#navPrice").click(function (){
    $("#all").css('display','none');
    $("#NoOfPassengers").css('display','none');
    $("#five").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#toyota").css('display','none');
    $("#perodua").css('display','none');
    $("#price").css('display','block');
    $("#fuel").css('display','none');
    $("#petrol").css('display','none');
    $("#diesel").css('display','none');
    $("#rowNoOfPassengers").css('display','none');
    $("#rowTransmissionType").css('display','none');
    $("#rowBrand").css('display','none');
    $("#rowFuelType").css('display','none');

    $("#navAll, #navNoOfPassengers, #navTransmissionType, #navBrand, #navFuel").css("background-color", "black");
    $("#navPrice").css("background-color", "#585858");
});

$("#navFuel").click(function (){
    $("#all").css('display','none');
    $("#NoOfPassengers").css('display','none');
    $("#five").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#toyota").css('display','none');
    $("#perodua").css('display','none');
    $("#price").css('display','none');
    $("#fuel").css('display','block');
    $("#petrol").css('display','block');
    $("#diesel").css('display','block');
    $("#rowNoOfPassengers").css('display','none');
    $("#rowTransmissionType").css('display','none');
    $("#rowBrand").css('display','none');
    $("#rowFuelType").css('display','block');

    $("#navAll, #navNoOfPassengers, #navTransmissionType, #navBrand, #navPrice").css("background-color", "black");
    $("#navFuel").css("background-color", "#585858");
});

$(".ToyotaCorollaAxio").click(function (){
    $("#cars").css('display','block');
    $("#main").css('display','none');
    $("#ToyotaCorollaAxio").css('display','block');
    $("#PeroduaBezzaPrimeSedan").css('display','none');
    $("#ToyotaAllion").css('display','none');
    $("#ToyotaAxio").css('display','none');
});

$(".PeroduaBezzaPrimeSedan").click(function (){
    $("#cars").css('display','block');
    $("#main").css('display','none');
    $("#ToyotaCorollaAxio").css('display','none');
    $("#PeroduaBezzaPrimeSedan").css('display','block');
    $("#ToyotaAllion").css('display','none');
    $("#ToyotaAxio").css('display','none');
});

$(".ToyotaAllion").click(function (){
    $("#cars").css('display','block');
    $("#main").css('display','none');
    $("#ToyotaCorollaAxio").css('display','none');
    $("#PeroduaBezzaPrimeSedan").css('display','none');
    $("#ToyotaAllion").css('display','block');
    $("#ToyotaAxio").css('display','none');
});

$(".ToyotaAxioNKR165").click(function (){
    $("#cars").css('display','block');
    $("#main").css('display','none');
    $("#ToyotaCorollaAxio").css('display','none');
    $("#PeroduaBezzaPrimeSedan").css('display','none');
    $("#ToyotaAllion").css('display','none');
    $("#ToyotaAxio").css('display','block');
});


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