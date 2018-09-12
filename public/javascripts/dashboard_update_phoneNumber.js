alert("phoneunmber");
var initialPhoneValue = document.getElementById("phone");
var initialEmailValue = document.getElementById("emailFromDashboard");
var intialPasswordValue = document.getElementById("pwd");

$(document).ready(function(){


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


    function DashboardUserEntersFields(){

        //as this only happens when the user leaves the field we can compare the values in the global vals
        //on focus to get the values when the user goes in
        //onblur to get the value when the user finishes
         var CompareInitialPhoneValue = document.getElementById("phone").value;
         var CompareInitialEmailValue = document.getElementById("emailFromDashboard").value;
         var CompareIntialPasswordValue = document.getElementById("pwd").value;

         if(CompareInitialPhoneValue.toString() == initialPhoneValue.toString()){
             alert("testPhone");
         }

        if(CompareInitialEmailValue.toString() == initialEmailValue.toString()){
            alert("testEmail");
        }

        if(CompareIntialPasswordValue.toString() == intialPasswordValue.toString()){
            alert("testPassowrd");
        }



         alert(initialPhoneValue + " " + CompareInitialPhoneValue + " " + initialEmailValue + " " + intialPasswordValue)
    }

function ChangeUserPhone(){

    //as this only happens when the user leaves the field we can compare the values in the global vals
    //on focus to get the values when the user goes in
    //onblur to get the value when the user finishes
    var CompareInitialPhoneValue = document.getElementById("phone").value;

    if(CompareInitialPhoneValue.toString() == initialPhoneValue.toString()){
        alert(initialPhoneValue + " " + CompareInitialPhoneValue);
        //then it has not changed
    }else{
        //it has changed
        alert(initialPhoneValue + " it has changed " + CompareInitialPhoneValue);

    }


}

function ChangeUserEmail(){

    //as this only happens when the user leaves the field we can compare the values in the global vals
    //on focus to get the values when the user goes in
    //onblur to get the value when the user finishes
    var CompareInitialEmailValue = document.getElementById("emailFromDashboard").value;

    if(CompareInitialEmailValue.toString() == initialEmailValue.toString()){
        alert(initialEmailValue + " " + CompareInitialEmailValue);
        //then it has not changed
    }else{
        //it has changed
        alert(initialEmailValue + " it has changed " + CompareInitialEmailValue);

    }


}

    // var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);
    // //var r = jsRoutes.controllers.JsController.login
    // (emailFromLogin);
    // $.ajax({
    //     url: r.url, type: r.type, dataType: "JSON",
    //     success: (function (data) {
    //         emailFromLoginInputBox.style.borderColor = "green";
    //         emailOk = true;
    //         console.log(data);
    //         //
    //         // if (data.firstName == null) {
    //         //     //Then we know there is no customer found
    //         //     emailFromLoginInputBox.setCustomValidity('Please register this email');
    //         //     //password.value = "You can change your password here";
    //         //
    //         // } else {
    //         //     //password.value = "You can change your password here";
    //         //
    //         // }
    //
    //     }),
    //
    //     error: (function (data) {
    //         emailFromLoginInputBox.value = ("Not a registered email");
    //         emailFromLoginInputBox.style.borderColor = "red";
    //
    //     })
    // })



    //if empty then no change / ignore the click in the box basically

    //if yes then make the change on the DB via ajax using controllers


    
