const models = {};

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const files = fs.readdirSync(__dirname);

files.forEach(file => {
    if (file !== basename && file.slice(-3) === '.js') {
        let name = file.slice(0, -3).charAt(0).toUpperCase() + file.slice(0, -3).slice(1).replace('.model', '');
        models[name] = require(`./${file}`);
    }
});
console.info("Modelos autogenerados exitósamente");

module.exports = models;