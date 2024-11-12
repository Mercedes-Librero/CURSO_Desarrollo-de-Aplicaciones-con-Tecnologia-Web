// FUNCION SUMAR
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
/////////////////////////////////////////////////
// funcion PAR IMPAR
var numero = 9;
parImpar(numero);
function parImpar(x) {
    var resultado = x % 2;
    if (resultado == 0) {
        document.write("Par");
    }
    else {
        document.write("Impar");
    }
}
/////////////////////////////////////////////////
// funcion CONCATENAR
function concatenar(nombre, apellido) {
    return nombre + apellido;
}
var nombreEjemplo = "Mercedes ";
var apellidoEjemplo = " Librero";
var nombreCompleto = "Nombre: ".concat(nombreEjemplo, " Apellido: ").concat(apellidoEjemplo);
console.log(concatenar(nombreEjemplo, apellidoEjemplo));
document.write(nombreCompleto);
////////////////////////////////////////////////////
// SUMA RESTA MULTIPLICA
// Funciones para COGER y PONER valor 
function tomaVal(nombreOperando) {
    return Number(document.getElementById(nombreOperando).value);
}
function tomaValTexto(nombreOperando) {
    return document.getElementById(nombreOperando).value;
}
function ponVal(elemento, valor) {
    document.getElementById(elemento).value = valor.toString();
}
function ponValTexto(elemento, valor) {
    document.getElementById(elemento).value = valor.toString();
}
// Funcion para dar EVENTOS
function ponEvento(nombreboton, nombreEvento, funcion) {
    var botonSumar = document.getElementById(nombreboton);
    botonSumar.addEventListener(nombreEvento, funcion);
}
// funcion crear <li>
function creaLi(contenido) {
    var elementoLi = document.createElement("li");
    elementoLi.textContent = contenido;
    return elementoLi;
}
// OPERACIONES
function pulse() {
    var operando1 = tomaVal("operando1");
    var operando2 = tomaVal("operando2");
    switch (this.id) {
        case "sumar":
            ponVal("resultado", operando1 + operando2);
            break;
        case "restar":
            ponVal("resultado", operando1 - operando2);
            break;
        case "multiplicar":
            ponVal("resultado", operando1 * operando2);
            break;
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
    var paraInferior = tomaVal("paraInferior");
    var list = document.getElementById('lista');
    for (var contador_1 = 1; contador_1 < paraInferior; contador_1++) {
        list.appendChild(creaLi(contador_1.toString()));
    }
}
////////////////////////////////////////////////////
// Ciudad ELEGIDA y CUANTAS
ponEvento("provincia", "change", provinciaSelecionada);
var contador = 0;
function provinciaSelecionada() {
    var ciudad = tomaValTexto("provincia");
    if (ciudad !== "0") {
        contador++;
        ponValTexto("ultimaSeleccion", ciudad);
        ponVal("numeroSeleccion", contador);
    }
}
//# sourceMappingURL=principal.js.map