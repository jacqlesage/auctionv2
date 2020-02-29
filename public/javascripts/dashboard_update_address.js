var initialAddressValue = document.getElementById("address1");
var initialAddress2Value = document.getElementById("address2");
var intialCityValue = document.getElementById("city");
var intialCountryValue = document.getElementById("country");
var intialPostcodeValue = document.getElementById("postCode");
var cusEmail;
var cusNumber;


function getAddressDetails(){//need to get the poastal address details to prefill the address info change ajax method.

    var cusEmail = JSON.stringify(cusEmail);

    alert(cusEmail);

    $.ajax({
        type: "GET",
        dataType: 'json',
        data: cusEmail,
        contentType: "application/json; charset=utf-8",
        url: "/customer/update/address/physical",
        success: function (data) {

            console.log("Success in Ajax call var ");



        },

        error: function (data) {
            console.log(data);
            alert("error in Ajax call " + data.toString());

        }


    })


}


function updateAddress(){

    var id = event.target.id;
    //initialAddressValue = document.getElementById("address1").value;
    console.log("the intial id value is id= " + id);

    switch (id) {
        case "address1":
            initialAddressValue = document.getElementById("address1").value;
            console.log("in address1" + " " + initialAddressValue);
            break;
        case "address2":
            initialAddress2Value = document.getElementById("address2").value;
            console.log("in address2" + " " + initialAddress2Value);
            break;
        case "city":
            intialCityValue = document.getElementById("city").value;
            console.log("in city" + " " + intialCityValue);
            break;
        case "country":
            intialCountryValue = document.getElementById("country").value;
            console.log("in country" + " " + intialCountryValue);
            break;
        case "postCode":
            intialPostcodeValue = document.getElementById("postCode").value;
            console.log("in postcode" + " " + intialPostcodeValue);
            break;

    }

}

$(document).ready(function(){

    cusEmail = document.getElementById("customerEmail").value;
    console.log("cusomter email address is " + cusEmail);
    cusNumber = document.getElementById("customerNumber").value;
    console.log("cusomter number is " + cusNumber);

    document.getElementById("address1").addEventListener("focusin", updateAddress);
    document.getElementById("address2").addEventListener("focusin", updateAddress);
    document.getElementById("city").addEventListener("focusin", updateAddress);
    document.getElementById("country").addEventListener("focusin", updateAddress);
    document.getElementById("postCode").addEventListener("focusin", updateAddress);



});
//to submit postal address changes to the DB. Need to change to postal
function submitUpdatesAddress(){

    var detailsToUpdateObject = {
        updatedAddress1: null,
        updatedAddress2: null,
        updatedCity: null,
        updatedCountry: null,
        updatedPostCode: null,
        email: cusEmail,
        cusNumber: cusNumber
    };

    //compare values to intial values
    address1 = document.getElementById("address1").value;
    address2 = document.getElementById("address2").value;
    city = document.getElementById("city").value;
    country = document.getElementById("country").value;
    postCode = document.getElementById("postCode").value;


    if (address1 != initialAddressValue) {

        detailsToUpdateObject.updatedAddress1 = address1;
    }else{
        detailsToUpdateObject.updatedAddress1 = initialAddressValue
    }

        if (address2 != initialAddress2Value) {

            detailsToUpdateObject.updatedAddress2 = address2;

        }else{
            detailsToUpdateObject.updatedAddress2 = initialAddress2Value;
        }
        if (city != intialCityValue) {

            detailsToUpdateObject.updatedCity = city;

        }else{
            detailsToUpdateObject.updatedCity = intialCityValue;
        }
        if (country != intialCountryValue) {

            detailsToUpdateObject.updatedCountry = country;

        }else{
            detailsToUpdateObject.updatedCountry = intialCountryValue;
        }
        if (postCode != intialPostcodeValue) {

            detailsToUpdateObject.updatedPostCode = postCode;

        }else{
            detailsToUpdateObject.updatedPostCode = intialPostcodeValue;
        }

        console.log("customer number = " + cusNumber);

        var updateObj = JSON.stringify(detailsToUpdateObject);
        console.log(updateObj.toString() + "<- update Object is");

        $.ajax({
            type: "POST",
            dataType: 'json',
            data: updateObj,
            contentType: "application/json; charset=utf-8",
            url: "/customer/update/address/" + updateObj,
            success: function (data) {

                console.log("Success in Ajax homes address update call ");
                //close current modal
                $("#myHomeAddressDetails").modal("toggle");


                //open new modal
                $("#successModal").modal("toggle");


            },

            error: function (data) {
                console.log(data);
                alert("error in Ajax call " + data.toString());

            }


        })

    }




