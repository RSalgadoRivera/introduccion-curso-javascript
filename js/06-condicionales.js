'use strict'

//condicional IF

/*var edad1 =20;
var edad2 =2;
if (edad1 > edad2) {
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log("edad dos es mayor que edad uno");
}*/

var edad = 10;
var nombre = 'David Súarez';

if (edad >= 18) {
    //es mayor de edad
    console.log(nombre + " tiene: " + edad + " años, es mayor de edad");
} else {
    console.log(nombre + " tiene: " + edad + " años, es menor de edad");
}

 /*
 operadores lógicos
 and= &&
 or= || 
 negación= !
 */

 /*var year = 2018;
 if (year !=2016) {
     console.log("no es 2016");
 }*/

 if (year == 2008 || (year >= 2018 && year == 2028)) {
     console.log("El año acaba en 8");
 }else{
     console.log("AÑO NO REGISTRADO");
 }


