"use strict";

//DOM document object model

function cambiaColor(color) {
    caja.style.background = color;
}


//Conseguir elementos con un ID concreto
//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");

caja.innerHTML = "¡texto en la caja desde JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

//conseguir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div');

console.log(todosLosDiv);

/*for (var valor in todosLosDiv) {
    if (typeof todosLosDiv[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);

        parrafo.prepend(texto);

        document.querySelector("#miSeccion").append(parrafo);
    }
}*/

for (let i = 0; i < todosLosDiv.length; i++) {
    if (typeof todosLosDiv[i].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[i].textContent);

        parrafo.prepend(texto);

        document.querySelector("#miSeccion").append(parrafo);
    }
    
}


//conseguir elemento por su clase css

var divsRojos = document.getElementsByClassName("rojo");
/*for (let i = 0; i < divsRojos.length; i++) {
    divsRojos[i].style.background="red";
    
}*/

for (const div of divsRojos) {
    div.style.background="red";
}

//Query selector

//var id = document.querySelector("#encabezado");
var id = document.querySelectorAll(".rojo");
console.log(id);

/*var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);*/


//console.log(divsRojos);

/* 
Nota:
se usa # para id y . para clase
*/
