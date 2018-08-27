alert("test");

function confirmPassword() {

    var password = document.getElementById("pwd")
        , confirm_password = document.getElementById("pwdConfirmed")
        , submit = document.getElementById("submitBtn");

    console.log(document.getElementById("password").value);
    if (password.value != confirm_password.value) {

        confirm_password.style.borderColor = "red";
        confirm_password.setCustomValidity('Please confirm your password');

        document.getElementById("submitBtnPersonalDetails").disabled = true;
        submit.disabled = true;

    }else{
        submit.disabled = true;
    }

}