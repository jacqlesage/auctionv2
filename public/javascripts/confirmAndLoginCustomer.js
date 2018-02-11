
function confirmEmailIsInDB(){
    alert("inblur");
    var x = document.getElementById("emailFromLogin");
    x.addEventListener("blur", myBlurFunction, true);
}


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
//                 // passwordFromLoginInputBox.style.borderColor = "red";
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
                emailFromLoginInputBox.setCustomValidity("Please register this email");
                emailFromLoginInputBox.style.borderColor = "blue";

            })
        })

}

