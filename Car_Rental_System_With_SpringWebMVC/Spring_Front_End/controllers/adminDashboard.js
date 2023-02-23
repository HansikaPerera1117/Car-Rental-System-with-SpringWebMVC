
$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

setDates();
loadAllUsers();

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

function setDates() {
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var current_time = date.getHours()+":"+date.getMinutes();

    $("#lblDate").text("Date : "+current_date);
    $("#lblTime").text("Time : "+current_time);
}


//--------------------customer start-------------------------------------------

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
}

//--------------------customer end-------------------------------------------