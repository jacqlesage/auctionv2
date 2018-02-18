var emailOk;
var passwordOk;
var btn;

$(function() {
    console.log( "ready!" );
    btn = document.getElementById("submitBtnFromLogin");
    var x = document.getElementById("emailFromLogin");
    var passwordFromLoginInputBox = document.getElementById("passwordFromLogin");
    passwordFromLoginInputBox.addEventListener("blur", myBlurFunction2, true);
    x.addEventListener("blur", myBlurFunction, true);
    btn.disabled = true;

});
// function confirmEmailIsInDB(){
//     var x = document.getElementById("emailFromLogin");
//     x.addEventListener("blur", myBlurFunction, true);
// }


// $(document).ready(function() {


    //$("#submitBtnFromLogin").click(function()
//   function myBlurFunction(){
//
//       var emailFromLogin = document.getElementById("emailFromLogin").value;
//       var emailFromLoginInputBox = document.getElementById("emailFromLogin");
//
//       var passwordFromLogin = document.getElementById("passwordFromLogin").value;
//       var passwordFromLoginInputBox = document.getElementById("passwordFromLogin");
// //bit of error checking server side - can put this on the client side also
//       if(passwordFromLogin.length == 0 || emailFromLogin.length == 0) {
//             alert("it is empty");
//             if(passwordFromLogin.length == 0 && emailFromLogin.length == 0) {
//                 emailFromLoginInputBox.setCustomValidity('Please confirm your email');
//                 // passwordFromLogihttps://www.google.com/search?ei=REqHWt38Ooe10gS7_K2gAQ&q=whs.nzx&oq=whs.nzx&gs_l=psy-ab.3..0i7i30k1j0j0i30k1.5886.6128.0.6934.3.3.0.0.0.0.299.299.2-1.1.0....0...1c.1.64.psy-ab..2.1.298....0.CaEmYIufeqknInputBox.style.borderColor = "red";
//                 // emailFromLoginInputBox.style.borderColor = "red";
//                 passwordFromLoginInputBox.setCustomValidity('Please confirm your password');
//
//             }else if(emailFromLogin.length == 0){
//                 emailFromLoginInputBox.setCustomValidity('Please confirm your email');
//                 emailFromLoginInputBox.style.borderColor = "red";
//
//             }else if(passwordFromLogin.length == 0){
//                 passwordFromLoginInputBox.style.borderColor = "red";
//                 passwordFromLoginInputBox.setCustomValidity('Please confirm your password');
//             }
//           //emailFromLogin.setCustomValidity('Please confirm your email');
//
//           //passwordFromLogin.style.borderColor = "red";
//           //passwordFromLogin.setCustomValidity('Please confirm your password');
//       }else {
//
//           var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);
//           //var r = jsRoutes.controllers.JsController.login
//           (emailFromLogin);
//           $.ajax({
//               url: r.url, type: r.type, dataType: "JSON",
//               success: (function (data) {
//                   emailFromLoginInputBox.style.borderColor = "green";
//                   console.log(data);
//                   //
//                   // if (data.firstName == null) {
//                   //     //Then we know there is no customer found
//                   //     emailFromLoginInputBox.setCustomValidity('Please register this email');
//                   //     //password.value = "You can change your password here";
//                   //
//                   // } else {
//                   //     //password.value = "You can change your password here";
//                   //
//                   // }
//
//               }),
//
//               error: (function (data) {
//                   emailFromLoginInputBox.setCustomValidity("Please register this email");
//                       emailFromLoginInputBox.style.borderColor = "blue";
//
//               })
//           })
//       }
//      }
//
//
// });

function myBlurFunction(){

    var emailFromLogin = document.getElementById("emailFromLogin").value;
    var emailFromLoginInputBox = document.getElementById("emailFromLogin");

    var passwordFromLogin = document.getElementById("passwordFromLogin").value;
    var passwordFromLoginInputBox = document.getElementById("passwordFromLogin");
//bit of error checking server side - can put this on the client side also


        var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);
        //var r = jsRoutes.controllers.JsController.login
        (emailFromLogin);
        $.ajax({
            url: r.url, type: r.type, dataType: "JSON",
            success: (function (data) {
                emailFromLoginInputBox.style.borderColor = "green";
                emailOk = true;
                console.log(data);
                //
                // if (data.firstName == null) {
                //     //Then we know there is no customer found
                //     emailFromLoginInputBox.setCustomValidity('Please register this email');
                //     //password.value = "You can change your password here";
                //
                // } else {
                //     //password.value = "You can change your password here";
                //
                // }

            }),

            error: (function (data) {
                emailFromLoginInputBox.value = ("Not a registered email");
                emailFromLoginInputBox.style.borderColor = "red";

            })
        })



}

//this does check the password, however, I can see a flaw with a password hacker being able to go through the whole DB with no restrictions.
//Good enough for the time being.

function myBlurFunction2() {

    var emailFromLogin = document.getElementById("emailFromLogin").value;
    var passwordFromLogin = document.getElementById("passwordFromLogin").value;
    var passwordFromLoginInputBox = document.getElementById("passwordFromLogin");
    var passTest = false;
//bit of error checking server side - can put this on the client side also


    var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);

    $.ajax({
        url: r.url, type: r.type, dataType: "JSON",
        success: (function (data) {

            if(data.password.toString() == passwordFromLogin.toString()) {
                passwordFromLoginInputBox.style.borderColor = "green";
                passwordOk = true;


                passTest = testPasswordAndEmail(passwordOk, emailOk);
                console.log(data);
                console.log("pass test " + passTest);


            }else{
                document.getElementById("submitBtnFromLogin").disabled = true;
                passwordFromLoginInputBox.style.borderColor = "red";
            }

        }),

        error: (function (data) {

            passwordFromLoginInputBox.style.borderColor = "red";

        })
    })

}

function testPasswordAndEmail(pwd, email){

    if(pwd && email === true) {
        alert("in here");
        document.getElementById("submitBtnFromLogin").disabled = false;

        return true;

    }
    document.getElementById("submitBtnFromLogin").disabled = true;
    return false;
}