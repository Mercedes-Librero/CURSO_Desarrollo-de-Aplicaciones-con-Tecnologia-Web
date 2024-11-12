// S E T

// ---------------------------------------------------------------------------------------------------------------
// Crear un conjunto con objetos del tipo persona, La clase persona esta definida por dos campos nombre y edad
// Estos dos campos serán informados desde una página html.Y creados cuando se pulsa.
// La colección a usar será del tipo Set < Persona > que irá almacenando las personas que introduzcamos. Da igual si ya existe o no.
// Cada vez que introduzcamos una persona en el Set quiero que salga la edad media de las personas que hemos introducido.

class PersonaSet {
    nombre: string = "";
    edad: number = 0;
}

let persona = new Set<PersonaSet>();

let botonPersona = (<HTMLInputElement>document.getElementById("prueba"));
let edadMedia = (<HTMLInputElement>document.getElementById("edadMedia"));
//let muestraAstronautas = (<HTMLInputElement>document.getElementById("muestraAstronautas"));
//let duplicado = (<HTMLInputElement>document.getElementById("duplicado"));
//let correctoNumero = (<HTMLInputElement>document.getElementById("correctoNumero"));


if (botonPersona != null) {
    botonPersona.addEventListener("click", guarda);
}

function guarda() {
  
    let nuevaPersona = new PersonaSet();

    nuevaPersona.nombre = (<HTMLInputElement>document.getElementById("nombreNuevo")).value;
    nuevaPersona.edad = Number((<HTMLInputElement>document.getElementById("edadNuevo")).value);

    persona.add(nuevaPersona);

    let edades: number[] = [];

    persona.forEach(persona => {
        edades.push(persona.edad);
    });

    let mediaEdades = (edades.reduce((anterior, actual) => anterior + actual, 0)) / edades.length;

    edadMedia.innerHTML = `Edad media: ${mediaEdades}`;

}





