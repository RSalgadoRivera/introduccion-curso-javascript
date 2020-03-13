"use strict";
/*
Programa que pida dos número y diga cuál es mayor, el menor o igual

y valide si se trata de un número
*/
var bandera = false;

var secuencia = "";
var numero1 = 0; 
var numero2 = 0;
do {
    numero1 = prompt('Introduce el primer número:', 0);
    numero2 = prompt('Introduce el segundo número:', 0);

    if ((isNaN(Number(numero1)) || numero1 < 0) || (isNaN(Number(numero2)) || numero2 < 0)) {
        secuencia = "introduce números correctos";
        alert(secuencia);
        bandera = true;
    } else if (Number(numero1) > Number(numero2)) {
        secuencia = numero1 + " es mayor que " + numero2;
        bandera = false;
    } else if (Number(numero1) < Number(numero2)) {
        secuencia = numero1 + " es menor que " + numero2;
        bandera = false;
    } else {
        secuencia = numero1 + " es igual que " + numero2;
        bandera = false;
    }

} while (bandera);

alert(secuencia);
