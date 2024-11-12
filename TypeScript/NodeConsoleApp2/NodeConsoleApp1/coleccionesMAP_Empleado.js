"use strict";
// M A P
// Creamos una nueva Clase que se denominara empleado, es como la clase Persona, pero anadimos identificacion que no se repetide y 
// otro campo mas denominado experiencia, que es numerico.
// Al igual que en el ejercicio anterior, quiero que al introducir personas, comprobemos que la identificaci�n no existe antes de 
// introducir el Empleado.Si el empleado ya existe, no se introducir� uno nuevo. 
// Para los que sean validos, quiero saber la edad media de mis empleados y tambien la experiencia acumulada(la suma de las
// experiencias de todos los empleados) Este segundo ejercicio deber� de hacerse con Map<string, Empleado>
class empleado {
    constructor() {
        this.identificacion = "";
        this.nombre = "";
        this.edad = 0;
        this.experiencia = 0;
    }
}
let empleadoMAP = new Map();
let edadMediaE = document.getElementById("edadMedia");
let experienciaTotal = document.getElementById("experienciaTotal");
let experiencia = document.getElementById("experienciaNuevo");
let identificador = document.getElementById("identificadorNuevo");
experiencia.disabled = false;
identificador.disabled = false;
let botonEmpleado = document.getElementById("prueba");
//let edadMedia = (<HTMLInputElement>document.getElementById("edadMedia"));
//let muestraAstronautas = (<HTMLInputElement>document.getElementById("muestraAstronautas"));
//let duplicado = (<HTMLInputElement>document.getElementById("duplicado"));
//let correctoNumero = (<HTMLInputElement>document.getElementById("correctoNumero"));
if (botonEmpleado != null) {
    botonEmpleado.addEventListener("click", guardaEmpleado);
}
function guardaEmpleado() {
    let nuevoEmpleado = new empleado();
    nuevoEmpleado.nombre = document.getElementById("nombreNuevo").value;
    nuevoEmpleado.edad = Number(document.getElementById("edadNuevo").value);
    nuevoEmpleado.identificacion = identificador.value;
    nuevoEmpleado.experiencia = Number(experiencia.value);
    if (!empleadoMAP.has(nuevoEmpleado.identificacion)) {
        empleadoMAP.set(nuevoEmpleado.identificacion, nuevoEmpleado);
        let edades = [];
        let experiencia = [];
        empleadoMAP.forEach(empleadoMAP => {
            edades.push(empleadoMAP.edad);
            experiencia.push(empleadoMAP.experiencia);
        });
        let mediaEdades = (edades.reduce((anterior, actual) => anterior + actual, 0)) / edades.length;
        edadMediaE.innerHTML = `Edad media: ${mediaEdades}`;
        let experienciaT = (experiencia.reduce((anterior, actual) => anterior + actual, 0));
        experienciaTotal.innerHTML = `Experiencia total: ${experienciaT}`;
    }
    else {
        console.log("error");
    }
}
//# sourceMappingURL=coleccionesMAP_Empleado.js.map