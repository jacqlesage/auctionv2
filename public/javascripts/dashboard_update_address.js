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
    console.log("cusomter email address is " + customerEmail);
    cusNumber = document.getElementById("customerNumber").value;
    console.log("cusomter number is " + customerNumber);

    document.getElementById("address1").addEventListener("focusin", updateAddress);
    document.getElementById("address2").addEventListener("focusin", updateAddress);
    document.getElementById("city").addEventListener("focusin", updateAddress);
    document.getElementById("country").addEventListener("focusin", updateAddress);
    document.getElementById("postCode").addEventListener("focusin", updateAddress);



});

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


        var updateObj = JSON.stringify(detailsToUpdateObject);
        console.log(updateObj.toString() + "<- update Object is");

        $.ajax({
            type: "POST",
            dataType: 'json',
            data: updateObj,
            contentType: "application/json; charset=utf-8",
            url: "/customer/update/address/" + updateObj,
            success: function (data) {

                console.log("Success in Ajax call var ");



            },

            error: function (data) {
                console.log(data);
                alert("error in Ajax call " + data.toString());

            }


        })

    }




// function DashboardUserEntersFields(){
//
//     //as this only happens when the user leaves the field we can compare the values in the global vals
//     //on focus to get the values when the user goes in
//     //onblur to get the value when the user finishes
//     var CompareInitialPhoneValue = document.getElementById("phone").value;
//     var CompareInitialEmailValue = document.getElementById("emailFromDashboard").value;
//     var CompareIntialPasswordValue = document.getElementById("pwd").value;
//
//     if(CompareInitialPhoneValue.toString() == initialPhoneValue.toString()){
//         alert("testPhone");
//     }
//
//     if(CompareInitialEmailValue.toString() == initialEmailValue.toString()){
//         alert("testEmail");
//     }
//
//     if(CompareIntialPasswordValue.toString() == intialPasswordValue.toString()){
//         alert("testPassowrd");
//     }
//
//
//
//     alert(initialPhoneValue + " " + CompareInitialPhoneValue + " " + initialEmailValue + " " + intialPasswordValue)
// }
//
// function ChangeUserPhone() {
//
//     //as this only happens when the user leaves the field we can compare the values in the global vals
//     //on focus to get the values when the user goes in
//     //onblur to get the value when the user finishes
//     var CompareInitialPhoneValue = document.getElementById("phone").value;
//
//     if (CompareInitialPhoneValue.toString() == initialPhoneValue.toString()) {
//         alert(initialPhoneValue + " " + CompareInitialPhoneValue);
//         //then it has not changed
//     } else {
//         //it has changed
//         alert(initialPhoneValue + " it has changed " + CompareInitialPhoneValue);
//
//         //CALL AJAX WITH ComparedValue
//         var obj = {
//
//             updatedPhoneNumber: CompareInitialPhoneValue,
//             email: initialEmailValue
//
//         }
//
//         // $.ajax({
//         //     type: "POST",
//         //     dataType: 'json',
//         //     data: JSON.stringify(obj),
//         //     contentType: "application/json; charset=utf-8",
//         //     url: "/customer/update/" + obj.updatedPhoneNumber,
//         //     success: function (data) {
//         //         //if the data sent back is not the same as the email going in then, the cusotmer does have this email with us
//         //
//         //         if (obj.email.toString() != data.toString()) {
//         //
//         //             //else we want to log the customer in
//         //             // $.ajax({
//         //             //     type: "POST",
//         //             //     dataType: 'json',
//         //             //     data: JSON.stringify(obj),
//         //             //     contentType: "application/json; charset=utf-8",
//         //             //     url: "/login"
//         //             //
//         //             // });
//
//     }
//
//
// };
//
// function ChangeUserEmail(){
//
//     //as this only happens when the user leaves the field we can compare the values in the global vals
//     //on focus to get the values when the user goes in
//     //onblur to get the value when the user finishes
//     var CompareInitialEmailValue = document.getElementById("emailFromDashboard").value;
//
//     if(CompareInitialEmailValue.toString() == initialEmailValue.toString()){
//         alert(initialEmailValue + " " + CompareInitialEmailValue);
//         //then it has not changed
//     }else{
//         //it has changed
//         alert(initialEmailValue + " it has changed " + CompareInitialEmailValue);
//
//     }
//
//
// }
//
// function ChangeUserPassword(){
//
//     //as this only happens when the user leaves the field we can compare the values in the global vals
//     //on focus to get the values when the user goes in
//     //onblur to get the value when the user finishes
//     var CompareInitialPwdValue = document.getElementById("pwd").value;
//
//     if(CompareInitialPwdValueValue.toString() == initialPasswordValue.toString()){
//         alert(initialPasswordValue + " " + CompareInitialPwdValueValue);
//         //then it has not changed
//     }else{
//         //it has changed
//         alert(initialPasswordValue + " it has changed " + CompareInitialPwdValueValue);
//
//     }
// }
//
//
//
//
// // var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);
// // //var r = jsRoutes.controllers.JsController.login
// // (emailFromLogin);
// // $.ajax({
// //     url: r.url, type: r.type, dataType: "JSON",
// //     success: (function (data) {
// //         emailFromLoginInputBox.style.borderColor = "green";
// //         emailOk = true;
// //         console.log(data);
// //         //
// //         // if (data.firstName == null) {
// //         //     //Then we know there is no customer found
// //         //     emailFromLoginInputBox.setCustomValidity('Please register this email');
// //         //     //password.value = "You can change your password here";
// //         //
// //         // } else {
// //         //     //password.value = "You can change your password here";
// //         //
// //         // }
// //
// //     }),
// //
// //     error: (function (data) {
// //         emailFromLoginInputBox.value = ("Not a registered email");
// //         emailFromLoginInputBox.style.borderColor = "red";
// //
// //     })
// // })
//
//
//
// //if empty then no change / ignore the click in the box basically
//
// //if yes then make the change on the DB via ajax using controllers
//
//
//
