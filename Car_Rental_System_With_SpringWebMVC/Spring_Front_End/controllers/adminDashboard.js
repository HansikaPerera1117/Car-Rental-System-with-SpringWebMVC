
$("#home").css('display','block');
$("#cars").css('display','none');
$("#users").css('display','none');
$("#drivers").css('display','none');
$("#rents").css('display','none');


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

});

$("#menuCars").click(function (){
    $("#menuHome, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuCars").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','block');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');

});

$("#menuUsers").click(function (){
    $("#menuHome, #menuCars, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuUsers").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','block');
    $("#drivers").css('display','none');
    $("#rents").css('display','none');

});

$("#menuDrivers").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuRents, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuDrivers").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','block');
    $("#rents").css('display','none');

});

$("#menuRents").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuPayments, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuRents").css("background-color", "#B7B7B7");

    $("#home").css('display','none');
    $("#cars").css('display','none');
    $("#users").css('display','none');
    $("#drivers").css('display','none');
    $("#rents").css('display','block');
});

$("#menuPayments").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuRequests, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuPayments").css("background-color", "#B7B7B7");
});

$("#menuRequests").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuIncomes, #menuMaintains").css("background-color", "white");
    $("#menuRequests").css("background-color", "#B7B7B7");
});

$("#menuIncomes").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuMaintains").css("background-color", "white");
    $("#menuIncomes").css("background-color", "#B7B7B7");
});

$("#menuMaintains").click(function (){
    $("#menuHome, #menuCars, #menuUsers, #menuDrivers, #menuRents, #menuPayments, #menuRequests, #menuIncomes").css("background-color", "white");
    $("#menuMaintains").css("background-color", "#B7B7B7");
});