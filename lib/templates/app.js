'use strict'

// Cargar librerias
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger')();

// Middlewares BodyParser
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Configurar Cabeceras y CORS
app.use(cors())
app.use('/api', require('./routes'));

app.get('/', (req, res) => {
    return res.status(200).send({
        success: true,
        message: "Servidor en línea!"
    });
});

// Exportar modulo
module.exports = app;