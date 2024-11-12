"use strict";
let nombresAstronautas = new Set();
let boton = document.getElementById("prueba"); //document.getElementById("prueba");
let muestraAstronautas = document.getElementById("muestraAstronautas");
let duplicado = document.getElementById("duplicado");
let duplicadoNumero = document.getElementById("duplicadoNumero");
let correctoNumero = document.getElementById("correctoNumero");
let contador = 0;
let contadorCorrecto = 0;
let intentos = 0;
if (boton != null) {
    boton.addEventListener("click", introduce);
}
function introduce() {
    let nombreNuevo = document.getElementById("nombreNuevo").value;
    intentos++;
    if (nombresAstronautas.has(nombreNuevo)) {
        contador++;
        duplicado.innerHTML = 'Elemento Repetido';
        duplicadoNumero.innerHTML = "Has metido el nombre repetido " + contador + " veces. Ha fallado : "
            + contador / intentos * 100 + " % ";
    }
    else {
        contadorCorrecto++;
        correctoNumero.innerHTML = "Has metido el nombre correctamente " + contadorCorrecto + " veces";
        duplicado.innerHTML = "";
        nombresAstronautas.add(nombreNuevo);
        let li = document.createElement("li");
        li.innerHTML = nombreNuevo;
        muestraAstronautas.appendChild(li);
    }
}
//# sourceMappingURL=coleccionesCampoTexto.js.map