function checkNumber(Number) {
    if (((Number % 4 == 0) && (Number % 100 != 0)) || (Number % 400 == 0)){
                return true;
            } else {
                return false;
            }
}

const NumberList = document.getElementById("NumberList");
let starNumber = 0;
let endNumber = 100;

for(let Number = 0; year <= 100; Number++) {
    if (checkNumber(Number)) {
        NumberList.innerHTML +=`<li class="text-danger">${Number}</li>`;

    } else {
        NumberList.innerHTML +=`<li>${Number}</li>`;
    }
}


// console.log (checkBissextile(2077));  faire ça pour le test en console 
// 1 et 2 boucle fort 
// 3et 4 boucle for each 
// 5 et 6 boucle while