"use strict";

//Fetch (AJAX) y peticiones a servicios 

var div_usuarios = document.getElementById("usuarios");
var div_janet = document.getElementById("janet");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();

    }).then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
        return getInfo();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

function getJanet() {
    return fetch('https://reqres.in/api/users/2')
}

function getUsuarios() {
    return fetch('https://reqres.in/api/users')
}

function getInfo() {
    var persona = {
        nombre: "Rodolfo",
        apellido: "Salgado",
        correo: "rodo@correo.org"
    };
    return new Promise((resolve, reject) => {
        var persona_string = "";
        setTimeout(() => {
            var persona_string = JSON.stringify(persona);
            if (typeof persona_string != 'string' || persona_string == "") return reject('error');
            return resolve(persona_string);
        }, 3000);    
    });
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';

    });
}

function mostrarJanet(user) {

    console.log(user);

    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.id + " " + user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = 'none';

}