const { platform, _path } = require('./constants.js')
const fs = require('fs');
const path = require('path');


const logger = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando Logger...")
            if (!fs.existsSync(_path + '/utils')) {
                fs.mkdirSync(_path + '/utils');
            }

            fs.copyFileSync(path.join(__dirname, './templates/logger.js'), _path + 'utils/logger.js');

            console.log("Logger instalado correctamente! :D")
            return resolve({ step: 'logger', success: true });

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'logger', success: false });
        }
    })
}
const controllerExporter = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando Controller Exporter...")
            if (!fs.existsSync(_path + '/controllers')) {
                fs.mkdirSync(_path + '/controllers');
            }

            fs.copyFileSync(path.join(__dirname, './templates/c_index.js'), _path + 'controllers/index.js');

            console.log("Controller Exporter instalado correctamente! :D")
            return resolve({ step: 'controller_exporter', success: true });

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'controller_exporter', success: false });
        }
    })
}
const modelExporter = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando Model Exporter...")


            if (!fs.existsSync(_path + '/models')) {
                fs.mkdirSync(_path + '/models');
            }

            fs.copyFileSync(path.join(__dirname, './templates/m_index.js'), _path + 'models/index.js');

            console.log("Model Exporter instalado correctamente! :D")
            return resolve({ step: 'model_exporter', success: true });

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'model_exporter', success: false });
        }
    })
}
const routeExporter = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando Router Exporter...")


            if (!fs.existsSync(_path + '/routes')) {
                fs.mkdirSync(_path + '/routes');
            }

            fs.copyFileSync(path.join(__dirname, './templates/r_index.js'), _path + 'routes/index.js');

            console.log("Route Exporter instalado correctamente! :D")
            return resolve({ step: 'route_exporter', success: true });

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'route_exporter', success: false });
        }
    })
}
const appCreator = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando App Creator...")
            fs.copyFileSync(path.join(__dirname, './templates/app.js'), _path + 'app.js');
            console.log("App Creator instalado correctamente! :D")
            return resolve({ step: 'app_creator', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'app_creator', success: false });
        }
    })
}
const indexCreator = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Instalando Index Creator...")
            fs.copyFileSync(path.join(__dirname, './templates/index.js'), _path + 'index.js');
            console.log("Index Creator instalado correctamente! :D")
            return resolve({ step: 'index_creator', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'index_creator', success: false });
        }
    })
}
const addProperties = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Agregando propiedades...")
            fs.copyFileSync(path.join(__dirname, './templates/properties.js'), _path + 'properties.js');
            console.log("Properties generado! :D")
            //append to index.js

            //generate random number of 4 digits
            let random = Math.floor(Math.random() * 9000) + 1000;
            fs.appendFileSync(_path + 'properties.js', "exports.PORT = " + random + ";\n");
            return resolve({ step: 'properties', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'properties', success: false });
        }
    })
}
const addDependences = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Agregando dependencias...")
            let package = require(_path + 'package.json');
            //add key to package.scripts
            package.scripts = {
                ...package.scripts,
                "start": "nodemon index.js"
            }
            package.dependencies = {
                ...package.dependencies,
                "axios": "^0.24.0",
                "body-parser": "^1.19.1",
                "cors": "^2.8.5",
                "express": "^4.17.2",
                "express-fileupload": "^1.2.1",
                "form-data": "^4.0.0",
                "jwt-simple": "^0.5.6",
                "log4js": "^6.3.0",
                "moment": "^2.29.1",
                "mongoose": "^6.1.2",
                "node-cron": "^3.0.1",
                "nodemailer": "^6.7.2",
                "nodemon": "^2.0.15"
            }
            fs.writeFileSync(_path + 'package.json', JSON.stringify(package, null, 2));
            console.log("Dependencias agregadas! :D")
            return resolve({ step: 'dependences', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'dependences', success: false });
        }
    })
}

module.exports = { logger, controllerExporter, modelExporter, routeExporter, appCreator, indexCreator, addProperties, addDependences }