let userNote = prompt("Mettez une note entre 0 et 10 compris");

if (userNote >= 0 && userNote < 3) {
    alert("C'est Nul.");
}
else if (userNote >= 3 && userNote < 6) {
    alert("C'est Moyen.");
}
else if (userNote >= 6 && userNote < 8) {
    alert("C'est Assez Bien.");
}
else if (userNote >= 8 && userNote <= 9) {
    alert("C'est Bien.");
}
else if (userNote == 10) {
    alert("C'est Excellent.");
} 
else { 
    alert("Veuillez saisir une note entre 0 et 10 compris.");
}