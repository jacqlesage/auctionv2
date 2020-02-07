var initialAddressValue = document.getElementById("address1Postal");
var initialAddress2Value = document.getElementById("address2Postal");
var intialCityValue = document.getElementById("cityPostal");
var intialCountryValue = document.getElementById("countryPostal");
var intialPostcodeValue = document.getElementById("postCodePostal");
var cusEmail;
var cusNumber;


//get current postal address details ; take care of by the find postal address js

//add event listeners for to show the change of address

$(document).ready(function(){

    cusEmail = document.getElementById("customerEmail").value;
    console.log("cusomter email address is " + customerEmail);
    cusNumber = document.getElementById("customerNumber").value;
    console.log("cusomter number is " + customerNumber);

    document.getElementById("address1").addEventListener("focusin", updateAddressPostal);
    document.getElementById("address2").addEventListener("focusin", updateAddressPostal);
    document.getElementById("city").addEventListener("focusin", updateAddressPostal);
    document.getElementById("country").addEventListener("focusin", updateAddressPostal);
    document.getElementById("postCode").addEventListener("focusin", updateAddressPostal);



});
//linked to event listeners
function updateAddressPostal(){

    var id = event.target.id;
    //initialAddressValue = document.getElementById("address1").value;
    console.log("the intial id value is id= " + id);

    switch (id) {
        case "address1Postal":
            initialAddressValue = document.getElementById("address1Postal").value;
            console.log("in address1" + " " + initialAddressValue);
            break;
        case "address2Postal":
            initialAddress2Value = document.getElementById("address2Postal").value;
            console.log("in address2" + " " + initialAddress2Value);
            break;
        case "cityPostal":
            intialCityValue = document.getElementById("cityPostal").value;
            console.log("in city" + " " + intialCityValue);
            break;
        case "countryPostal":
            intialCountryValue = document.getElementById("countryPostal").value;
            console.log("in country" + " " + intialCountryValue);
            break;
        case "postCodePostal":
            intialPostcodeValue = document.getElementById("postCodePostal").value;
            console.log("in postcode" + " " + intialPostcodeValue);
            break;

    }

}

//look for if customer wants to add new postal address to address file - add tick box


