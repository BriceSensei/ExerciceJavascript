function changerCouleur(value) {

    let texte = document.getElementById("texte");

    // document.getElementById("texte").style.color = `${value}`;
    // (if et else pour remettre le texte d'origine)

    if (texte.style.color == value) {
        texte.style.color = 'initial';
    } else {
        texte.style.color = value;
    }
}

function gras() {

    let texte = document.getElementById("texte");

    if (texte.style.fontWeight == 'bold') {
        texte.style.fontWeight = 'normal';
    } else {
        texte.style.fontWeight = 'bold';
    }

}

function ita() {

    let texte = document.getElementById("texte");

    if (texte.style.fontStyle == 'italic') {
        texte.style.fontStyle = 'normal';
    } else {
        texte.style.fontStyle = 'italic';
    }

}