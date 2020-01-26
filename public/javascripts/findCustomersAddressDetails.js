




$(document).ready(function() {
    var emailFromDashboard = document.getElementById("emailFromDashboard").value;
    var addressLine1 = document.getElementById("address1");
    var addressLine2 = document.getElementById("address2");
    var city = document.getElementById("city");
    var phone = document.getElementById("phone");
    var country = document.getElementById("country");
    var postCode = document.getElementById("postCode");

    $("#myHomeAddressDetailsClick").click(function(){

   //var r = jsRoutes.controllers.CustomerDatabaseController.getCustomerAddressPhysical("t");


    $.ajax({
        //url: r.url, type: r.type, dataType: "JSON",
        type: "GET",
        dataType: 'json',
        data: emailFromDashboard,
        contentType: "application/json; charset=utf-8",
        url: "/customer/update/address/physical/"+emailFromDashboard,
        success: (function (data) {

            console.log(data);
            
            //if address line 1 is null then we need to insert data

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

