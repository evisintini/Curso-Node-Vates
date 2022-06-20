const mariadb = require('mariadb');

const configuracion = {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'personas'
}
async function main() {
    try {
        let conexion = await mariadb.createConnection(configuracion)
        await conexion.query('select * from personas minit 100');
        conexion.end();

        personas.foreach(p => {
                                console.log(p);
                                });
    } catch (error) {
        clg(error);
    }
}
