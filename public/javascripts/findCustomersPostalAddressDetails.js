




$(document).ready(function() {
    var emailFromDashboard = document.getElementById("emailFromDashboard").value;
    var addressLine1 = document.getElementById("address1Postal");
    var addressLine2 = document.getElementById("address2Postal");
    var city = document.getElementById("cityPostal");
    var phone = document.getElementById("phone");
    var country = document.getElementById("countryPostal");
    var postCode = document.getElementById("postCodePostal");

    $("#myHomeAddressDetailsClick").click(function(){

    var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard);
    $.ajax({
        url: r.url, type: r.type, dataType: "JSON",
        success: (function (data) {

            console.log(data);

            if(data.address1 == null) {
                addressLine1.value = "Please update";
                addressLine2.value = "Please update";
                //phone.value = "Please update";
                city.value = "Please update";
                country.value = "Please update";
                postCode.value = "Please update";

            }else{
                addressLine1.value = data.address1;
                addressLine2.value = data.address2;
                city.value = data.city;
                //phone.value = data.phone;
                country.value = data.country;
                postCode.value = data.postCode;
            }
        }),

        error: (function (data) {
            alert("Try again champ!");
        })
    })
})
});


//load customers address details

$("#updateMyAddressDetails").click(function() {

    alert("update my ADDRESS DETAILS");
    var emailFromDashboard = document.getElementById("customerEmail").value;
    var customerNumberFromDashboard = document.getElementById("customerNumber").value;
    var addressLine1 = document.getElementById("address1").value;
    var addressLine2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var postCode = document.getElementById("postCode").value;

    var text = '{ "addInfo" : [' +
        '{ "email": emailFromDashboard , "cusNum": customerNumberFromDashboard },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    $.ajax(jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard))
            .done(function (data) {
                alert(data);
                console.log("this is a console log " + data.toString());
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