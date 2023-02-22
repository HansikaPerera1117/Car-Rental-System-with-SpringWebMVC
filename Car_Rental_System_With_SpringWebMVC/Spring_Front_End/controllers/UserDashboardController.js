

let baseUrl = "http://localhost:8080/Spring_Back_End_war/";

getLastLoginUser();

function getLastLoginUser() {
    $.ajax({
        url: "login/getLastLogin",
        method: "GET",
        success: function (res) {
            let login = res.data;
            console.log(login.logInId);
           // getAllUserData(login.username, login.password);
        }
    })
}
