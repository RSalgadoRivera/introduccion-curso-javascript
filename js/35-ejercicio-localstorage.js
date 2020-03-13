"use strict";

var formulario = document.getElementById('formPeliculas');

console.log(formulario);

formulario.addEventListener('submit', function () {
    
    var titulo = document.getElementById("addpelicula").value;
    if (titulo.length > 0) {
        localStorage.setItem(titulo, titulo);
    }
});

document.getElementById("formEliminarPeliculas")
.addEventListener('submit',()=>{

let nombreEliminar = document.getElementById("eliminarpelicula").value;

for(var i in localStorage){
    if (nombreEliminar == localStorage[i]) {
        localStorage.removeItem(nombreEliminar);
    }
}

});

var ul = document.getElementById("listar");

for(var i in localStorage){
    console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}