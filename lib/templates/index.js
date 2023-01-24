
const { PORT, MONGO_URL, MONGO_PORT, MONGO_OPTIONS, MONGO_URL_OPTIONS, MONGO_DB, BACKEND_URL } = require('./properties.js');
const app = require('./app');

// Librerias
const mongoose = require('mongoose');

app.listen(PORT, async () => {
    console.info("Servidor inicializado", `${BACKEND_URL}:${PORT}`);
    try {
        console.warn("Intentando conectar a la base de datos...");
        /* const conn = await mongoDBConnection();
        if (conn) {
            console.success(conn);
        } */
    }
    catch (e) {
        log.server.fatal("Error de conexion", e)
    }
});

const mongoDBConnection = () => {
    return new Promise((resolve, reject) => {
        const url = `${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}${MONGO_URL_OPTIONS}`;
        mongoose.connect(url, MONGO_OPTIONS, async (err) => {
            if (err) {
                return reject(err);
            }
            return resolve(`Conectado a la Base de Datos ${MONGO_DB}`);
        });
    })
}