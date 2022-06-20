const express = require('express');
const router = express.Router();
const gestorPersonas = require('../gestores/gestorPersonas');

router.get('/', (req, res) => {
    res.json(gestorPersonas.consultarTodas());
    res.end;
});

router.get('/:numero', (req, res) => {
    let num = parseInt(req.params.numero);
    let personaEncontrada = gestorPersonas.consultar(num)

    if (!isNaN(num)) {
        if (personaEncontrada) {
            res.json(personaEncontrada);
        } else {
            res.status(404).send('No se encontro la persona');
        }
    } else {
        res.status(400).send('El parámetro debe ser numérico');
    }
    res.end();
});

router.put('/:numero/:nombre/:apellido/:edad', (req, res) => {
    let num = parseInt(req.params.numero);
    let nom = req.params.nombre;
    let ape = req.params.apellido;
    let edad = parseInt(req.params.edad);

    let nueva = { numero: num, nombre: nom, apellido: ape, edad: edad };
    gestorPersonas.agregar(nueva);

    res.sendStatus(201);
})

exports.router = router;