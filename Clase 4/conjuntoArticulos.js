// Hacer un programa que solicite al usuario el ingreso de un conjunto de n artículos, 
//con n ingresado por el usuario. De cada artículo se debe ingresar nombre, 
//precio, stock y tipo. El tipo es un número entre 1 y 10.

const prompt = require('prompt-sync')();
const Articulo = require('./articulo');

function cargarArticulos(cantidad) {
    let vectorArticulos = [];
    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt("Ingrese el nombre del articulo: ");
        const precio = parseInt(prompt("Ingrese el precio del articulo: "));
        const stock = parseInt(prompt("Ingrese el stock del articulo: "));
        const tipo = prompt("Ingrese el tipo del articulo: ");

        const articulo = new Articulo(nombre, precio, stock, tipo);

        vectorArticulos.push(articulo);
    }

    return vectorArticulos;
}

function listarArticulos(vectorArticulos) {
    for (x of vectorArticulos) {
        console.log(x);
    }
}

function promedioPrecios(vector) {
    let acumulador = 0;
    for (x of vector) {
        acumulador += x.precio;
    }
    return acumulador / vector.length;
}

function valorStock(vector) {
    let acumulador = 0;
    for (x of vector) {
        acumulador += vector.valuacion();
    }
    return acumulador;
}

function articuloMasCaro(vector) {
    let mayor = vector[0];
    for (x of vector) {
        if (x.precio > mayor.precio) {
            mayor = x;
        }
    }
    return mayor;
}

function articulosXTipo(vector) {
    let contador = Array(11).fill(0);


    for (x of vector)
        contador(x.tipo) ++;

    return contador;
}


let cantidadDatos = parseInt(prompt("Ingrese la cantidad de datos que desea ingresar: "));
let articulos = cargarArticulos(cantidadDatos);

console.log("Listado de articulos");
listarArticulos(articulos);

console.log("El promedio de precios es: " + promedioPrecios(articulos));

const masCaro = articuloMasCaro(articulos);
console.log("El articulo mas caro es: " + masCaro.nombre + " con un precio de: " + masCaro.precio);

const cantidades = articulosXTipo(articulos);
for (i in cantidades) {
    if (cantidades[i] > 0) {
        console.log("El tipo " + i + " tiene " + cantidades[i] + " articulos");
    }
}