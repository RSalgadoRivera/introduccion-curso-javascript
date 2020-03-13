"use strict";


//BOM - Browser Object Model

function getBOM() {
    console.log("ventana");
    console.log(window.innerHeight);//alto
    console.log(window.innerWidth);//ancho
    console.log("pantalla");
    console.log(screen.height);//alto
    console.log(screen.width);//ancho
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
  window.open(url,"","width=400, heigth=300")  
}

getBOM();


