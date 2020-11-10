function verifyPassword() {

    let elementpassword = document.getElementById("password");
    let elementpasswordCorfirm = document.getElementById("passwordConfirm");

    if (elementpassword.value == elementpasswordCorfirm.value) {
        elementpassword.className = "greenb";
        elementpasswordCorfirm.className = "greenb";

    } else {
        elementpassword.className = "redb";
        elementpasswordCorfirm.className = "redb";
    }

}