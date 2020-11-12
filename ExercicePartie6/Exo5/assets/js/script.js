let firstNumber = 5;
let secondNumber = 6;
let result = 0;

let listeNumber = document.getElementById("liste");

function brice() {
    result = firstNumber * secondNumber;
    secondNumber = result;
    return result;
}

while (brice() < 250) {
    listeNumber.innerHTML += `<li>${result}</li>`;
    console.log(result);
}
