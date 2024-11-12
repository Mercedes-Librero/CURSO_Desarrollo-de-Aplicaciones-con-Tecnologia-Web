////////////////////////////////////////////////////////////////////////
// Crear un aclase denominada Persona

class Persona3 {
    primerNombre: string = "";
    nombreIntermedio: string = "";
    apellido1: string = "";
    apellido2: string = "";
    anioNacimiento: number = 0;
    identificador: string = "";
    activo: boolean = true;
}
//-----------------------------------------------------------------------------------------------------
interface IPersonable {
    damePersona(): Persona3;
}

class CreadorManualEsp implements IPersonable {
    damePersona(): Persona3 {
        let MiPersona = new Persona3();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.anioNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}

class CreadorManualIng implements IPersonable {
    damePersona(): Persona3 {
        let MiPersona = new Persona3();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "Jacinto";
        MiPersona.apellido1 = "Aisa";
        MiPersona.anioNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}
//-----------------------------------------------------------------------------------------
interface IValidable {
    isValid(MiPersona: Persona3): boolean;
}

class ValidadorEsp implements IValidable {
    isValid(MiPersona: Persona3): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}

class ValidadorIngles implements IValidable {
    isValid(MiPersona: Persona3): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}
//---------------------------------------------------------------------------------------------------------------------
interface IMuestra {
    dameContenido(MiPersona: Persona3): String;
}

class MuestraHTML implements IMuestra {
    dameContenido(MiPersona: Persona3): String {
        return (`<div style=" background-color:darkkhaki; height:auto; width: auto;  padding:20px" id="espacioPersona">
        <input type="text" value="${MiPersona.primerNombre}" /> <br/>
        <input type="text" value="${MiPersona.nombreIntermedio}" / >  <br/>
         <input type="text" value="${MiPersona.apellido1}" />  <br/>
        <input type="text" value="${MiPersona.anioNacimiento}" / >  <br/>
        <input type="text" value="${MiPersona.identificador}" />  <br/>
        <input type="text" value="${MiPersona.activo}" / > <br/>
        </div>`);
    }
}

class MuestraHTML2 implements IMuestra {
    dameContenido(MiPersona: Persona3): String {
        return (` <div style=" background-color:darkkhaki; height:auto; padding:20px; width:100px" id="espacioPersona">
        <input type="text" value="${MiPersona.primerNombre}" /> <br/>
        <input type="text" value="${MiPersona.nombreIntermedio}" / >  <br/>
         <input type="text" value="${MiPersona.apellido1}" />  <br/>
         <input type="text" value="${MiPersona.apellido2}" />  <br/>
        <input type="text" value="${MiPersona.anioNacimiento}" / >  <br/>
        <input type="text" value="${MiPersona.identificador}" />  <br/>
        <input type="text" value="${MiPersona.activo}" / > <br/>
        </div>`);
    }
}
// ------------------------------------------------------------------------------------------------------------

let Creador: IPersonable = new CreadorManualIng();
let ValidadorPersona: IValidable = new ValidadorIngles();
let Mostrador: IMuestra = new MuestraHTML();
let MiPersona = Creador.damePersona();


if (ValidadorPersona.isValid(MiPersona)) {
    document.writeln(Mostrador.dameContenido(MiPersona).toString());
}


Creador = new CreadorManualEsp();
ValidadorPersona = new ValidadorEsp();

Mostrador = new MuestraHTML2();
MiPersona = Creador.damePersona();

if (ValidadorPersona.isValid(MiPersona)) {
    document.writeln(Mostrador.dameContenido(MiPersona).toString());
}
