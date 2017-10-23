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

            var toPostorNot;


            var obj = {

                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,

            };

        console.log(JSON.stringify(obj));

          $.ajax({
            type :  "GET",
            dataType: 'json',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            url  :  "/customer/"+ obj.email,
            success: function(data) {
               alert("data.reponse = " +data.toString() + " " +" obj.email = " + obj.email.toString() );

                if(obj.email.toString() != data.toString()){

                    

                    alert("email  the same");


                }else{

                    $.ajax({
                        type :  "POST",
                        dataType: 'json',
                        data: JSON.stringify(obj),
                        contentType: "application/json; charset=utf-8",
                        url  :  "/jsRoutes"

                });


                }}});
                    // var r = jsRoutes.controllers.SignupController.signup;
                    // $.ajax(jsRoutes.controllers.SignupController.signup);

                    // $.ajax({
                    //     type :  "POST",
                    //     url: "/jsRoutes",
                    //     data: obj,
                    //     dataType: "json",
                    //     contentType: "application/json",
                    //     success: function (msg) {
                    //         alert(msg.success)
                    //     },
                    //     error: function () {
                    //         alert("error");
                    //
                    //     }
                    // });

                    // {url: r.url, type: r.type, success: /*...*/, error: /*...*/ }
                    //
                    //  $.ajax("routes.SignupController.signup")
                    //      // .ajaxSuccess(console.log("ajaxsucess"))
                    //      .done( console.log("failed here1") )
                    //      .fail( console.log("failed here2"));


                    //
                    // $.ajax({
                    //     url: "@routes.SignupController.signup",
                    //     data: JSON.stringify(obj),
                    //     headers: {
                    //         'Content-Type': 'application/json'
                    //  },
                    //     type: 'POST',
                    //     success: function(res) {
                    //         if (res) {
                    //             console.log(obj);
                    //             console.log("Failed...");
                    //
                    //         } else {
                    //             console.log("Failed...");
                    //             alert("fail");
                    //         }
                    //
                    //     }});

                    //document.forms['signupForm'].submit();
                    //return true;


                }
            }
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;