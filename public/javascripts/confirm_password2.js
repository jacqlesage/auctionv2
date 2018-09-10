document.getElementById("submitBtnPersonalDetails").disabled = true;

function confirmPassword() {

    var password = document.getElementById("pwd")
        , confirm_password = document.getElementById("pwdConfirmed")
        , submit = document.getElementById("submitBtnPersonalDetails");

    console.log(document.getElementById("password").value);
    if (password.value != confirm_password.value) {

        confirm_password.style.borderColor = "red";
        submit.disabled = true;

    }else{
        confirm_password.style.borderColor = "green";
        submit.disabled = false;
    }

}