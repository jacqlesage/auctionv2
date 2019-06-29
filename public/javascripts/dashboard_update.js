
var initialPhoneValue = document.getElementById("phone");
var initialEmailValue = document.getElementById("emailFromDashboard");
var intialPasswordValue = document.getElementById("pwd");


$(document).ready(function(){

    initialEmailValue = document.getElementById("emailFromDashboard").value;


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

    //call ajax method to get physical address table and populate details
    getAddressDetails();
    //call ajax method to get postal address table and populate details


});

function submitPersonalAndPasswordUpdates(){

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


function getAddressDetails(){//need to get the poastal address details to prefill the address info change ajax method.

    var cusEmail = JSON.stringify(initialEmailValue);

    //alert(initialEmailValue + "inside get address details");

    $.ajax({
        type: "GET",
        dataType: 'json',
        data: cusEmail,
        contentType: "application/json; charset=utf-8",
        url: "/customer/update/address/physical/"+cusEmail,
        success: function (data) {

            console.log("Success in Ajax call var ");



        },

        error: function (data) {
            console.log(data);
            alert("error in Ajax call " + data.toString());

        }


    })


}


