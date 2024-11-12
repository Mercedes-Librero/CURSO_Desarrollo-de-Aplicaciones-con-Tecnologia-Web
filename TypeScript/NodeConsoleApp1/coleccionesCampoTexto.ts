let nombresAstronautas = new Set<string>();

let boton = (<HTMLInputElement>document.getElementById("prueba")); //document.getElementById("prueba");
let muestraAstronautas = (<HTMLInputElement>document.getElementById("muestraAstronautas"));
let duplicado = (<HTMLInputElement>document.getElementById("duplicado"));
let duplicadoNumero = (<HTMLInputElement>document.getElementById("duplicadoNumero"));
let correctoNumero = (<HTMLInputElement>document.getElementById("correctoNumero"));

let contador: number = 0;
let contadorCorrecto: number = 0;
let intentos: number = 0;

if (boton != null) {
    boton.addEventListener("click", introduce);
}

function introduce() {
    let nombreNuevo = (<HTMLInputElement>document.getElementById("nombreNuevo")).value;
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





