const menu = document.querySelector('.menu-icon');
const linksDiv = document.querySelector('.links-div');

menu.addEventListener('click', () => {
    linksDiv.classList.toggle('active');
    
    // Si linksDiv tiene la clase 'active', cambiamos el ícono a 'times', si no, lo cambiamos a 'bars'
    if (linksDiv.classList.contains('active')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    } else {
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-times');
    }
});

document.write("Mercedes es la mejor");
alert("Hola");

nombre = "Jacinto";
numOrejas = 2;
alumno = false;
numOrejasClase = numOrejas * 20;
document.write ("En clase de " + nombre + " hay " + numOrejasClase + " orejas");

if (alumno){
    document.write("- ALUMNO CIERTO -");
}

if (numOrejasClase == 20){
    document.write("- OREJAS 20 -");
}

if (numOrejasClase > 39 && numOrejasClase < 50) {
    document.write("- OREJAS BIEN -");
}

function suma(a,b){
    return a + b;
}

conjuntoNum = [8, 5, 6, 4, 7, 8, 56, 24, 56, 78];
trabajar=true;

for(cont=0; cont < conjuntoNum.length; cont++) {
    document.write(cont);
}

/** CREA UNA LISTA DE EDADES  */
conjuntoEdad=[1, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60];
document.writeln("<br />__________________________________________");
document.writeln("Tienen mas de 18 años");
document.write("<ul>");

numero = 0;

for(cont=0; cont < conjuntoEdad.length; cont++){
    if ((conjuntoEdad[cont]) > 18){
        document.write("<li>" +  conjuntoEdad[cont] + "</li>");
        numero++;
}}
document.write("</ul>");

document.write("<br>");
document.write("__________________________________________");
document.write("<br>");
document.write("Los que tienen edad par");
document.write("<br>");
numero = 0;

for(cont=0; cont < conjuntoEdad.length; cont++){
    if (conjuntoEdad[cont] % 2 == 0){
        document.write("<br>");
        document.write((cont+1) + " - " + conjuntoEdad[cont]);
}}

document.writeln("__________________________________________");
document.writeln("Divisibles por 3 " +  "<br>");
numero = 0;

for(cont=0; cont < conjuntoEdad.length; cont++){
    if (conjuntoEdad[cont] % 3 == 0){
        document.writeln((cont+1) + " - " + conjuntoEdad[cont]);
}}

conjuntoNombres = ["pepe", "juan", "ana", "maria", "luis"];

document.write("<br>");
document.write("__________________________________________");
document.write("<br>");
document.write("Mostrar nombres");
document.write("<br>");

for(cont=0; cont < conjuntoNombres.length; cont++){
    document.write("<br>");
    document.write((cont+1) + " - " + conjuntoNombres[cont]);
}

document.write("<br>");
document.write("__________________________________________");
document.write("<br>");
document.write("Longitud nombres");
document.write("<br>");
document.write(conjuntoNombres.length);
document.write("<br>");

document.write("__________________________________________");
document.write("<br>");
document.write("Longitud nombres 4 o mas");

for(cont=0; cont < conjuntoNombres.length; cont++){
    let nombre = conjuntoNombres[cont];
    
    if (nombre.length >= 4){
        document.write("<br>");
        document.write((cont+1) + " - " + conjuntoNombres[cont]);    
    }
}
document.write("<br>");
document.write("__________________________________________");
document.write("<br>");
document.write("Todo en mayuscula");
document.write("<br>");

for(cont=0; cont < conjuntoNombres.length; cont++){
    document.write("<br>");
    document.write((cont+1) + " - " + (conjuntoNombres[cont].toUpperCase()));    
}








