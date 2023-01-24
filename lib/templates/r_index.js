const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const files = fs.readdirSync(__dirname);

files.forEach(file => {
    if (file !== basename && file.slice(-3) === '.js') {
        router.use('/', require(`./${file}`));
    }
});
console.info("Rutas autogeneradas exitósamente");

module.exports = router;