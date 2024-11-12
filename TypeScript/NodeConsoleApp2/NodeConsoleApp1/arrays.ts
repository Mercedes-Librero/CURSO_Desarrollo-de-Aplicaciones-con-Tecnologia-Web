let nombres01: string[] = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay",
    "Sança", "Tanit", "Uxia", "Zenda"];
let nombres02: string[] = ["Abba", "Acfred", "Areu", "Drac", "Guim", "Iol",
    "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];

//1// Mostrar por consola, los elementos de los dos arrays (metodo o funcion)
    // 1º FORMA
        for (let nombre of nombres01) {
            console.log(nombre);
        }
        for (let nombre of nombres02) {  // con IN en vez de OF  saca la posicion
            console.log(nombre);

}
    // 2º FORMA


//2// Comprobar que todos los elementos de nombres01, tienen una longitud mayor de 2 caracteres (every).
    // 1º
    function esMayor(element: any, index: any, array: any): boolean {
        return element.length > 2;
    }
    if (nombres01.every(esMayor)) {
        console.log("Todos son correctos");
    }

    let todosConLongitudMayorDos = nombres01.every(function (nombre) { return nombre.length >= 0; }); //2º
    let todosConLongitudMayorDos02 = nombres01.every(nombre => nombre.length > 2); // 3º

    console.log(todosConLongitudMayorDos);
console.log(todosConLongitudMayorDos02);

//3//  Quiero filtrar los nombres de nombres01 por aquellos nombres que sean mayores que la i, por ejemplo javier saldría,
//ya que la j está detrás de la i.Hacerlo también con la colección nombres02(filter)

    let nombresMayoresQueI = nombres01.filter(nombre => nombre.toLowerCase() > 'i');
console.log(nombresMayoresQueI);

//4//  Quiero llamar a una función palíndromo para devolver el palíndromo de cada nombre dentro del array nombres01 y nombres02.
console.log(nombres01.reverse());

console.log(nombres01.reverse());

//5// usar indexOf para encontrar Tanit en ambas listas, usar indexOf para encontrar jacinto en ambas listas, mirar que pasa

    var index = nombres01.indexOf("Tanit"); 
    console.log("Ha buscado Tanit en 01 -> " + index);

    index = nombres02.indexOf("Tanit");
    console.log("Ha buscado Tanit en 02 -> " + index);

    index = nombres01.indexOf("Jacinto");
    console.log("Ha buscado Jacinto en 01 -> " + index);

    index = nombres02.indexOf("Jacinto");
    console.log("Ha buscado Jacinto en 02 -> " + index);


//6// Une todos los elementos de nombres01 y de nombres02 y los separa con una coma. Ponerlos en dos listas separadas(join).
let arrayConcatenado = nombres01.concat(nombres02);
console.log(arrayConcatenado.join(", "));

// 7 //  Crear un nuevo array usando el de nombres01 existente para crear un nuevo array de números almacenando en dicho array
// la cantidad de caracteres que tienen el nombre.

let map1 = nombres01.map((nombre) => nombre.length);
console.log(map1);

// 8 //  Eliminar el último elemento de ambas listas.

console.log(nombres02.pop());
console.log(nombres02);


// 9 //  Añadir el nombre Jacinto en ambas listas.
nombres02.push('Jacinto');
console.log(nombres02);


// 10 //  Usando el array del punto 7 quiero hacer un running total, sumando los valores consecutivos.

const suma = map1.reduce((anterior, actual) => anterior + actual, 0);
console.log(suma);

// 11 // Devolver el subarray del elemento 1 al 7 de la primera lista nombres01 y del 4 al 6 en  la segunda lista nombres02,
//con esos dos subarray crear un nuevo array con estos nombres.
    let parte1 = nombres01.slice(1, 7);
    let parte2 = nombres02.slice(4, 7);

console.log(parte1.concat(parte2));

// 12 // Devuelve true si alguno de los elementos de la colección contiene una longitud de nombre mayor que seis.Hacerlo para ambas listas.

        function esMasSeis(element: any, index: any, array: any): boolean {
            return element.length > 6;
        }
        if (nombres01.some(esMasSeis)) {
            console.log("En la lista nombres01 hay nombres con mas de 6 caracteres");
        }
        if (nombres02.some(esMasSeis)) {
            console.log("En la lista nombres02 hay nombres con mas de 6 caracteres");
        }


// 13 // Sort.Ordena las listas de forma ascendente y descendente.

    console.log(nombres01.sort());
    console.log(nombres01.reverse());


