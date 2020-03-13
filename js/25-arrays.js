"use strict";

//Arrays, arreglos, vectores

var nombre = "Rodo";
var nombres = ["Víctor", "Juan", "José"];

var lenguajes = new Array("PHP", "JS", "Java");

/*console.log(nombres);
console.log(lenguajes);*/

//console.log(nombres.length);

/*
var elemento= parseInt(
    prompt("Qué elemento del array quieres?",0)
);
if (elemento >= nombres.length) {
    alert("debes introducir un valor entre 0 y "+nombres.length);
} else {
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

*/

document.write("<h2><Lenguajes de programación/h2>");
/*for (let i = 0; i < lenguajes.length; i++) {
    document.write("<h3>"+lenguajes[i]+"</h3>");
}*/

lenguajes.forEach((elemento, indice) => {
    document.write("<h3>"+indice+" "+elemento+"</h3>");
});

console.log("for in");
for (let lenguaje in lenguajes) {
    console.log(lenguajes[lenguaje]);//usa el indice
}

//busqueda

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda);

var busquedaIndice = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busquedaIndice);

var precios = [10, 20, 50, 80, 12];

var busquedaPrecios = precios.some(precio => precio >= 20);

console.log(busqueda);