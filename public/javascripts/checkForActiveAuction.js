
$(function() {

        alert("test25#");

        var r =  jsRoutes.controllers.JsController.findActiveAuction();

        $.ajax({
            url: r.url, type: r.type, dataType: "JSON",
            success: (function (data) {

                console.log(data.id.toString() + " success from getActive");
                console.log(" " + JSON.stringify(data) +" success from getActive");
                //document.getElementById("auctionMainPicture").value = data.toString();


            }),

            error: (function (data) {

                console.log(data.toString() + " " + JSON.stringify(data) +" NON success from getActive");

            })
        });

});
// $.ready(function() {
//     alert("testingFindAuction%%%");
// $.ajax(jsRoutes.controllers.JsController.findActiveAuction())
//     .done( alert("TestSuccess") )
//     .fail( alert("TestFail"));
// });

// var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromDashboard);
// $.ajax({
//     url: r.url, type: r.type, dataType: "JSON",
//     success: (function (data) {
//
//         console.log(data);
//
//         if(data.address1 == null) {
//             addressLine1.value = "Please update";
//             addressLine2.value = "Please update";
//             //phone.value = "Please update";
//             city.value = "Please update";
//             country.value = "Please update";
//             postCode.value = "Please update";
//
//         }else{
//             addressLine1.value = data.address1;
//             addressLine2.value = data.address2;
//             city.value = data.city;
//             //phone.value = data.phone;
//             country.value = data.country;
//             postCode.value = data.postCode;
//         }
//     }),
//
//     error: (function (data) {
//         alert("Try again champ!");
//     })
// })
// })
// });