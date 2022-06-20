const express = require('express');
const router = express.Router();
const gestorPersonas = require('../gestores/gestorPersonas');

router.get('/', (req, res) => {
    res.end(JSON.stringify(gestorPersonas.consultarTodas()));
});

exports.router = router;