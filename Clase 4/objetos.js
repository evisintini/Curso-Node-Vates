const Persona = require('./persona');

let p = new Persona(12345678, "Juan", "Perez", 30);
let q = new Persona(54365676, "Juana", "Pino", 18);

p.telefono = 123123414;

Persona.prototype.incrementar_edad = function() { this.edad++; }

console.log(p.toString());
console.log(q.toString());

p.incrementar_edad();
q.incrementar_edad();

console.log(p.toString());
console.log(q.toString());

let art1 = { codigo: 1, nombre: "Pizza", precio: 10 };

let venta = { articulo: art1, cantidad: 2, cliente: p };

console.log(JSON.stringify(venta));
let v = JSON.parse(JSON.stringify(venta));
console.log(v);