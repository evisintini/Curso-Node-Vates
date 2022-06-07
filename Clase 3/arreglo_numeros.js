const { numero_aleatorio: aleatorio } = require('./funciones');


function crear_arreglo(cantidad) {
    let v = Array(cantidad);
    for (let i = 0; i < v.length; i++) {
        v[i] = aleatorio(1, 1000);
    }
    return v;
}

function listar(v) {
    for (const x of v) {
        console.log(x);
    }
}


numeros = crear_arreglo(20);
console.log("Numeros generados: ");
listar(numeros);