/**
 * Created by james on 27/09/17.
 */

//I will need to look at a more fluid password checker - form validator - proabably out there.


function validatePassword(){

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");


    if(password.value != confirm_password.value) {

       confirm_password.style.borderColor = "red";
       confirm_password.setCustomValidity('Please confirm your password');


    } else {

        //confirm that the email address is not in use by way of ajax call.
        $('submitBtn').click(function(evt) {

            var obj ={

                firstName: document.getElementById("firstName"),
                lastName:  document.getElementById("lastName"),
                email:     document.getElementById("email"),
                password:  document.getElementById("password"),

            };
        }

        $.ajax({
            url: "@routes.Application.upload()",
            data: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            },
            type: 'POST',
            success: function(res) {
                if (res) {
                    console.log("Success!");
                } else {
                    console.log("Failed...");
                }
            }
        });

        document.forms['signupForm'].submit();
        return true;
    }
}

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;