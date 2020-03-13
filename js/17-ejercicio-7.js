"use strict";


/* 
tabla de multlipliacar de un numero introducido
*/

var numero = 0;

    do {
        numero = parseInt(prompt("Introduce un número", 0));
        if (!isNaN(numero)) {
            for (let i = 1; i <= 10; i++) {
                console.log(i + " * " + numero + " = " + (i * numero));
            }
            break;
        }
    } while (true);