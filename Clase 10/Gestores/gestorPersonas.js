lista = Array()
lista.push({ numero: 1, nombre: "Juan", apellido: "Perez", edad: 20 });
lista.push({ numero: 2, nombre: "Pedro", apellido: "Gomez", edad: 30 });

function agregar() {
    lista.push(nueva);
}

function consultarTodas() {
    return lista;
}

exports.agregar = agregar;
exports.consultarTodas = consultarTodas;