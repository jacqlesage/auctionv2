var initialAddressValue = document.getElementById("address1");
var initialAddress2Value = document.getElementById("address2");
var intialCityValue = document.getElementById("city");
var intialCountryValue = document.getElementById("country");
var intialPostcodeValue = document.getElementById("postCode");



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
        case 5:
            initialAddressValue = document.getElementById("address1").value;
            console.log("in address1" + " " + intialPostcodeValue);
            break;

    }

}

$(document).ready(function(){

    document.getElementById("address1").addEventListener("focusin", updateAddress);
    document.getElementById("address2").addEventListener("focusin", updateAddress);
    document.getElementById("city").addEventListener("focusin", updateAddress);
    document.getElementById("country").addEventListener("focusin", updateAddress);
    document.getElementById("postCode").addEventListener("focusin", updateAddress);
    //initialEmailValue = document.getElementById("emailFromDashboard").value;


    $("#checkBoxPhone").change(function(){
        var checkBox = document.getElementById("checkBoxPhone");
        if(checkBox.checked == true) {
            document.getElementById("phone").disabled = false;
            initialPhoneValue = document.getElementById("phone").value;

        }else{
            document.getElementById("phone").disabled = true;
        }

    });

    $("#checkBoxEmail").change(function(){
        var checkBox = document.getElementById("checkBoxEmail");
        if(checkBox.checked == true) {
            document.getElementById("emailFromDashboard").disabled = false;
            initialEmailValue = document.getElementById("emailFromDashboard").value;

        }else{
            document.getElementById("emailFromDashboard").disabled = true;

        }

    });

    $("#checkBoxPwd").change(function(){
        var checkBox = document.getElementById("checkBoxPwd");
        if(checkBox.checked == true) {
            document.getElementById("pwd").disabled = false;
            initialPasswordValue = document.getElementById("pwd").value;
            document.getElementById("pwdConfirmed").disabled = false;

        }else{
            document.getElementById("pwd").disabled = true;
            document.getElementById("pwdConfirmed").disabled = true;
        }
        //run ajax call here.
    });
});

function submitUpdates(){

    var detailsToUpdateObject = {
        updatedPhoneNumber: null,
        updatedEmail: null,
        updatedPwd: null,
        initialEmail: null


};
    detailsToUpdateObject.initialEmail = initialEmailValue;

    if(document.getElementById("checkBoxPhone")){
        var phone = document.getElementById("phone").value;
        detailsToUpdateObject.updatedPhoneNumber = phone;

    }

    if(document.getElementById("checkBoxEmail")){
        var email = document.getElementById("emailFromDashboard").value;
        detailsToUpdateObject.updatedEmail = email;
     }

    if(document.getElementById("checkBoxPwd")){
        var pwd = document.getElementById("pwdConfirmed").value;
        detailsToUpdateObject.updatedPwd = pwd;
    }

   var updateObj = JSON.stringify(detailsToUpdateObject);
   console.log(updateObj);

    $.ajax({
             type: "POST",
             dataType: 'json',
             data: updateObj,
             contentType: "application/json; charset=utf-8",
             url: "/customer/update/"+ updateObj,
             success: function (data) {
                 var temp = data.updatedPhoneNumber.toString();
                 phone.value = temp;
                 alert("Success in Ajax call var " + temp);

             },

             error: function (data) {
                 console.log(data);
                 alert("error in Ajax call " + data.toString());

             }



});


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
