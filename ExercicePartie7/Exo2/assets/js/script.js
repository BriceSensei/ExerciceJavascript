let firstNumber = 8;
let secondNumber = 2;
let result = 0;

let listeNumber = document.getElementById("liste");

function brice() {
    result = firstNumber / secondNumber;
    firstNumber = result;
    return result;
}

while (brice() > 1) {
    listeNumber.innerHTML += `<li>${result}</li>`;
    console.log(result);
}

