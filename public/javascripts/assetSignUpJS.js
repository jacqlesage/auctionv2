alert("assetSignUp");
var fullLoginObject;
function assetValidatePassword() {

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

        console.log("inside assetValidatePassword print password" + loginObject.password.toString())
    }

        callAjaxCheckCustomerOnFile(loginObject,customerObject, practiceObject)
        //addPracticeObject(practiceObject)
    //addPracticeObject(fullLoginObject, practiceObject)
    //data1 = callAjaxCheckCustomerOnFile()
    // var x = JSON.stringify(fullLoginObject)
    // console.log("fullLoginObject info = " + x)
    // console.log("fullLoginObject info 2 = " + fullLoginObject.email)
    //addPracticeObject(fullLoginObject, practiceObject)

}

        /**
         * Check details not blank - make functions for each is probably the safest.
         *
         */
        /**
         * 1st step - check if customer is with us - return boolean
         * 2nd step - if not sign up
         *              if yes push them to login
         */









    function callAjaxCheckCustomerOnFile(loginObject, customerObject, practiceObject) {
            loginObject = JSON.stringify(loginObject)
            console.log("in callAjaxCheckCustomerOnFile login object after string = " + loginObject)

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
                        callAjaxFirstSignUpLoginReturnTableRef(loginObject, customerObject, practiceObject)

                         }

                }
            });
        }



            function callAjaxFirstSignUpLoginReturnTableRef(loginObject, customerObject, practiceObject) {


                console.log("made it to second ajax call login object " + loginObject.toString())

                $.ajax({
                    type: "GET",
                    dataType: 'json',
                    data: loginObject,
                    contentType: "application/json; charset=utf-8",
                    url: "/login/customer/firstSignUp/" + loginObject,
                    success: function (data) {

                       customerObject.loginTableRefNum = data.id.toString()

                        //addPracticeObject(practiceObject)
                        addCustomerObject(customerObject, practiceObject)

                    }


                        //console.log("made it to second ajax call data" + data.id + data.password)

                });
                //console.log("made it to second ajax call test 2 " + data1)
                //return data1;

                //addPracticeObject(practiceObject)


        }

            // function newCustomerSignUp(returnedData) {
            //
            //         //no sign up
            //         document.getElementById("email").style.borderColor = "blue";
            //         document.getElementById("email").value = "This email is already registered with us";
            //         document.getElementById("email").setCustomValidity("This email is already registered with us, please use 'forgotton password'");
            //         //console.log("This email is already registered with us, please login instead // forgot password")
            //         window.fullLoginObject = { email: returnedData.email.toString(), password: returnedData.password.toString(), id: returnedData.id.toString()}
            //     console.log("fullLoginObject data password = "+ fullLoginObject.password + "  " + "email "+fullLoginObject.email + "id " + fullLoginObject.id )
            //         //fullLoginObject = JSON.stringify(fullLoginObject)
            //
            // }

           function addCustomerObject(customerObject, practiceObject){
                var x = JSON.stringify(customerObject)
                var z = JSON.stringify(practiceObject)
                console.log("customer object inside addCustomerObject = "+ x.toString() + " " + "practice object = " + z.toString())

                $.ajax({
                    type: "GET",
                    dataType: 'json',
                    data: x,
                    contentType: "application/json; charset=utf-8",
                    url: "/login/customer/saveCustomerInDB/" + x,
                    success: function (data) {

                        document.getElementById("cus_num").value = data.id;
                        practiceObject.customerRefNum = data.id;
                        addPracticeObject( practiceObject)

                    }
                });

                    //console.log("made it to second ajax call data" + data.id + data.password)


                }

function addPracticeObject( practiceObject){
    var q = JSON.stringify(practiceObject)
    console.log("my addPracticeObject object looks like this = " + q.toString())
    console.log("my addPracticeObject practiceObject object looks like this = " + practiceObject)
    console.log("my practice object looks like this = "+ q.toString() )
    //stuck in inception - as I need to keep the ajax value alive, I cannot seem to
    //get the variable outside of the return response.
    //get the customer ID value from the hidden html
    temp = document.getElementById("cus_num").value;
    console.log("my temp object looks like this = "+ document.getElementById("cus_num").value )


    $.ajax({
        type: "GET",
        dataType: 'json',
        data: q,
        contentType: "application/json; charset=utf-8",
        url: "/login/practice/addPracticeObject/" + q,
        success: closeModal,

            // $('#myModalSignUp .close').click()
            // $('.modal-backdrop').hide();
            //alert("in here nowsd");
            // $.ajax({
            //
            //     url: "/view/practiceAssetList"
            //
            //
            //
            //
            //     //console.log("made it to second ajax call data" + data.id + data.password)
            //
            // });







        //console.log("made it to second ajax call data" + data.id + data.password)

   });

}



function closeModal(){
    $('#myModalSignUp').modal('toggle')
    $('#myModalSignUp .close').click()

    $('#exampleModalCenter').modal('toggle')

    //redirect page
    // $.ajax({
    //     type: "GET",
    //     url: "/view/practiceAssetList"
    //
    //
    //
    //
    //     //console.log("made it to second ajax call data" + data.id + data.password)
    //
    // });

}

//
function closeModal2(){
    $('#myModalSignUp').modal('toggle')
    //$('#myModalSignUp .close').click()
    alert("in here")
    //redirect page
    $.ajax({
        type: "GET",
        url: "/view/practiceAssetList"




        //console.log("made it to second ajax call data" + data.id + data.password)

    });

}


