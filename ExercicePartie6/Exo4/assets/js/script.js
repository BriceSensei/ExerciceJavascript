let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
const flavie = document.getElementById("flavie");



days.forEach(element => {
    let flavieButton = document.createElement("button");
flavieButton.classList.add("btn" , "btn-primary" , "m-1");
if(element == 'Samedi' || element == 'Dimanche'){
    flavieButton.classList.add("btn-warning"); 
}
flavieButton.textContent = element;
flavie.appendChild(flavieButton);   
});