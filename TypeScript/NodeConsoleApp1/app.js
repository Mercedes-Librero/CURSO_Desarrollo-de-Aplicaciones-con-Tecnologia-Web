"use strict";
////////////////////////////////////////////////////////////////////////////////////////
// Clase Persona y mostrar por pantalla
class Persona {
    constructor(edad, nombre, apellido, sexo) {
        this.edad = 0;
        this.nombre = "";
        this.apellido = "";
        this.sexo = "";
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }
    imprime() {
        return "Objeto de nombre: " + this.nombre
            + " " + this.apellido
            + " de edad: " + this.edad.toString()
            + " y sexo: " + this.sexo + "<br />";
    }
}
let Maria = new Persona(18, "Maria", "dasf", "mujer");
let Adrian = new Persona(21, "Adria", "Cruz", "hombre");
let Mercedes = new Persona(50, "Mercedes", "Librero", "mujer");
document.writeln("<hr>");
document.writeln(Maria.imprime());
document.writeln(Adrian.imprime());
document.writeln(Mercedes.imprime());
////////////////////////////////////////////////////////////////////////////////////////
// Clase Coche y clase Velocidad de crucero y mostrar por pantalla
class Coche {
    constructor(matricula, potencia, velocidad, modelo) {
        this.matricula = "";
        this.potencia = 0.0;
        this.velocidad = 0;
        this.modelo = "";
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }
    calcular() {
        let resultado = this.velocidad / this.potencia;
        return ` Velocidad/Crucero: ${resultado} <br />`;
    }
    imprime() {
        return `<b>El coche con matricula </b>  ${this.matricula}
             de modelo ${this.modelo} 
             , tiene una velocidad de  ${this.velocidad.toString()} 
             para una potencia de  ${this.potencia.toString()}`;
    }
}
let Seat = new Coche("zaader", 120.5, 110, "Seat 600");
let Volvo = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
let MercedesC = new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500");
document.writeln("<hr>");
document.writeln(Seat.imprime(), Seat.calcular());
document.writeln(Volvo.imprime(), Volvo.calcular());
document.writeln(MercedesC.imprime(), MercedesC.calcular());
document.writeln("<hr>");
let velocidadMedia = (Seat.velocidad + Volvo.velocidad + MercedesC.velocidad) / 3;
document.writeln(velocidadMedia.toString());
document.writeln("<hr>");
////////////////////////////////////////////////////////////////////////////////////////
// Clase ENVIO. Metodo que calcule el iva del envio, 21%. Hacer validador identificador
class Envio {
    constructor(identificador, numero, precio, recibido) {
        this.identificador = "";
        this.numero = 0;
        this.precio = 0;
        this.recibido = true;
        this.identificador = identificador;
        this.numero = numero;
        this.precio = precio;
        this.recibido = recibido;
    }
    calculaIVA() {
        let resultado = ((this.precio * 21) / 100).toFixed(2);
        return ` IVA: ${resultado} EUR <br />`;
    }
    validadorID() {
        let regex = /^[A-H]{2}\d{2}[I-Z]{2}$/; // Espresion regualar
        return `El identificador es ${regex.test(this.identificador)}`;
    }
    imprime() {
        return `<b>El pedio </b>  ${this.identificador} <br />
             <b>numero </b> ${this.numero.toString()} <br />
             <b>tiene un precio de </b>  ${this.precio.toString()}  <br />
             <b>y el envio es </b>  ${this.recibido.toString()} <br />`;
    }
}
let envio1 = new Envio("AE45PZ", BigInt(100), 12.5, true);
document.writeln(envio1.imprime());
document.writeln("<br />");
document.writeln(envio1.calculaIVA(), envio1.validadorID().toString());
document.writeln("<hr>");
////////////////////////////////////////////////////////////////////////////////////////
////////   E N C A P S U L A C I O N ->  en POO es cuando damos un acceso restringido a los elementos (GET y SET)
// Clase FIGURA, con dos propiedades numericas xa expresar la posicion en un tablero y una propiedad material
// x, y -> no puede ser negativa ni mayor de 200 ( se pone 0)
// material solo se informa en el constructor pero queremos recuperarlo en Mayusculas
class Figura {
    get material() {
        return this._material.toUpperCase();
    }
    get x() {
        return this._x;
    }
    set x(newX) {
        if (newX < 0 || newX > 200) {
            this._x = 0;
        }
        else {
            this._x = newX;
        }
    }
    get y() {
        return this._y;
    }
    set y(newY) {
        if (newY < 0 || newY > 200) {
            this._y = 0;
        }
        else {
            this._y = newY;
        }
    }
    constructor(x, y, material) {
        this._x = 0;
        this._y = 0;
        this._material = "";
        this.x = x;
        this.y = y;
        this._material = material;
    }
    imprime() {
        return `${this.x.toString()} <br />
                ${this.y.toString()}  <br />
                ${this.material} <br />`;
    }
}
let figura1 = new Figura(-20, 300, "madera");
document.writeln(figura1.imprime());
///////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////         H E R E N C I A        //////////////////////////// 
// 1� Herencia
class Circulo extends Figura {
    constructor(x, y, material, radio) {
        super(x, y, material);
        this.radio = 0;
        this.radio = radio;
    }
}
let cirulo1 = new Circulo(50, 25, "Plata", 7);
// 2� Herencia
class Cuadrado {
    constructor(x, y, material, lado) {
        this.lado = 0;
        this.miFigura = new Figura(x, y, material);
        this.lado = lado;
    }
    dameCoste() {
        return 20;
    }
    dameSuperficie() {
        return this.lado * this.lado;
    }
}
//interface ICalculable(){
//dameSuperficie
//}
document.writeln("<hr>");
class FechaEspecificationJacinto {
    isValid(fecha) {
        return (fecha.ano > 1999 && fecha.ano < 2025 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificationFrancisco {
    isValid(fecha) {
        return (fecha.ano > 1980 && fecha.ano < 2010 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificacionEva {
    isValid(fecha) {
        return (fecha.ano > 2000);
    }
}
class ValidadorAnimal {
    isValid(MiAnimal) {
        return new FechaEspecificacionEva().isValid(MiAnimal.fecha) && MiAnimal.nombre.length >= 2;
    }
}
class ValidadorMamifero {
    isValid(Mamif) {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 19);
    }
}
class ValidadorMamiferoFrancisco {
    isValid(Mamif) {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 29);
    }
}
class ValidadorPrimate {
    isValid(Prim) {
        return new FechaEspecificacionEva().isValid(Prim.fecha) && Prim.nombre.length >= 2 && Prim.mesesGes > 2 && Prim.mesesGes < 12;
    }
}
class ValidadorHumano {
    isValid(Hum) {
        return new FechaEspecificacionEva().isValid(Hum.fecha) && Hum.nombre.length >= 2 && Hum.mesesGes > 2 && Hum.mesesGes < 12;
    }
}
class Fecha {
    constructor(ano, mes, dia) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
    }
    dameEdad() {
        let fechaActual = new Date();
        let fechaMia = new Date(this.ano, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaMia.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)) / 365;
    }
    dameFecha() {
        return `Fecha: ${this.ano.toString()}/${this.mes.toString()}/${this.dia}`;
    }
}
class Animal {
    constructor(Ano, Dia, Mes, nombre) {
        this.fecha = new Fecha(Ano, Mes, Dia);
        this.nombre = nombre;
    }
    dameDatos() {
        return `"nombre: ${this.nombre} y fechaNac: ${this.fecha.dameFecha()}`;
    }
}
class Mamifero extends Animal {
    constructor(Ano, Dia, Mes, nombre, meses) {
        super(Ano, Dia, Mes, nombre);
        this.mesesGes = 0;
        this.mesesGes = meses;
    }
    dameDatos() {
        return super.dameDatos() + " meses gestaci�n: " + this.mesesGes.toString();
    }
}
class Primate extends Mamifero {
    constructor(Ano, Dia, Mes, nombre, meses, masaCel) {
        super(Ano, Dia, Mes, nombre, meses);
        this.masacel = 0;
        this.masacel = masaCel;
    }
    propMasCel() {
        return this.masacel / this.mesesGes;
    }
    dameDatos() {
        return super.dameDatos() + " proporcion masa cel: " + this.propMasCel().toString();
    }
}
class Humano extends Primate {
    constructor(Ano, Dia, Mes, nombre, meses, masaCel, apellidos) {
        super(Ano, Dia, Mes, nombre, meses, masaCel);
        this.apellidos = "";
        this.apellidos = apellidos;
    }
}
let _ValidadorAnimal = new ValidadorAnimal();
let _ValidadorMamifero = new ValidadorMamiferoFrancisco();
let _ValidadorPrimate = new ValidadorPrimate();
let _ValidadorHumano = new ValidadorHumano();
let miAnimal = new Animal(2010, 10, 10, "paquito");
if (_ValidadorAnimal.isValid(miAnimal)) {
    console.log(miAnimal.dameDatos());
}
let miElefante = new Mamifero(1990, 11, 10, "dumbo", 9);
if (_ValidadorMamifero.isValid(miElefante)) {
    console.log(miElefante.dameDatos());
}
let miMono = new Primate(2010, 10, 10, "paquito", 9, 10);
if (_ValidadorPrimate.isValid(miMono)) {
    console.log(miMono.dameDatos());
}
let federico = new Humano(2010, 10, 10, "luis", 9, 10, "garcia");
if (_ValidadorHumano.isValid(federico)) {
    console.log(federico.dameDatos());
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////
//////////////////         H E R E N C I A      E        I N T E R F A C E                ////////////////////////////
// s i n    h a c e r
class IMC {
    constructor() {
        this.imc = 0;
        //if (imc < 20) { return -1; }
        //if (imc >= 20 && imc <= 25) { return 0; }
        //if (imc > 25) { return 1; }
    }
}
class Persona2 {
    get nombre() { return this._nombre; }
    set nombre(value) { this._nombre = value; }
    get edad() { return this._edad; }
    set edad(value) { this._edad = value; }
    get dni() { return this._dni; }
    set dni(value) { this._dni = value; }
    get sexo() { return this._sexo; }
    set sexo(value) { this._sexo = value; }
    get peso() { return this._peso; }
    set peso(value) { this._peso = value; }
    get altura() { return this._altura; }
    set altura(value) { this._altura = value; }
    constructor(nombre, edad, dni, sexo, peso, altura) {
        this._nombre = "";
        this._edad = 0;
        this._sexo = "H";
        this._peso = 0;
        this._altura = 0;
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
//# sourceMappingURL=app.js.map