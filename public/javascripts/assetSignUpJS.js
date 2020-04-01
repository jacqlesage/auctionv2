alert("assetSignUp");
function assetValidatePassword() {

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    password.style.borderColor = "inherit";
    confirm_password.style.borderColor = "inherit";

    if(password.value == "" ||password.length == 0){
        password.style.borderColor = "red";

    }else if (confirm_password == "" || confirm_password.length ==0 ) {
        confirm_password.style.borderColor = "red";
    }else if (password.value != confirm_password.value ) {

        confirm_password.style.borderColor = "red";

    } else {
        confirm_password.style.borderColor = "green";

        var customerObject = {
            firstName: document.getElementById("firstName"),
            lastName: document.getElementById("lastName"),
            email: document.getElementById("email"),
            password: document.getElementById("password")
        }

        var practiceObject = {
            practiceTAName: document.getElementById("practiceTAName").value,
            practiceLegalName: document.getElementById("practiceLegalName").value,
            practicePhoneNumber: document.getElementById("practicePhoneNumber").value,
            practiceURL: document.getElementById("practiceURL").value
        }

        var loginObject = {

            email: document.getElementById("email").value,
            password: document.getElementById("password").value

        }

        console.log("inside assetValidatePassword print password" + loginObject.password.toString())
    }

        /**
         * Check details not blank - make functions for each is probably the safest.
         *
         */
        /**
         * 1st step - check if customer is with us
         * 2nd step - if not sign up
         *              if yes push them to login
         */

        callAjaxCheckCustomerOnFile(loginObject, practiceObject)

    }







    function callAjaxCheckCustomerOnFile(loginObject, practiceObject){
        loginObject = JSON.stringify(loginObject)
        console.log("in callAjaxCheckCustomerOnFile login object after string = " +loginObject)
        practiceObject = JSON.stringify(practiceObject)

        $.ajax({
            type: "GET",
            dataType: 'json',
            data: loginObject,
            contentType: "application/json; charset=utf-8",
            url: "login/customer/"+ loginObject,
            success: function (data) {
                console.log("inside the success callback from Ajax" + data.toString())

                //if the data sent back is not the same as the email going in then, the cusotmer does not have this email with us
                //highlight the error on the form
                if (data == true) {

                    document.getElementById("email").style.borderColor = "blue";
                    document.getElementById("email").value = "This email is already registered with us";
                    document.getElementById("email").setCustomValidity("This email is already registered with us, please use 'forgotton password'");
                    console.log("This email is already registered with us, please login instead // forgot password")

                } else {
                    console.log(data.toString())
                   // customer needs to be signed up but first of all login object needs to be created.
                    console.log("in else statement of assetSignUpJS")
                    var loginTableRef = callAjaxFirstSignUpLoginReturnTableRef(loginObject)
                    console.log("var loginTableRef is " + loginTableRef)
                }
            }
        })
        };


    function callAjaxFirstSignUpLoginReturnTableRef(loginObject) {
        var returnedData;

        console.log("made it to second ajax call login object " +loginObject.toString())

        $.ajax({
            type: "GET",
            dataType: 'json',
            data: loginObject,
            contentType: "application/json; charset=utf-8",
            url: "login/customer/firstSignUp/" + loginObject,
            success: function (data) {
                returnedData = data.toString();
                console.log("made it to second ajax call " +returnedData)
                console.log("made it to second ajax call data info v2 = " + data.toString())
            }

        })
    }

