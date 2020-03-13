"use-strict";

window.addEventListener('load', () => {

    function processForm(e) {

        let parrafo = document.createElement("p");

        let elementos = [
            form.elements.namedItem("nombre").value,
            form.elements.namedItem("apellido").value,
            form.elements.namedItem("edad").value];

        console.log(typeof elementos[2]);
        console.log(elementos[2].length);

        var hasNumber = /\d/;
        

        if (elementos[0].length > 60 || elementos[0].length < 4 || hasNumber.test(elementos[0])) {
            alert("El nombre " + elementos[0] + " debe se tener más de 4 carácteres y menos de 100 \n y no ser un numero");
        } else if (elementos[1].length > 60 || elementos[1].length < 4 || hasNumber.test(elementos[1])) {
            alert("El apellido " + elementos[1] + " debe se tener más de 4 carácteres y menos de 100 \n y no ser un numero");
        } else if (isNaN(Number(elementos[2])) || elementos[2]>100 || elementos[2]<0) {
            alert("La edad " + elementos[2] + " debe de ser mayor a 0 y menor a 100 \n y ser un numero");
        } else {

            for (let i = 0; i < elementos.length; i++) {
                //box_dashed.append(elementos[i]);

                parrafo.appendChild(document.createTextNode(elementos[i]));
                parrafo.append(document.createElement("br"));
            }

            box_dashed.append(parrafo);

            box_dashed.append(document.createElement("hr"));

            box_dashed.style.display = "block";

        }

        if (e.preventDefault) e.preventDefault();

        return false;
    }

    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    var form = document.querySelector('#formulario');
    form.addEventListener("submit", processForm);
});