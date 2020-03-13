"use strict";

/* 
Eventos
*/

//ratón
window.addEventListener('load',()=> {
    var bandera = true;

    const cambiarColor = () => {
        if (bandera) {
            boton.style.background = "green";
            bandera = false;
        } else {
            boton.style.background = "blue";
            bandera = true;
        }
       
    }
    
    var boton = document.querySelector("#boton");
    
    boton.addEventListener('click', ()=>{
        cambiarColor();
    });
    
    //Mouse over
    boton.addEventListener('mouseover',()=>{
       
            boton.style.padding = "10px";
        boton.style.border = "1px solid yellow";
    
    });
    
    //mouseout
    boton.addEventListener('mouseout',()=>{
       
        boton.style.padding = "5px";
        boton.style.border = "1px solid pink";
    
    });
    // eventos teclado
    
    var entrada = document.querySelector("#campoNombre");
    
    //focus
    
    entrada.addEventListener('focus',()=>{
    console.log("[focus] estás en el input");
    });
    
    
    //blur
    entrada.addEventListener('blur',()=>{
        console.log("[blur] saliste del input");
        });
    
    //keyDown
    entrada.addEventListener('keydown',()=>{
        console.log("[keydown] estás pulsando esta tecla ", String.fromCharCode(event.keyCode));
        });
    
    
    //keyPress
    entrada.addEventListener('keypress',()=>{
        console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));
        });
    
    //keyUp
    entrada.addEventListener('keyup',()=>{
        console.log("[keyup] tecla soltada ", String.fromCharCode(event.keyCode));
        });
    
    
    /* No jaló UnU
    function cambiarColor() {
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }
        return true;
    }*/
    


});



