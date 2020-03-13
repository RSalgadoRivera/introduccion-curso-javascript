"use strict";

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado
*/

var bandera = true;

var suma = 0;
var cantidad = 0;
var numero = 0;
do {

    numero = Number(prompt("introduce un número:", 0));

    if (isNaN(numero) || numero < 0) {
        bandera = false;
    } else {
        suma += numero;
        cantidad++;
    }

} while (bandera);
alert("La suma de los números es: " + suma + "\n El promedio es: " + (suma / cantidad));