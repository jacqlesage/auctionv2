var initialAddressValue = document.getElementById("address1Postal");
var initialAddress2Value = document.getElementById("address2Postal");
var intialCityValue = document.getElementById("cityPostal");
var intialCountryValue = document.getElementById("countryPostal");
var intialPostcodeValue = document.getElementById("postCodePostal");
var cusEmail;
var cusNumber;


//get current postal address details ; take care of by the find postal address js

//add event listeners for to show the change of address

//linked to event listeners
function updateAddressPostal(){
    console.log("update Postal address " + " " + initialAddressValue);
    var id = event.target.id;
    //initialAddressValue = document.getElementById("address1").value;
    console.log("the intial id value is id= " + id);

    switch (id) {
        case "address1Postal":
            newAddressValue = document.getElementById("address1Postal").value;
            console.log("in address1" + " " + initialAddressValue);
            console.log("in address1 new address value" + " " + newAddressValue);
            break;
        case "address2Postal":
            newAddress2Value = document.getElementById("address2Postal").value;
            console.log("in address2" + " " + initialAddress2Value);
            break;
        case "cityPostal":
            newCityValue = document.getElementById("cityPostal").value;
            console.log("in city" + " " + intialCityValue);
            console.log("in city new value" + " " + newCityValue);

            break;
        case "countryPostal":
            newCountryValue = document.getElementById("countryPostal").value;
            console.log("in country" + " " + intialCountryValue);
            break;
        case "postCodePostal":
            newPostcodeValue = document.getElementById("postCodePostal").value;
            console.log("in postcode" + " " + intialPostcodeValue);
            break;

    }

}

$(document).ready(function(){

    cusEmail = document.getElementById("customerEmail").value;
    console.log("cusomter email address is " + cusEmail);
    cusNumber = document.getElementById("customerNumber").value;
    console.log("cusomter number is " + cusNumber);
    console.log("initialAddressValue  is " + initialAddressValue);

    document.getElementById("address1Postal").addEventListener("focusin", updateAddressPostal);
    document.getElementById("address2Postal").addEventListener("focusin", updateAddressPostal);
    document.getElementById("cityPostal").addEventListener("focusin", updateAddressPostal);
    document.getElementById("countryPostal").addEventListener("focusin", updateAddressPostal);
    document.getElementById("postCodePostal").addEventListener("focusin", updateAddressPostal);



});

//look for if customer wants to add new postal address to address file - add tick box

function submitUpdatesPostalAddress(){

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


