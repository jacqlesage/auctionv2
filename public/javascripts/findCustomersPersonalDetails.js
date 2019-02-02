




$(document).ready(function() {
    var emailFromDashboard = document.getElementById("emailFromDashboard").value;

    var lname = document.getElementById("lastNameDashboard");

    var phone = document.getElementById("phone");

    var password = document.getElementById("pwd");

    $("#myPersonalDetailsClick").click(function(){

    var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard);
    $.ajax({
        url: r.url, type: r.type, dataType: "JSON",
        success: (function (data) {

            console.log(data);



            if(data.phoneNumber == null ) {
                //only need to update phone here as the rest of the details are puled from session...humm....
                phone.value = "Please update";
            }else{
                phone.value = data.phoneNumber;
            }

            if(data.lastName != null){
                lname.value = data.lastName;
            }else{
                lname.value = "Please update";
            }

        }),

        error: (function (data) {
            alert("Try again champ!");
        })
    })
})
});
//
//     $("#details").click(function(){
//         var emailFromDashboard = document.getElementById("emailFromDashboard").value;
//         console.log(emailFromDashboard.toString());
//         alert(emailFromDashboard.toString());
//         $.ajax(jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard))
//             .done(function (data) {
//                 alert(data);
//                 console.log("this is a console log " + data.toString());
//                 console.log("this is a console log " + data);
//                 var addressLine1 = document.getElementById("address1");
//                 var addressLine2 = document.getElementById("address2");
//                 var city = document.getElementById("city");
//                 var country = document.getElementById("country");
//                 var postCode = document.getElementById("postCode");
//
//
//             }).fail(function (data) {
//             alert("Try again champ!");
//         });
//     });
// });
// var emailFromDom = document.getElementById("emailFromDashboard");
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