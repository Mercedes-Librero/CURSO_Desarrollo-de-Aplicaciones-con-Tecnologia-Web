/////////////////////////////////////////////////////////////////////////////////////////////////////
// ADIVINA EL NUMERO
let aleatorio = Math.floor(Math.random()*10);

let elementoBoton = document.getElementById("boton");
elementoBoton.addEventListener("click", compruebaNumero);

function compruebaNumero(){
    let elementoTexto = document.getElementById("numIntroducido");
    let elementoEtiqueta = document.getElementById("etiqueta");
    let texto = parseInt(elementoTexto.value);
    
    if (texto>aleatorio){
        elementoEtiqueta.innerHTML = "El valor es mayor";
    }

    if (texto<aleatorio){
        elementoEtiqueta.innerHTML = "El valor es menor";
    }

    if (texto == aleatorio){
        elementoEtiqueta.innerHTML = "OK";
    }

    //document.write("El numero metido es " + texto);
}
document.writeln("<br /> -----------------------------------------------");
document.writeln("<br/>El numero es: " + aleatorio);
document.writeln("<br /> -----------------------------------------------");

/////////////////////////////////////////////////////////////////////////////////////////////////////

let elementoBotonEdad = document.getElementById("botonEdad");
elementoBotonEdad.addEventListener("click", compruebaEdad);

function compruebaEdad(){
    let elementoEdad = document.getElementById("edadIntroducida");
    let edadInt = parseInt(elementoEdad.value);
    let etiquetaEdad = document.getElementById("etiquetaEdad");

    if (edadInt>17){
       etiquetaEdad.style.backgroundColor = "green";
    }

    if (edadInt<18){
        etiquetaEdad.style.backgroundColor = "red";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

let elementoBotonMayor = document.getElementById("botonMayor");
elementoBotonMayor.addEventListener("click", compruebaMayor);

function compruebaMayor(){
    let elementoNum1 = document.getElementById("numUno");
    let Num1Int = parseInt(elementoNum1.value);

    let elementoNum2 = document.getElementById("numDos");
    let Num2Int = parseInt(elementoNum2.value);

    let etiquetaResp = document.getElementById("respuestaMayor");
 
    if (Num1Int>Num2Int){
        etiquetaResp.innerHTML = Num1Int +  " es mayor que " + Num2Int ;
    }

    if (Num2Int>Num1Int){
        etiquetaResp.innerHTML =   Num2Int+  " es mayor que " + Num1Int;
    }
    if (Num2Int==Num1Int){
        etiquetaResp.innerHTML = "Son iguales";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

let elementoBotonNombre = document.getElementById("botonNom");
elementoBotonNombre.addEventListener("click", sumaNombre);


function sumaNombre(){
    let elementoNom = document.getElementById("nomIntroducido").value;
    var li = document.createElement('li');
    li.innerHTML = elementoNom;
    document.getElementById("listaNom").appendChild(li);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

let elementoBotonDNI = document.getElementById("botonDNI");
elementoBotonDNI.addEventListener("click", buscaLetra);

function buscaLetra(){
    letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", 
        "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let numeroDNI = document.getElementById("numDNI").value;
    let etiquetaResp = document.getElementById("respuestaDNI");
    let resultado = 0;

    if ((numeroDNI > 99999999) || (numeroDNI< 0)){
        etiquetaResp.innerHTML= "Numero incorrecto";
    }
    
    resultado = numeroDNI % 23;
    alert(resultado);

    etiquetaResp.innerHTML= letras[resultado];
    }
    ///////////////// piramide ////////////////////////////////////////////////////////////////////////////////////
    let contador=0;
    let etiquetaPiramide = document.getElementById("piramide");

    etiquetaPiramide.innerHTML= "si";

    for (cont=0;cont<30;cont++){
        contador=1;
        etiquetaPiramide.innerHTML= contador;
        for (contlin=0;contlin<contador;contlin++){
            etiquetaPiramide.innerHTML= contador;
        }
        etiquetaPiramide.innerHTML= "<br>";

    }


