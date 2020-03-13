"use strict";

window.addEventListener('load', () => {

    //Timers
    /* setTimeout -> se ejecuta una vez*/

    function intervalo() {
        var tiempo = setInterval(() => {
            let estilo = getComputedStyle(document.querySelector('h1'));
            let encabezado = document.querySelector('h1');

            if (estilo.fontSize != "50px") {
                encabezado.style.fontSize = "50px";
            } else {
                encabezado.style.fontSize = "30px";
            }
        }, 2000);
        return tiempo;
    }


    var tiempo = intervalo();

    var stop = document.querySelector("#stopButton");

    stop.addEventListener("click", () => {
        alert("has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#startButton");
    start.addEventListener("click", () => {
        alert("has iniciado el intervalo en bucle");
        tiempo = intervalo();
    });

});




