'use strict';

//local storage

window.onload = () => {
//comprobar disponibilidad de localstorage
if (typeof(Storage) != 'undefined') {
    console.log("localstorage disponible");
}else{
    console.log("inconpatible con localstorage");
}

//guardar datos
localStorage.setItem("titulo","curso de javaScript");

//recuperar elemento
console.log(localStorage.getItem("titulo"));
document.getElementById('tituloPagina').innerHTML = localStorage.getItem("titulo");
//guardar objeto
var user = {
    nombre: "Rodo",
    email: "rodo@correo.org",
    web: "elrodo.org"
};

localStorage.setItem("usuario",JSON.stringify(user));

//recuperar objeto

var userjs = JSON.parse(localStorage.getItem('usuario'));
console.log(userjs);

document.getElementById('tituloPagina').append(" " + userjs.web);
document.getElementById('datos').append(userjs.nombre+" "+userjs.email+" " + userjs.web);

localStorage.removeItem("usuario");

}