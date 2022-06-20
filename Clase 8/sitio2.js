const express = require('express');
const router_visitas = require('./visitas');

// Crear una instancia de express. Es igual que el @SpringBootApplication de Spring
const app = express();


app.use('/visitas', router_visitas.Router);


app.listen(8080);

/*
let c = 0;

app.get("/", (req, res) => {
    res.end("Peticion incorrectar. Navegue /contar o /consultar v2");
});

app.get("/contar", (req, res) => {
    c++
    res.end("Peticion contada correctamente");
});

app.get("/consultar", (req, res) => {
    res.end(`Se recibieron ${c} peticiones`);
});
*/