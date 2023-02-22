$(window).on('load',function (){
    $("#loaderPage").fadeOut(1000);
});

let baseURL = "http://localhost:8080/Spring_Back_End_war/";

function generateCustomerId() {
    $.ajax({
        url: baseUrl + "user/generateUserId",
        method: "GET",
        success: function (res) {
            $('#txtId').val(res.data);
        }
    })
}