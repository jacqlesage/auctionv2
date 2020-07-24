
function confirmLogin2() {

    alert("testing login");

    var obj = {


        email: document.getElementById("emailFromLogin").value,
        password: document.getElementById("passwordFromLogin").value

    };

//check to see if customer is in db already via email - need to confirm password but worry about this later
    //as still have to hash
    $.ajax({
        type: "GET",
        dataType: 'json',
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        url: "/login/customer/" + obj.email,
        success: function (data) {
            //if data is = true then is in system, else
            console.log("data from call " + data)
            if (data == true) {
                console.log("success ")
                //then close the modal
                //this clicks outside the modal and causes it to close a good find!
                //$("#myModalLogin").trigger("click");

                // transfer to asset page after login - need to make it submit to the action as Ajax not pushing
                //the page to reload
                $( "#loginForm" ).submit()

                // $("#myModalLogin .open").click()
                // $("#myModalLogin .close").click()
                //Then take them to the account page as they will have no funds and try and get some more information from them
                //want to get the control back into play
                //another ajax call - send sign up data and area to collect more data - look to add name to session
                //look to split the account page into three - two cols up top and one down bottom for information

            } else {
                //check the password

                //else
                document.getElementById("emailFromLogin").style.borderColor = "blue";
                document.getElementById("emailFromLogin").value = "This email is not registered with us";
                document.getElementById("emailFromLogin").setCustomValidity("This email is already registered with us, please use 'signup'");
            }
        }
        });
}


