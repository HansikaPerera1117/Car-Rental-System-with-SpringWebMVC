$("#all").css('display','block');
$("#NoOfPassengers").css('display','none');
$("#four").css('display','none');
$("#transmissionType").css('display','none');
$("#manual").css('display','none');
$("#auto").css('display','none');
$("#brand").css('display','none');
$("#suzuki").css('display','none');
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
    $("#four").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#suzuki").css('display','none');
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
    $("#four").css('display','block');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#suzuki").css('display','none');
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
    $("#four").css('display','none');
    $("#transmissionType").css('display','block');
    $("#manual").css('display','block');
    $("#auto").css('display','block');
    $("#brand").css('display','none');
    $("#suzuki").css('display','none');
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
    $("#four").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','block');
    $("#suzuki").css('display','block');
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
    $("#four").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#suzuki").css('display','none');
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
    $("#four").css('display','none');
    $("#transmissionType").css('display','none');
    $("#manual").css('display','none');
    $("#auto").css('display','none');
    $("#brand").css('display','none');
    $("#suzuki").css('display','none');
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


$(".SuzukiAlto-PremiumBtn").click(function (){
    $("#SuzukiAlto-Premium").css('display','block');
    $("#cars").css('display','block');
    $("#main").css('display','none');
    $("#SuzukiAltoK10").css('display','none');
});