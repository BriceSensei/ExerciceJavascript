function checkBissextile(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                return true;
            } else {
                return false;
            }
}

const yearList = document.getElementById("yearList");
let starYear = 2020;
let endYear = 2030;

for(let year = 2020; year <= 2030; year++) {
    if (checkBissextile(year)) {
        yearList.innerHTML +=`<li class="text-danger">${year}</li>`;

    } else {
        yearList.innerHTML +=`<li>${year}</li>`;
    }
}


// console.log (checkBissextile(2077));  faire ça pour le test en console 
// 1 et 2 boucle fort 
// 3et 4 boucle for each 
// 5 et 6 boucle while