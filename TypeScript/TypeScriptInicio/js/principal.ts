// FUNCION SUMAR
function addNumbers(x: number, y: number) {
        return x + y;
    }

    console.log(addNumbers(3, 6));
/////////////////////////////////////////////////

// funcion PAR IMPAR
    let numero = 9;
    parImpar(numero);

    function parImpar(x: number) {
        let resultado = x % 2;

        if (resultado == 0) {
            document.write("Par");
        } else {
            document.write("Impar");
        }
    }
/////////////////////////////////////////////////

// funcion CONCATENAR
    function concatenar(nombre: string, apellido: string) {
        return nombre + apellido;
    }

    let nombreEjemplo = "Mercedes ";
    let apellidoEjemplo = " Librero";
    let nombreCompleto = `Nombre: ${nombreEjemplo} Apellido: ${apellidoEjemplo}`;

    console.log(concatenar(nombreEjemplo, apellidoEjemplo));
document.write(nombreCompleto);

////////////////////////////////////////////////////
// SUMA RESTA MULTIPLICA

    // Funciones para COGER y PONER valor 
        function tomaVal(nombreOperando: string) {
            return Number((<HTMLInputElement>document.getElementById(nombreOperando)).value);
        }

        function tomaValTexto(nombreOperando: string) {
            return (<HTMLInputElement>document.getElementById(nombreOperando)).value;
        }
        function ponVal(elemento: string, valor: number) {
            (<HTMLInputElement>document.getElementById(elemento)).value = valor.toString();
}

        function ponValTexto(elemento: string, valor: string) {
            (<HTMLInputElement>document.getElementById(elemento)).value = valor.toString();
        }

    // Funcion para dar EVENTOS
        function ponEvento(nombreboton: string, nombreEvento: string, funcion) {
            let botonSumar = document.getElementById(nombreboton);
            botonSumar.addEventListener(nombreEvento, funcion);
}

    // funcion crear <li>
        function creaLi(contenido: string) {
            let elementoLi = document.createElement("li");
            elementoLi.textContent = contenido;
            return elementoLi;
        }


    // OPERACIONES
        function pulse() {
            let operando1 = tomaVal("operando1");
            let operando2 = tomaVal("operando2");
            switch (this.id) {
                case "sumar": ponVal("resultado", operando1 + operando2); break;
                case "restar": ponVal("resultado", operando1 - operando2); break;
                case "multiplicar": ponVal("resultado", operando1 * operando2); break;
            }
}

    ponEvento("sumar", "click", pulse);
    ponEvento("restar", "click", pulse);
    ponEvento("multiplicar", "click", pulse);

////////////////////////////////////////////////////
// Buscar numeros inferiores
    ponEvento("buscarInferior", "click", dameInferior);
    var paraInferior = tomaVal("paraInferior");

    function dameInferior() { 
        let paraInferior = tomaVal("paraInferior");
        let list = document.getElementById('lista');

        for (let contador = 1; contador < paraInferior; contador++) {
            list.appendChild(creaLi(contador.toString()));

        }
    }
////////////////////////////////////////////////////
// Ciudad ELEGIDA y CUANTAS

ponEvento("provincia", "change", provinciaSelecionada);
var contador:number = 0;

function provinciaSelecionada() {
    let ciudad = tomaValTexto("provincia");

    if (ciudad !== "0") {
        contador++;
        ponValTexto("ultimaSeleccion", ciudad);
        ponVal("numeroSeleccion", contador);

    }
    
}