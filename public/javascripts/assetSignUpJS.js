alert("assetSignUp");
function assetValidatePassword() {

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    console.log(document.getElementById("password").value);
    if (password.value != confirm_password.value) {

        confirm_password.style.borderColor = "red";

    }else {
        confirm_password.style.borderColor = "green";

        var customerObject = {
            firstName: document.getElementById("firstName"),
            lastName: document.getElementById("lastName"),
            email: document.getElementById("email"),
            password: document.getElementById("password")
        }

        var practiceObject = {
            practiceTAName: document.getElementById("practiceTAName"),
            practiceLegalName: document.getElementById("practiceLegalName"),
            practicePhoneNumber: document.getElementById("practicePhoneNumber"),
            practiceURL: document.getElementById("practiceURL")
        }

        var loginObject = {

            firstName: document.getElementById("firstName"),
            lastName: document.getElementById("lastName"),
            email: document.getElementById("email"),
            password: document.getElementById("password")

        }



    }



    }


    function callAjax(){



    }