"use strict";

//Funciones anonimas
//Es una función que no tiene nombre

/*var pelicula = function (nombre) {
    return "La película es: "+nombre;
}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function (dato) {
    console.log("la suma es: ", dato);
},
function (dato) {
    console.log("la suma por dos es: ",(dato*2));
});

console.log("-----------------");
//funciones flecha

sumame(7, 3, (dato) => {
    console.log("la suma es: ", dato);
},
dato =>{
    console.log("la suma por dos es: ",(dato*2));
});


