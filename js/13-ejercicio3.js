"use strict";

/*
mostrar todos números entre dos numeros
*/

var bandera = false;
var cantidad = 0;
var numero1 = 0;
var numero2 = 0;
var secuencia = "";
do {
    numero1 = parseInt(prompt('Introduce el primer número:', 0));
    numero2 = parseInt(prompt('Introduce el segundo número:', 0));

    if (isNaN(Number(numero1)) || isNaN(Number(numero2))) {
        secuencia = "introduce números correctos";
        alert(secuencia);
        bandera = true;
    } else if (Number(numero1) > Number(numero2)) {
        cantidad = numero1 - numero2;
        secuencia = "cadena desde " + numero2 + " hasta " + numero1 + ": ";
        for (let i = 0; i <= cantidad; i++) {
            secuencia += (numero2 + i) + " ";
        }
        bandera = false;
    } else if (Number(numero1) < Number(numero2)) {
        cantidad = numero2 - numero1;
        secuencia = "cadena desde " + numero1 + " hasta " + numero2 + ": ";
        for (let i = 0; i <= cantidad; i++) {
            secuencia += (numero1 + i) + " ";
        }
        bandera = false;
    } else {
        secuencia = numero1 + " es igual que " + numero2;
        bandera = false;
    }

} while (bandera);

console.log(secuencia);
