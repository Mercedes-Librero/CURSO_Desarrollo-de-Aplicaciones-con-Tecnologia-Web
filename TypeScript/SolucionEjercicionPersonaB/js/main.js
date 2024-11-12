var MiPrimerHTML = /** @class */ (function () {
    function MiPrimerHTML(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    MiPrimerHTML.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("nombre1", "nombre");
        contenido += this.g.dameTextBox("nombreIntermedio", "intermedio");
        contenido += this.g.dameTextBox("apellido1", "apellido1");
        contenido += this.g.dameTextBox("apellido2", "apellido2");
        contenido += "<br />";
        contenido += this.g.dameTextBox("identificativo", "identificativo");
        contenido += this.g.dameNumberBox("nac", "año nacimiento");
        contenido += this.g.dameCheckBox("activo", "Activo");
        contenido += this.g.dameBoton("boton", "Dale");
        return contenido;
    };
    return MiPrimerHTML;
}());
var GenerarHTMLGrpB = /** @class */ (function () {
    function GenerarHTMLGrpB(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    GenerarHTMLGrpB.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("nombre1", "Nombre");
        contenido += this.g.dameTextBox("nombreIntermedio", "Nombre Intermedio");
        contenido += this.g.dameTextBox("apellido1", "1er Apellido");
        contenido += this.g.dameTextBox("apellido2", "2º Apellido");
        contenido += "<br />";
        contenido += this.g.dameTextBox("identificativo", "Identificativo");
        contenido += this.g.dameNumberBox("nac", "Año Nacimiento");
        contenido += this.g.dameCheckBox("activo", "Activo");
        contenido += this.g.dameBoton("boton", "Mostrar");
        contenido += "</div><br/>";
        return contenido;
    };
    return GenerarHTMLGrpB;
}());
var ConfiguradorEspañolBasico = /** @class */ (function () {
    function ConfiguradorEspañolBasico() {
    }
    ConfiguradorEspañolBasico.prototype.dameGenerador = function () {
        return new MiPrimerHTML(new HTMLBootStrap());
        //return new GenerarHTMLGrpB(new HTMLBootStrapGrpB);
    };
    ConfiguradorEspañolBasico.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    ConfiguradorEspañolBasico.prototype.dameValidador = function () {
        return new ValidadorIngles();
    };
    ConfiguradorEspañolBasico.prototype.dameMostrador = function () {
        return new MuestraHTML();
    };
    return ConfiguradorEspañolBasico;
}());
var ConfiguradorAdjunto = /** @class */ (function () {
    function ConfiguradorAdjunto() {
    }
    ConfiguradorAdjunto.prototype.dameGenerador = function () {
        return new GenerarHTMLGrpB(new HTMLBootStrapGrpB());
    };
    ConfiguradorAdjunto.prototype.dameCreador = function () {
        return new CreadorHTML();
    };
    ConfiguradorAdjunto.prototype.dameValidador = function () {
        return new ValidadorMercedes();
    };
    ConfiguradorAdjunto.prototype.dameMostrador = function () {
        return new MuestraHTMLGrupoB();
    };
    return ConfiguradorAdjunto;
}());
var CreadorManualEspañol = /** @class */ (function () {
    function CreadorManualEspañol() {
    }
    CreadorManualEspañol.prototype.damePersona = function () {
        var MiPersona = new Persona();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.añoNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    };
    return CreadorManualEspañol;
}());
var CreadorHTML = /** @class */ (function () {
    function CreadorHTML() {
    }
    CreadorHTML.prototype.damePersona = function () {
        var MiPersona = new Persona();
        MiPersona.primerNombre = this.dameValorTexto("nombre1");
        MiPersona.nombreIntermedio = this.dameValorTexto("nombreIntermedio");
        MiPersona.apellido1 = this.dameValorTexto("apellido1");
        MiPersona.apellido2 = this.dameValorTexto("apellido2");
        MiPersona.identificador = this.dameValorTexto("identificativo");
        MiPersona.añoNacimiento = this.dameValorNumero("nac");
        MiPersona.activo = this.dameValorBooleano("activo");
        return MiPersona;
    };
    CreadorHTML.prototype.dameValorNumero = function (elementoId) {
        return Number(this.dameValorTexto(elementoId));
    };
    CreadorHTML.prototype.dameValorBooleano = function (elementoId) {
        return document.getElementById(elementoId).checked;
    };
    CreadorHTML.prototype.dameValorTexto = function (elementoId) {
        return document.getElementById(elementoId).value;
    };
    return CreadorHTML;
}());
var HTMLChurrutero = /** @class */ (function () {
    function HTMLChurrutero() {
    }
    HTMLChurrutero.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "'></div><br/>"));
    };
    HTMLChurrutero.prototype.dameCss = function () {
        return "<br />";
    };
    HTMLChurrutero.prototype.dameBoton = function (id, texto) {
        return "<input type='button' id=".concat(id, " value='").concat(texto, "' />");
    };
    HTMLChurrutero.prototype.dameCheckBox = function (id, contenido) {
        return "<input type='checkbox' id='".concat(id, "'/><label for='").concat(id, "'> ").concat(contenido, " </label>");
    };
    HTMLChurrutero.prototype.dameTextBox = function (id, placeholder) {
        return "<input type ='text' id='".concat(id, "' placeholder='").concat(placeholder, "'/>");
    };
    HTMLChurrutero.prototype.dameNumberBox = function (id, placeholder) {
        return "<input type='number' id='".concat(id, "' placeholder='").concat(placeholder, "' />");
    };
    return HTMLChurrutero;
}());
var HTMLBootStrap = /** @class */ (function () {
    function HTMLBootStrap() {
    }
    HTMLBootStrap.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='form-group col-md-6'></div><br/>"));
    };
    HTMLBootStrap.prototype.dameCss = function () {
        return "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>";
    };
    HTMLBootStrap.prototype.dameBoton = function (id, texto) {
        return "<input type='button' id=".concat(id, " value='").concat(texto, "'/>");
    };
    HTMLBootStrap.prototype.dameCheckBox = function (id, contenido) {
        return "<input type='checkbox' id='".concat(id, "'/><label for='").concat(id, "'> ").concat(contenido, " </label>");
    };
    HTMLBootStrap.prototype.dameTextBox = function (id, placeholder) {
        return "<input type ='text' id='".concat(id, "' placeholder='").concat(placeholder, "' class='form-control'>");
    };
    HTMLBootStrap.prototype.dameNumberBox = function (id, placeholder) {
        return "<input type='number' id='".concat(id, "' placeholder='").concat(placeholder, "' />");
    };
    return HTMLBootStrap;
}());
var HTMLBootStrapGrpB = /** @class */ (function () {
    function HTMLBootStrapGrpB() {
    }
    HTMLBootStrapGrpB.prototype.dameCss = function () {
        return "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n                <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>";
    };
    HTMLBootStrapGrpB.prototype.dameDiv = function (id) {
        return ("<div id='".concat(id, "' class='container col-4 my-3 border border-dark bg-info bg-opacity-50 rounded-3'>"));
    };
    HTMLBootStrapGrpB.prototype.dameBoton = function (id, texto) {
        return "<div class=\"text-center my-2\">\n                    <input type=\"button\" id=\"".concat(id, "\" class=\"btn btn-primary my-3\" value=\"").concat(texto, "\" />\n                </div>");
    };
    HTMLBootStrapGrpB.prototype.dameCheckBox = function (id, etiqueta) {
        return "<div class=\"form-check form-switch mt-3\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"".concat(id, "\" checked>\n                    <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(etiqueta, "</label>\n                </div>");
    };
    HTMLBootStrapGrpB.prototype.dameTextBox = function (id, etiqueta) {
        return "<div class=\"input-group mb-3\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"text\" class=\"form-control\" id=\"").concat(id, "\" />\n                </div>");
    };
    HTMLBootStrapGrpB.prototype.dameNumberBox = function (id, etiqueta) {
        return "<div class=\"input-group mb-3 w-50\">\n                    <span class=\"input-group-text bg-primary text-white fw-bold\">".concat(etiqueta, "</span>\n                    <input type=\"number\" class=\"form-control\" id=\"").concat(id, "\" />\n                </div>");
    };
    return HTMLBootStrapGrpB;
}());
var MuestraHTML = /** @class */ (function () {
    function MuestraHTML() {
    }
    MuestraHTML.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido1, " </p>"));
    };
    return MuestraHTML;
}());
var MuestraHTML2 = /** @class */ (function () {
    function MuestraHTML2() {
    }
    MuestraHTML2.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido2, " </p>"));
    };
    return MuestraHTML2;
}());
var MuestraHTMLGrupoB = /** @class */ (function () {
    function MuestraHTMLGrupoB() {
    }
    MuestraHTMLGrupoB.prototype.dameContenido = function (MiPersona) {
        return "Nombre: ".concat(MiPersona.primerNombre, " <br/>\n        Apellido: ").concat(MiPersona.apellido1, " <br/>\n        A\u00F1o de Nacimiento: ").concat(MiPersona.añoNacimiento.toString(), "\n        ID: ").concat(MiPersona.identificador);
    };
    return MuestraHTMLGrupoB;
}());
var Persona = /** @class */ (function () {
    function Persona() {
        this.primerNombre = "";
        this.nombreIntermedio = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.añoNacimiento = 0;
        this.identificador = "";
        this.activo = true;
    }
    return Persona;
}());
var ValidadorEspañol = /** @class */ (function () {
    function ValidadorEspañol() {
    }
    ValidadorEspañol.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0);
    };
    return ValidadorEspañol;
}());
var ValidadorIngles = /** @class */ (function () {
    function ValidadorIngles() {
    }
    ValidadorIngles.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    };
    return ValidadorIngles;
}());
var ValidadorGrupoB = /** @class */ (function () {
    function ValidadorGrupoB() {
    }
    ValidadorGrupoB.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0 &&
            MiPersona.nombreIntermedio.length > 0);
    };
    return ValidadorGrupoB;
}());
var ValidadorMercedes = /** @class */ (function () {
    function ValidadorMercedes() {
    }
    ValidadorMercedes.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.activo);
    };
    return ValidadorMercedes;
}());
var ConfiguradorGeneral = new ConfiguradorAdjunto();
var GeneradorHTML = ConfiguradorGeneral.dameGenerador();
var _formulario = document.getElementById("ventanaFormulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
var _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}
function valida() {
    var Creador = ConfiguradorGeneral.dameCreador();
    var ValidadorPersona = ConfiguradorGeneral.dameValidador();
    var Mostrador = ConfiguradorGeneral.dameMostrador();
    var MiPersona = Creador.damePersona();
    var _verde = document.getElementById("verde");
    var _rojo = document.getElementById("rojo");
    if (ValidadorPersona.isValid(MiPersona)) {
        if (_verde != null) {
            _verde.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_rojo != null) {
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}
//# sourceMappingURL=main.js.map