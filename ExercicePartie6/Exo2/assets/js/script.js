function checkNumber(number) {
    if (number % 15 == 0){
                return true;
            } else {
                return false;
            }
}

const NumberList = document.getElementById("NumberList");
let starNumber = 0;
let endNumber = 100;

for(let number = starNumber; number <= endNumber; number++) {
    if (checkNumber(number)) {
        NumberList.innerHTML +=`<li>...</li>`;
 
    } else {
        NumberList.innerHTML +=`<li>${number}</li>`;
    }
}


// console.log (checkBissextile(2077));  faire ça pour le test en console 
// 1 et 2 boucle for
// 3et 4 boucle for each 
// 5 et 6 boucle while