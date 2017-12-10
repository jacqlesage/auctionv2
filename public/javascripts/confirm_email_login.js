/**
 * Created by james on 29/10/17.
 */
function confirmLogin() {

    alert("testing");

    var obj = {


        email: document.getElementById("emailLi").value,
        password: document.getElementById("passwordLi").value,

    };

    $.ajax({
        type: "GET",
        dataType: 'json',
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        url: "/customer/" + obj.email,
        success: function (data) {
            //if the data sent back is not the same as the email going in then, the cusotmer does have this email with us

            if (obj.email.toString() != data.toString()) {

                //else we want to log the customer in
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    data: JSON.stringify(obj),
                    contentType: "application/json; charset=utf-8",
                    url: "/login",

                });
                //then close the modal
                $("#myModalLogin .close").click()
                //Then take them to the account page as they will have no funds and try and get some more information from them
                //want to get the control back into play
                //another ajax call - send sign up data and area to collect more data - look to add name to session
                //look to split the account page into three - two cols up top and one down bottom for information

            } else {
                //check the password

                //else
                document.getElementById("emailLi").style.borderColor = "blue";
                document.getElementById("emailLi").value = "This email is not registered with us";
                document.getElementById("emailLi").setCustomValidity("This email is already registered with us, please use 'signup'");
            }
        }});






}