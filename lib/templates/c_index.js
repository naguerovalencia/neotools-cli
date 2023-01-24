const controllers = {};

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const files = fs.readdirSync(__dirname);

files.forEach(file => {
    if (file !== basename && file.slice(-3) === '.js') {
        let controllerName = file.slice(0, -3).charAt(0).toUpperCase() + file.slice(0, -3).slice(1).replace('.controller', '') + "Controller";
        if (controllerName.indexOf('_') > -1) {
            let controllerNameArray = controllerName.split('_');
            controllerNameArray.forEach((name, index) => {
                if (index > 0) {
                    controllerNameArray[index] = name.charAt(0).toUpperCase() + name.slice(1);
                }
            });
            controllerName = controllerNameArray.join('');
        }
        controllers[controllerName] = require(`./${file}`);
    }
});

console.info("Controladores autogenerados exitósamente");

module.exports = controllers;