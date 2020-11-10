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

// 1 et 2 boucle fort 
// 3et 4 boucle for each 
// 5 et 6 boucle while