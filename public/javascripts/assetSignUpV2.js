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

        var allFormInfo ={

            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            practiceTAName: document.getElementById("practiceTAName").value,
            practiceLegalName: document.getElementById("practiceLegalName").value,
            practicePhoneNumber: document.getElementById("practicePhoneNumber").value,
            practiceURL: document.getElementById("practiceURL").value

        }

        //check if customer on file if not add to login object

        //console.log("inside assetValidatePassword print password" + loginObject.password.toString())
    }

    callAjaxCheckCustomerOnFileV2(loginObject, allFormInfo)
    //signCustomerUpLoginTable(loginObject)
    //alert("fullObjectvar " + fullLoginObject)
    //addPracticeObject(practiceObject)
    //addPracticeObject(fullLoginObject, practiceObject)
    //data1 = callAjaxCheckCustomerOnFile()
    // var x = JSON.stringify(fullLoginObject)
    // console.log("fullLoginObject info = " + x)
    // console.log("fullLoginObject info 2 = " + fullLoginObject.email)
    //addPracticeObject(fullLoginObject, practiceObject)

}

function callAjaxCheckCustomerOnFileV2(loginObject, allFormInfo)
{

    loginObject = JSON.stringify(loginObject)
    allFormInfo = JSON.stringify(allFormInfo)


    $.ajax({
        type: "GET",
        dataType: 'json',
        data: loginObject,
        contentType: "application/json; charset=utf-8",
        url: "/login/customer/" + loginObject,
        success: function (data) {
            //customer on file
            alert("1st success via ajax " + data.toString())
            if(data == true) {
                document.getElementById("email").style.borderColor = "blue";
                document.getElementById("email").value = "This email is already registered with us";
                document.getElementById("email").setCustomValidity("This email is already registered with us, please use 'forgotton password'");
                console.log("This email is already registered with us, please login instead // forgot password")
            }else{
                alert("in the else statment of 1st success via ajax " + data.toString())
                //location.reload();
                //$("#myModalSignUp .close").click()
                //change buttong type to submit
                //$("#submitBtn").removeAttr("type").attr("type", "submit");
                //then click the submit button
                $( "#signupForm" ).submit()


                // $.ajax({
                //     type: "GET",
                //     dataType: 'json',
                //     //data: allFormInfo,
                //     contentType: "application/json; charset=utf-8",
                //     //processdata: false,
                //     url: "/login/firstLogin/" + allFormInfo,
                //     success: function (data){
                //
                //         if(data == true){
                //             alert("data is true = "+ data.toString());
                //            //document.location.assign("/view/practiceAssetList");
                //             //openNewPage()
                //         }
                //
                //     },
                //
                //     error: function (data) {
                //         alert("error via ajax " + data.toString())
                //     }
                // });


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

    function openNewPage() {
    alert("in openNewPage")
        $.ajax({
            type: "GET",
            url: "/view/practiceAssetList"
        });
    }

