class Persona {
    constructor(documento, nombre, apellido, edad) {
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }


    nombre_completo() {
        return this.nombre + " " + this.apellido;
    }

    toString() {
        return "Documento: " + this.documento + " Nombre: " + this.nombre_completo() + " Edad: " + this.edad;
    }
}
module.exports = Persona;