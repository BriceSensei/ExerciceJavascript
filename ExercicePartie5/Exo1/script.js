function verifyPassword() {

    let elementpassword = document.getElementById("password");
    let elementpasswordCorfirm = document.getElementById("passwordConfirm");

    if (elementpassword.value == elementpasswordCorfirm.value) {
        elementpassword.style.borderColor = "green"
        elementpasswordCorfirm.style.borderColor = "green"

    } else {
        elementpassword.style.borderColor = "red"
        elementpasswordCorfirm.style.borderColor = "red"

    }

}