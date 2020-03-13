"use strict";

/*
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array(todos sus elementos, cuerpo y consola)
3. Ordenarlo y mostrarlo (pagina y consola)
4. invertir su orden y mostarlo
5. mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario y si lo encuentra su indice  
*/

const imprimirArreglo = (arreglo, mensaje="El arreglo es:") => {

    document.write("<p><strong>"+mensaje+"</strong></p><ul>");
    console.log(mensaje+"\n");
    for (let i = 0; i < arreglo.length; i++) {
        document.write("<li>"+arreglo[i]+"</li>")
        console.log(arreglo[i]+" ");
    }
    document.write("</ul>");
    }

const buscarNumero = (arreglo, numero) => {
    let mensaje="";
    let indice = arreglo.findIndex(i => i == numero);
    //console.log("el indice es: "+indice);
    
    if (indice == -1) {
        mensaje = numero + " no se encuentra en el arreglo \n"+arreglo;
    } else {
        mensaje = numero + " se encuentra en la poscición "+ (indice + 1) + " del Arreglo: \n"+arreglo;
    }

    alert(mensaje);
}
    
var valores = []
alert("Por favor introduzca 6 numeros");
for (let i = 0; i < 6; i++) {
    valores.push(Number(prompt("elemento "+(i+1))));
}

imprimirArreglo(valores);
imprimirArreglo(valores.sort(), "El arreglo ordenado es:");
imprimirArreglo(valores.reverse(),"El arreglo al revés es:");

var numeroBuscar = Number(prompt("Escriba un numero a buscar en el arreglo:"));
buscarNumero(valores, numeroBuscar);