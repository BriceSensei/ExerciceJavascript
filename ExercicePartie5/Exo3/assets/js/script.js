function Name() {
    let name = document.getElementById("name");
    let regexname = new RegExp(/^[A-Za-z]+$/);

    if (regexname.test(name.value)){
        name.style.borderColor = "green";
        document.getElementById = "(errorName)" 
    }
    else {
        name.style.borderColor = "red";
    } 
}
function Age() {
    let age = document.getElementById("age");
    let regexage = new RegExp(/^[0-9-/]+$/);

    if (regexage.test(age.value)){
        age.style.borderColor = "green";
    }
    else {
        age.style.borderColor = "red";
    } 
}
function Mail() {
    let mail = document.getElementById("mail");
    let regexmail = new RegExp(/^[A-Za-z0-9-_.@*!,;?]+$/);

    if (regexmail.test(mail.value)){
        mail.style.borderColor = "green";
    }
    else {
        mail.style.borderColor = "red";
    } 
}