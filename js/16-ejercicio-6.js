"use strict";

/* 
Que diga si un numero es par o impar
1. Ventana
2. validación
*/

var numero = 0;
var resultado = "";

do {
    numero = Number(prompt("Introduce un número", 0));

    if (!isNaN(numero)) {
        if (numero % 2 == 0) {
            resultado = "par";
            break;
        }else{
            resultado = "impar";
            break;
        }
    } 

} while (true);

console.log(resultado);