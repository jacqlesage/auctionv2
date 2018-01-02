




$(document).ready(function(){


    $("#details").click(function(){
        var emailFromDashboard = document.getElementById("emailFromDashboard").value;
        console.log(emailFromDashboard.toString());
        alert(emailFromDashboard.toString());
        $.ajax(jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard))
            .done(function (data) {
                alert(data);
                console.log("this is a console log " + data);
                console.log("this is a console log " + data);
                var addressLine1 = document.getElementById("address1");
                var addressLine2 = document.getElementById("address2");
                var city = document.getElementById("city");
                var country = document.getElementById("country");
                var postCode = document.getElementById("postCode");


            }).fail(function (data) {
            alert("Try again champ!");
        });
    });
});
var emailFromDom = document.getElementById("emailFromDashboard");
//
// $('#details').click(function(){
//     alert("test");
//     $.ajax(jsRoutes.controllers.JsController.getUserAddressDetails())
//         .done(function (data) {
//             alert(data);
//             console.log("this is a console log " + data)
//             console.log("this is a console log " + data)
//             var addressLine1 = document.getElementById("address1");
//             var addressLine2 = document.getElementById("address2");
//             var city = document.getElementById("city");
//             var country = document.getElementById("country");
//             var postCode = document.getElementById("postCode");
//
//
//         }).fail(function (data) {
//         alert("Try again champ!");
//     });
// }