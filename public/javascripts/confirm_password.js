/**
 * Created by james on 27/09/17.
 */

//I will need to look at a more fluid password checker - form validator - proabably out there.


function validatePassword(){

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    console.log(document.getElementById("password").value);
    if(password.value != confirm_password.value) {

       confirm_password.style.borderColor = "red";
       confirm_password.setCustomValidity('Please confirm your password');


    } else {

        //confirm that the email address is not in use by way of ajax call.
        //$('submitBtn').click(function(evt) {
            console.log("Success!11111");




            var obj = {

                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,

            };

        console.log(JSON.stringify(obj));




        $.ajax({
            url: "@routes.SignupController.signup",
            data: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
         },
            type: 'POST',
            success: function(res) {
                if (res) {
                    console.log(obj);

                } else {
                    console.log("Failed...");
                    alert("fail");
                }

            }});
    }
        //document.forms['signupForm'].submit();
        //return true;



};
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;