"use strict";
////////////////////////////////////////////////////////////////////////
// Crear un aclase denominada Persona
class Persona3 {
    constructor() {
        this.primerNombre = "";
        this.nombreIntermedio = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.anioNacimiento = 0;
        this.identificador = "";
        this.activo = true;
    }
}
class CreadorManualEsp {
    damePersona() {
        let MiPersona = new Persona3();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Iba�ez";
        MiPersona.anioNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}
class CreadorManualIng {
    damePersona() {
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
class ValidadorEsp {
    isValid(MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}
class ValidadorIngles {
    isValid(MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}
class MuestraHTML {
    dameContenido(MiPersona) {
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
class MuestraHTML2 {
    dameContenido(MiPersona) {
        return (` <div style=" background-color:darkkhaki; height:auto; padding:20px" id="espacioPersona">
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
let Creador = new CreadorManualIng();
let ValidadorPersona = new ValidadorIngles();
let Mostrador = new MuestraHTML();
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
//# sourceMappingURL=file.js.map