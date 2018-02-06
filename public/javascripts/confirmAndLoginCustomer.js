
$(document).ready(function() {

  $("#submitBtnFromLogin").click(function(){

      var emailFromLogin = document.getElementById("emailFromLogin").value;
      var emailFromLoginBox = document.getElementById("emailFromLogin");

      var passwordFromLogin = document.getElementById("passwordFromLogin").value;

      if(passwordFromLogin.length == 0 || emailFromLogin.length == 0) {
            alert("it is empty");
          emailFromLoginBox.style.borderColor = "red";
          //emailFromLogin.setCustomValidity('Please confirm your email');

          //passwordFromLogin.style.borderColor = "red";
          //passwordFromLogin.setCustomValidity('Please confirm your password');
      }else {

          var r = jsRoutes.controllers.JsController.findCustomerByEmail(emailFromLogin);
          $.ajax({
              url: r.url, type: r.type, dataType: "JSON",
              success: (function (data) {

                  console.log(data);

                  if (data.phoneNumber == null) {
                      //only need to update phone here as the rest of the details are puled from session...humm....
                      phone.value = "Please update";
                      //password.value = "You can change your password here";

                  } else {
                      //password.value = "You can change your password here";

                  }

              }),

              error: (function (data) {
                  alert("Try again champ!");
              })
          })
      }
    })
});