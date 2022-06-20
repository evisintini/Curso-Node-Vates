const http = require('http');

let contador = 0;

const servidor = http.createServer((req, res) => {
    if (req.url === '/contar') {
        contador++;
        res.end("Peticion contada correctamente");
    } else if (req.url === "/consultar") {
        res.end(`<h1>Hola, soy un sitio progrmado con Node!</h1><h2>Recibí ${contador} peticiones</h2>`);
    } else {
        res.end("Peticion incorrecta, navegue /contar o /consultar");
    }

    console.log(`Recibi una peticion en ${req.url}`);
})

servidor.listen(8080);