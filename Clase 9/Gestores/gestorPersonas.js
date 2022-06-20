lista = Array()
lista.push({ numero: 1, nombre: "Juan", apellido: "Perez", edad: 20 });
lista.push({ numero: 2, nombre: "Pedro", apellido: "Gomez", edad: 30 });

function agregar(nueva) {
    lista.push(nueva);
}

function consultarTodas() {
    return lista;
}

function consultar(num) {
    //funcion lambda que busca la primera persona cuyo numero sea igual al parametro que le paso
    return lista.find(p => p.numero == num);
}

exports.agregar = agregar;
exports.consultarTodas = consultarTodas;
exports.consultar = consultar;