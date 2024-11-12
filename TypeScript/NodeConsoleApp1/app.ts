////////////////////////////////////////////////////////////////////////////////////////
// Clase Persona y mostrar por pantalla

class Persona {
    edad: BigInt = 0 as unknown as BigInt;
    nombre: string = "";
    apellido: string = "";
    sexo: string = "";

    constructor(edad: BigInt, nombre: string, apellido: string, sexo: string) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    imprime(): string {
        return "Objeto de nombre: " + this.nombre 
            + " " + this.apellido
            + " de edad: " + this.edad.toString()
            + " y sexo: " + this.sexo + "<br />";
    }
}

let Maria = new Persona(18 as unknown as BigInt, "Maria", "dasf", "mujer");
let Adrian = new Persona(21 as unknown as BigInt, "Adria", "Cruz", "hombre");
let Mercedes = new Persona(50 as unknown as BigInt, "Mercedes", "Librero", "mujer");

document.writeln("<hr>");
document.writeln(Maria.imprime());
document.writeln(Adrian.imprime());
document.writeln(Mercedes.imprime());


////////////////////////////////////////////////////////////////////////////////////////
// Clase Coche y clase Velocidad de crucero y mostrar por pantalla

class Coche {
    matricula: string = "";
    potencia: number = 0.0;
    velocidad: number = 0;
    modelo: string = "";

    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }

    calcular(): string{
        let resultado = this.velocidad / this.potencia;
        return ` Velocidad/Crucero: ${resultado} <br />`;

    }

    imprime(): string {
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

let velocidadMedia = (Seat.velocidad + Volvo.velocidad + MercedesC.velocidad)/3;

document.writeln(velocidadMedia.toString());

document.writeln("<hr>");

////////////////////////////////////////////////////////////////////////////////////////
// Clase ENVIO. Metodo que calcule el iva del envio, 21%. Hacer validador identificador

class Envio {
    identificador: string = "";
    numero: BigInt = 0 as unknown as BigInt;
    precio: number = 0;
    recibido: boolean = true;

    constructor(identificador: string, numero: BigInt, precio: number, recibido: boolean) {
        this.identificador = identificador;
        this.numero = numero;
        this.precio = precio;
        this.recibido = recibido;
    }

    calculaIVA(): string {
        let resultado = ((this.precio * 21) / 100).toFixed(2);
        return ` IVA: ${resultado} EUR <br />`;

    }

    validadorID(): string {
        let regex = /^[A-H]{2}\d{2}[I-Z]{2}$/;  // Espresion regualar
        return `El identificador es ${regex.test(this.identificador)}`;
    }

    imprime(): string {
        return `<b>El pedio </b>  ${this.identificador} <br />
             <b>numero </b> ${this.numero.toString() } <br />
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
    private _x: number = 0;
    private _y: number = 0;
    private _material: string = "";

    public get material(): string {
        return this._material.toUpperCase();
    }

    public get x() {
        return this._x;
    }

    public set x(newX: number) {
        if (newX < 0 || newX > 200) {
            this._x = 0;
        } else {
            this._x = newX;
        }
    }

    public get y() {
        return this._y;
    }

    public set y(newY: number) {
        if (newY < 0 || newY > 200) {
            this._y = 0;
        } else {
            this._y = newY;
        }
    }

    constructor(x: number, y: number, material: string) {
        this.x = x;
        this.y = y;
        this._material = material;
    }

    imprime(): string {
        return `${this.x.toString()} <br />
                ${this.y.toString()}  <br />
                ${this.material} <br />`;
    }

}

let figura1 = new Figura(-20, 300, "madera");
document.writeln(figura1.imprime());

///////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////         H E R E N C I A        //////////////////////////// 

// 1º Herencia
    class Circulo extends Figura {
        radio: number = 0;

        constructor(x:number,y:number,material:string,radio:number) {
            super(x, y, material);
            this.radio = radio;
        }
    }

let cirulo1 = new Circulo(50, 25, "Plata", 7);

// 2º Herencia
class Cuadrado { //implements ICalculable, ICostable
        miFigura: Figura;
        lado: number = 0; 

        constructor(x: number, y: number, material: string, lado: number) {
            this.miFigura = new Figura(x, y, material);
            this.lado = lado;
        }

        dameCoste(): number {
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

///////////////////////////////////////////////////////////////////////////////////////////
// //////////
//////////////////         H E R E N C I A        ////////////////////////////

// nos creamos una class Fecha para utilizar en varias clases
interface IFechaSpecification {
    isValid(fecha: Fecha): boolean;
}

class FechaEspecificationJacinto implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 1999 && fecha.ano < 2025 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificationFrancisco implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 1980 && fecha.ano < 2010 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificacionEva implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 2000);
    }
}

interface IValidadorAnimal {
    isValid(MiAnimal: Animal): boolean;
}

class ValidadorAnimal implements IValidadorAnimal {
    isValid(MiAnimal: Animal): boolean {
        return new FechaEspecificacionEva().isValid(MiAnimal.fecha) && MiAnimal.nombre.length >= 2;
    }
}

interface IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean;
}

class ValidadorMamifero implements IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 19);
    }
}

class ValidadorMamiferoFrancisco implements IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 29);
    }
}

interface IValidadorPrimate {
    isValid(Prim: Primate): boolean;
}

class ValidadorPrimate implements IValidadorPrimate {
    isValid(Prim: Primate): boolean {
        return new FechaEspecificacionEva().isValid(Prim.fecha) && Prim.nombre.length >= 2 && Prim.mesesGes > 2 && Prim.mesesGes < 12;
    }
}

interface IValidadorHumano {
    isValid(Hum: Humano): boolean;
}

class ValidadorHumano implements IValidadorHumano {
    isValid(Hum: Humano): boolean {
        return new FechaEspecificacionEva().isValid(Hum.fecha) && Hum.nombre.length >= 2 && Hum.mesesGes > 2 && Hum.mesesGes < 12;

    }
}


class Fecha {
    mes: number;
    dia: number;
    ano: number;

    constructor(ano: number, mes: number, dia: number) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
    }
    dameEdad(): number {
        let fechaActual = new Date();
        let fechaMia = new Date(this.ano, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaMia.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)) / 365;
    }
    dameFecha(): string {
        return `Fecha: ${this.ano.toString()}/${this.mes.toString()}/${this.dia}`;
    }
}

class Animal {
    fecha: Fecha;
    nombre: string;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string) {
        this.fecha = new Fecha(Ano, Mes, Dia);
        this.nombre = nombre;
    }
    dameDatos(): string {
        return `"nombre: ${this.nombre} y fechaNac: ${this.fecha.dameFecha()}`;
    }
}
class Mamifero extends Animal {
    mesesGes: number = 0;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number) {
        super(Ano, Dia, Mes, nombre);
        this.mesesGes = meses;
    }
    dameDatos(): string {
        return super.dameDatos() + " meses gestación: " + this.mesesGes.toString();
    }
}
class Primate extends Mamifero {
    masacel: number = 0;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number, masaCel: number) {
        super(Ano, Dia, Mes, nombre, meses);
        this.masacel = masaCel;
    }
    propMasCel(): number {
        return this.masacel / this.mesesGes;
    }
    dameDatos(): string {
        return super.dameDatos() + " proporcion masa cel: " + this.propMasCel().toString();
    }
}
class Humano extends Primate {
    apellidos: string = "";
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number, masaCel: number, apellidos: string) {
        super(Ano, Dia, Mes, nombre, meses, masaCel);
        this.apellidos = apellidos;
    }
}



let _ValidadorAnimal: IValidadorAnimal = new ValidadorAnimal();
let _ValidadorMamifero: IValidadorMamifero = new ValidadorMamiferoFrancisco();
let _ValidadorPrimate: IValidadorPrimate = new ValidadorPrimate();
let _ValidadorHumano: IValidadorHumano = new ValidadorHumano();

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
    imc: number= 0;

     //if (imc < 20) { return -1; }
     //if (imc >= 20 && imc <= 25) { return 0; }
     //if (imc > 25) { return 1; }
 }
interface ICalcularIMC {
    //isCorrecto(mci: ): boolean;
}



class Persona2 {
    private _nombre: string = "";
    private _edad: number = 0;
    private _dni!: string;
    private _sexo: string = "H";
    private _peso: number = 0;
    private _altura: number = 0;

    public get nombre(): string { return this._nombre; }
    public set nombre(value: string) { this._nombre = value; }

    public get edad(): number { return this._edad; }
    public set edad(value: number) { this._edad = value; }

    public get dni(): string {  return this._dni;  }
    public set dni(value: string) { this._dni = value;  }     

    public get sexo(): string { return this._sexo; }
    public set sexo(value: string) { this._sexo = value; }

    public get peso(): number { return this._peso; }
    public set peso(value: number) {  this._peso = value;   }

    public get altura(): number { return this._altura;   }
    public set altura(value: number) { this._altura = value;  }

    constructor(nombre: string, edad: number, dni: string, sexo: string, peso: number, altura: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }


}


