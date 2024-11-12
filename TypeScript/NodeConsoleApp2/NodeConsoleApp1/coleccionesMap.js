"use strict";
let nombresAs = new Map();
let botonMap = document.getElementById("prueba"); // boton
let muestraAstronautasMap = document.getElementById("muestraAstronautas"); // ul
if (botonMap != null) {
    botonMap.addEventListener("click", introducceMap);
}
function introducceMap() {
    let nombreNuevo = document.getElementById("nombreNuevo").value; // type text
    if (nombresAs.has(nombreNuevo)) {
        nombresAs.set(nombreNuevo, nombresAs.get(nombreNuevo) + 1);
    }
    else {
        nombresAs.set(nombreNuevo, 1);
    }
    let li = document.createElement("li");
    li.innerHTML = nombreNuevo;
    muestraAstronautasMap.appendChild(li);
    for (let [nombre, valor] of nombresAs) {
        console.log(nombre + ": " + valor + "<br>");
    }
}
//# sourceMappingURL=coleccionesMAP.js.map