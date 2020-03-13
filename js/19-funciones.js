"use strict";

//Funciones
//una función es una agrupación reutilizable de un conjunto de instrucciones

function claculadora(numero1, numero2, mostrar = false) {

    if (mostrar) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: " + (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));
        console.log("*********************");
    }

    //return "Hola soy la calculadora!!";
}

//console.log(claculadora(),claculadora(),claculadora(),claculadora());

//invocar a la función



/*for (let i = 0; i <= 10; i++) {
    claculadora(i,8);
}*/

