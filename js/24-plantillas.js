"use strict";

//plantillas de texto

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

var texto = `

<h1>Hola que tal</h1>
<h3>mi nombre es: ${nombre} ${apellidos}</h3>
`;

document.write(texto);