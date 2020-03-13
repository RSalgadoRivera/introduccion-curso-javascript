"use strict";
window.addEventListener('load', ()=>{

//JSON

var pelicula = {
    titulo: 'Batman v Superman',
    year: 2017,
    pais: 'Estados Unidos' 
};

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: 'Francia'},
    pelicula
];

for (const movie of peliculas) {
    //label pelicula
    let nodeLabel = document.createElement('label');
    //let textLabel = document.createTextNode("Pelicula");
    nodeLabel.appendChild(document.createTextNode("Pelicula")); 
    document.getElementById("peliculas").appendChild(nodeLabel);
    //Lista de elementos de la pelicula
    let nodeUl = document.createElement('ul'); 
    let nodeLiTitulo = document.createElement('li'); 
    let nodeLiYear = document.createElement('li'); 
    let nodeLiPais = document.createElement('li'); 
    nodeLiTitulo.appendChild(document.createTextNode(movie.titulo));
    nodeLiYear.appendChild(document.createTextNode(movie.year));
    nodeLiPais.appendChild(document.createTextNode(movie.pais));
    nodeUl.appendChild(nodeLiTitulo);
    nodeUl.appendChild(nodeLiYear);
    nodeUl.appendChild(nodeLiPais);
   document.getElementById("peliculas").appendChild(nodeUl);
    
}

});