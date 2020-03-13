"use strict";

/*
calculadora
-pida numeros
-si está mal volver a pedir
-mostrar en el cuerpo de la página , alerta y consola
el resultado de:
*sumar
*restar
*multiplicar
*dividir 
ésas dos cifras
*/

var numero1 = 0, numero2 = 0, resultado = "";

do {

    numero1 = Number(prompt('Introduce el primer número:', 0));
    numero2 = Number(prompt('Introduce el segundo número:', 0));
    if (isNaN(Number(numero1)) || (isNaN(Number(numero2)) || numero2 == 0)) {
        alert("introduce números correctos");
    } else {
        resultado = "Resultado de las operaciones con " + numero1 + " y " + numero2 + "\n la suma es: " + (numero1 + numero2)
            + " \n la resta es: " + (numero1 - numero2) + "\n la multiplicación es: " + (numero1 * numero2) + "\n la divición es: " + (numero1 / numero2);
        break;
    }

} while (true);

console.log(resultado);
alert(resultado);
document.write("<p>" + resultado + "</p>");
