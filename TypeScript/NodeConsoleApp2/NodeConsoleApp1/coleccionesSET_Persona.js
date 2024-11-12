"use strict";
// S E T
// ---------------------------------------------------------------------------------------------------------------
// Crear un conjunto con objetos del tipo persona, La clase persona esta definida por dos campos nombre y edad
// Estos dos campos ser�n informados desde una p�gina html.Y creados cuando se pulsa.
// La colecci�n a usar ser� del tipo Set < Persona > que ir� almacenando las personas que introduzcamos. Da igual si ya existe o no.
// Cada vez que introduzcamos una persona en el Set quiero que salga la edad media de las personas que hemos introducido.
class PersonaSet {
    constructor() {
        this.nombre = "";
        this.edad = 0;
    }
}
let persona = new Set();
let botonPersona = document.getElementById("prueba");
let edadMedia = document.getElementById("edadMedia");
//let muestraAstronautas = (<HTMLInputElement>document.getElementById("muestraAstronautas"));
//let duplicado = (<HTMLInputElement>document.getElementById("duplicado"));
//let correctoNumero = (<HTMLInputElement>document.getElementById("correctoNumero"));
if (botonPersona != null) {
    botonPersona.addEventListener("click", guarda);
}
function guarda() {
    let nuevaPersona = new PersonaSet();
    nuevaPersona.nombre = document.getElementById("nombreNuevo").value;
    nuevaPersona.edad = Number(document.getElementById("edadNuevo").value);
    persona.add(nuevaPersona);
    let edades = [];
    persona.forEach(persona => {
        edades.push(persona.edad);
    });
    let mediaEdades = (edades.reduce((anterior, actual) => anterior + actual, 0)) / edades.length;
    edadMedia.innerHTML = `Edad media: ${mediaEdades}`;
}
//# sourceMappingURL=coleccionesSET_Persona.js.map