"use strict";

var categorias = ['Acción','Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

/*console.log(cine[0][1]);
console.log(cine[1][2]);*/

var elemento = prompt("Introduce tu película:");

peliculas.push(elemento);//agrega un elemento al final del arreglo

console.log(peliculas);

peliculas.pop();//elemina el ultimo elemento del arreglo

var indice = peliculas.indexOf('La vida es bella');

if (indice >-1) {
    peliculas.splice(indice,1);
}

console.log(peliculas);

peliculas=peliculas.join();// arreglo a String separado por comas

console.log(peliculas);

peliculas = peliculas.split(",");// String a arreglo

console.log(peliculas);

peliculas = peliculas.sort();// ordenar el arreglo

console.log(peliculas);

peliculas = peliculas.reverse();//poner al revés el arreglo

console.log(peliculas);


