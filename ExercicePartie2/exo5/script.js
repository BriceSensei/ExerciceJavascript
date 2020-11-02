let day = prompt("veuillez saisir un nombre entre 1 et 7")
let dayStr = "";

switch (day) {
    case '1':
        dayStr = "Lundi";
        break;
    case '2':
        dayStr = "Mardi";
        break;
    case '3':
        dayStr = "Mercredi";
        break;
    case '4':
        dayStr = "Jeudi";
        break;
    case '5':
        dayStr = "Vendredi";
        break;
    case '6':
        dayStr = "Samedi";
        break;
    case '7':
        dayStr = "Dimanche";
        break;
    default:
        dayStr = 'rien du tout';
        break;
}

alert("le numéro que vous avez choisi " + day + " correspond a " + dayStr);