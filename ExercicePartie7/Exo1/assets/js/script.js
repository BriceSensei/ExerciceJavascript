
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let boutonElement = document.getElementById("boutonElement")

function brice() {
    let result = number1.value * number2.value;
    console.log (result);
    // alert(result);
    // `<button type="button" class="btn btn-primary"> ${result} </button>`
    boutonElement.innerHTML += `<button type="button" class="btn btn-danger"> ${result} </button>`;
}