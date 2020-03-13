"use strict";
/*
muestre todos los números divisores de un valor
*/

var numero = Number(prompt("introduce un numero", 0));
var valores = "";

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        valores += i +" ";
    }
    
}

console.log(valores);