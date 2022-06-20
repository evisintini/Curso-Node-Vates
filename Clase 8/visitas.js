const express = require('express');
const enrutador = express.Router(); //Análogo a un @RestController en Spring

let c = 0;

enrutador.get("/", (req, res) => {
    res.end("Peticion incorrecta. Navegue /contar o /consultar v2");
});

enrutador.get("/contar", (req, res) => {
    c++
    res.end("Peticion contada correctamente");
})

enrutador.get("/consultar", (req, res) => {
    res.end(`Se recibieron ${c} peticiones`);
})

exports.Router = enrutador;