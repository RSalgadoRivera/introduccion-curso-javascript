'use strict'

//SWITCH
var valorNumero = 18;
var imprime = "";

switch (valorNumero) {
    case 18:
        imprime = "has ganado primer premio";
        break;

        case 25:
            imprime = "has ganado segundo premio";
        break;

        case 60:
            imprime = "has ganado tercer premio";
        break;

    default:
        imprime = "no ganaste premio";
        break;
}

console.log(imprime);