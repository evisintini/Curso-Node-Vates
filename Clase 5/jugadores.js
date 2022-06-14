let funciones = require('../funciones');
const prompt = require('prompt-sync')();
let posiciones = ["", "Arquero", "Defensor", "Mediocampo", "Delantero"];

class Jugador {
    constructor(nombre, posicion, camiseta, partidosJugados, estadoFisico) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.camiseta = camiseta;
        this.partidosJugados = partidosJugados;
        this.estadoFisico = estadoFisico;
    }

    nombrePosicion() {
        return posiciones[this.posicion].padEnd(11);
    }

    toString() {
        return `${this.nombre.padEnd(10)} ${this.nombrePosicion} ${this.camiseta} ${this.partidosJugados} ${this.estadoFisico}`;
    }
}

function generarJugador() {
    return new Jugador(
        funciones.texto_aleatorio(10),
        funciones.numero_aleatorio(0, 4),
        funciones.numero_aleatorio(1, 23),
        funciones.numero_aleatorio(1, 100),
        funciones.numero_aleatorio(0, 100)
    )
}

function crearArreglo(n) {
    let jugadores = [];
    for (let i = 0; i < n; i++) {
        jugadores.push(generarJugador());
    }
    return jugadores;
}

function listarArreglo(v) {
    for (x of v) {
        console.log(x.toString());
    }
}

cantidad = parseInt(prompt("Ingrese la cantidad de jugadores"));
let jugadores = crearArreglo(cantidad);

console.log("/nListado de los jugadores: ");
listarArreglo(jugadores);