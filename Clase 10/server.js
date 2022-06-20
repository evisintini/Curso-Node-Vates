const express = require('express');
const personas = require('./routers/routerPersonas');

const app = express();

app.use('/personas/', personas.router);

app.listen(8080);