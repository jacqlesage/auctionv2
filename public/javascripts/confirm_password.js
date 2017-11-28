/**
 * Created by james on 27/09/17.
 */

//I will need to look at a more fluid password checker - form validator - probably out there.


function validatePassword(){

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    console.log(document.getElementById("password").value);
    if(password.value != confirm_password.value) {

       confirm_password.style.borderColor = "red";
       confirm_password.setCustomValidity('Please confirm your password');


    } else {


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
               //if the data sent back is not the same as the email going in then, the cusotmer does not have this email with us
                //highlight the error on the form
                if(obj.email.toString() != data.toString()){

                    document.getElementById("email").style.borderColor = "blue";
                    document.getElementById("email").value = "This email is already registered with us";
                    document.getElementById("email").setCustomValidity("This email is already registered with us, please use 'forgotton password'");


                }else{
                    //else we want to sign the customer up
                    $.ajax({
                        type :  "POST",
                        dataType: 'json',
                        data: JSON.stringify(obj),
                        contentType: "application/json; charset=utf-8",
                        url  :  "/jsRoutes"

                });
                //then close the modal
                    //add name to button
                    $("#myModalSignUp .close").click()
                    //Then take them to the account page as they will have no funds and try and get some more information from them
                    //want to get the control back into play
                    //another ajax call - send sign up data and area to collect more data - look to add name to session
                    //look to split the account page into three - two cols up top and one down bottom for information
                    //

                }}});




                }

               //open the confirmation modal
                $('#myModalToAuctionPage').modal('show');


            }

            function reloadScreen(){
            alert("in reload screen");
                $("#myModalToAuctionPage .close").click()

                $.ajax({
                    type: "GET",
                    url: "/dollarLuxuryDashboard/"
                });

                //location.reload();
                //$('#myModalToAuctionPage .close').click();
            }
