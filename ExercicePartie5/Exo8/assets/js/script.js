let houleParent = document.getElementById("parentForm");
let houleBtn = document.getElementById("btnTxt");

houleBtn.onclick = houleDuplicate;

function houleDuplicate() {
    let houleNode = document.getElementById("houleNode");
    let houleNodeCopy = houleNode.cloneNode(true);
    // console.log(houleNodeCopy);

    houleParent.appendChild(houleNodeCopy);
} 
// exo de la partie 6
// 1 et 2 boucle fort 
// 3et 4 boucle for each 
// 5 et 6 boucle while