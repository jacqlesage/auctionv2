alert("assetSignUpv2");
var fullLoginObject;
function assetValidatePasswordv2() {

    var password = document.getElementById("password")
        , confirm_password = document.getElementById("confirm_password");

    password.style.borderColor = "inherit";
    confirm_password.style.borderColor = "inherit";

    if (password.value == "" || password.length == 0) {
        password.style.borderColor = "red";

    } else if (confirm_password == "" || confirm_password.length == 0) {
        confirm_password.style.borderColor = "red";
    } else if (password.value != confirm_password.value) {

        confirm_password.style.borderColor = "red";

    } else {
        confirm_password.style.borderColor = "green";

        var customerObject = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            loginTableRefNum: null
        }

        var practiceObject = {
            practiceTAName: document.getElementById("practiceTAName").value,
            practiceLegalName: document.getElementById("practiceLegalName").value,
            practicePhoneNumber: document.getElementById("practicePhoneNumber").value,
            practiceURL: document.getElementById("practiceURL").value,
            customerRefNum: null
        }

        var loginObject = {

            email: document.getElementById("email").value,
            password: document.getElementById("password").value

        }

        //check if customer on file if not add to login object

        //console.log("inside assetValidatePassword print password" + loginObject.password.toString())
    }

    callAjaxCheckCustomerOnFileV2(loginObject)
    signCustomerUpLoginTable(loginObject)
    alert("fullObjectvar " + fullLoginObject)
    //addPracticeObject(practiceObject)
    //addPracticeObject(fullLoginObject, practiceObject)
    //data1 = callAjaxCheckCustomerOnFile()
    // var x = JSON.stringify(fullLoginObject)
    // console.log("fullLoginObject info = " + x)
    // console.log("fullLoginObject info 2 = " + fullLoginObject.email)
    //addPracticeObject(fullLoginObject, practiceObject)

}

function callAjaxCheckCustomerOnFileV2(loginObject)
{
    loginObject = JSON.stringify(loginObject)

    $.ajax({
        type: "GET",
        dataType: 'json',
        data: loginObject,
        contentType: "application/json; charset=utf-8",
        url: "/login/customer/" + loginObject,
        success: function (data) {
            //customer on file
            if(data == true) {
                document.getElementById("email").style.borderColor = "blue";
                document.getElementById("email").value = "This email is already registered with us";
                document.getElementById("email").setCustomValidity("This email is already registered with us, please use 'forgotton password'");
                console.log("This email is already registered with us, please login instead // forgot password")
            }else{
                //sign up customer - add full login object to global
                //callAjaxFirstSignUpLoginReturnTableRef(loginObject, customerObject, practiceObject)


            }

        }
    });

}



    function signCustomerUpLoginTable(loginObject)
    {

        loginObject = JSON.stringify(loginObject)

        $.ajax({
            type: "GET",
            dataType: 'json',
            data: loginObject,
            contentType: "application/json; charset=utf-8",
            url: "/login/loginTable/" + loginObject,
            success: function (data) {
                //customer now saved id generated so return the ID.
                alert("made it back" +  data.toString())
                callBackToPopulateGlobalVar(data)


            }
        });

}

function callBackToPopulateGlobalVar(data){
    alert("inside callback " + data.toString())
    fullLoginObject = data.toString()

}

