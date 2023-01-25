const { platform, _path } = require('./constants.js')
const fs = require('fs');
const path = require('path');


const logger = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("📝 Instalando Logger...")
            if (!fs.existsSync(_path + '/utils')) {
                fs.mkdirSync(_path + '/utils');
            }

            fs.copyFileSync(path.join(__dirname, './templates/logger.js'), _path + '/utils/neo-logs.js');

            console.log("✅ Logger instalado correctamente")
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
            console.log("📝 Instalando Controller Exporter...")
            if (!fs.existsSync(_path + '/controllers')) {
                fs.mkdirSync(_path + '/controllers');
            }

            fs.copyFileSync(path.join(__dirname, './templates/c_index.js'), _path + '/controllers/index.js');

            console.log("✅ Controller Exporter instalado correctamente")
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
            console.log("📝 Instalando Model Exporter...")


            if (!fs.existsSync(_path + '/models')) {
                fs.mkdirSync(_path + '/models');
            }

            fs.copyFileSync(path.join(__dirname, './templates/m_index.js'), _path + '/models/index.js');

            console.log("✅ Model Exporter instalado correctamente")
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
            console.log("📝 Instalando Router Exporter...")


            if (!fs.existsSync(_path + '/routes')) {
                fs.mkdirSync(_path + '/routes');
            }

            fs.copyFileSync(path.join(__dirname, './templates/r_index.js'), _path + '/routes/index.js');

            console.log("✅ Route Exporter instalado correctamente")
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
            console.log("📝 Instalando App Creator...")
            fs.copyFileSync(path.join(__dirname, './templates/app.js'), _path + '/app.js');
            console.log("✅ App Creator instalado correctamente")
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
            console.log("📝 Instalando Index Creator...")
            fs.copyFileSync(path.join(__dirname, './templates/index.js'), _path + '/index.js');
            console.log("✅ Index Creator instalado correctamente")
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
            fs.copyFileSync(path.join(__dirname, './templates/properties.js'), _path + '/properties.js');
            console.log("✅ Properties generado")
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
            console.log("📝 Agregando dependencias...")
            let package = require(_path + '/package.json');
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
                "nodemon": "^2.0.15",
                "crypto": "^1.0.1",
            }
            fs.writeFileSync(_path + '/package.json', JSON.stringify(package, null, 2));
            console.log("✅ Dependencias agregadas")
            return resolve({ step: 'dependences', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'dependences', success: false });
        }
    })
}
const addCommonFunctions = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("📝 Agregando funciones comunes...")
            if (!fs.existsSync(_path + '/utils')) {
                fs.mkdirSync(_path + '/utils');
            }
            fs.copyFileSync(path.join(__dirname, './templates/helpers.js'), _path + '/utils/common.functions.js');
            console.log("✅ Funciones comunes agregadas")
            return resolve({ step: 'common_functions', success: true });
        } catch (ex) {
            console.log(ex);
            return reject({ step: 'common_functions', success: false });
        }
    })
}


const controller = (name) => {
    return new Promise((resolve, reject) => {
        try {
            if (!name) return reject({ step: 'controller', success: false })
            console.log("📝 Generando controlador...")
            let controller = fs.readFileSync(path.join(__dirname, './templates/controller'), 'utf8');
            controller = controller.replace(/{{name}}/g, name).replace(/`/g, '');

            fs.writeFileSync(_path + '/controllers/' + name + '.controller.js', String(controller))

            console.log("✅ Controlador generado")
            return resolve({ step: 'controller', success: true })

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'controller', success: false })
        }
    })
}
const model = (name) => {
    return new Promise((resolve, reject) => {
        try {
            if (!name) return reject({ step: 'model', success: false })
            console.log("📝 Generando modelo...")
            let model = fs.readFileSync(path.join(__dirname, './templates/model'), 'utf8');
            model = model.replace(/{{name}}/g, name).replace(/`/g, '');

            fs.writeFileSync(_path + '/models/' + name + '.model.js', String(model))

            console.log("✅ Modelo generado")
            return resolve({ step: 'model', success: true })

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'model', success: false })
        }
    })
}

const route = (name) => {
    return new Promise((resolve, reject) => {
        try {
            if (!name) return reject({ step: 'route', success: false })
            console.log("📝 Generando ruta...")
            let route = fs.readFileSync(path.join(__dirname, './templates/route'), 'utf8');
            //set first letter to uppercase
            let cname = name.charAt(0).toUpperCase() + name.slice(1);
            route = route.replace(/{{name}}/g, cname).replace(/`/g, '');

            fs.writeFileSync(_path + '/routes/' + name + '.route.js', String(route))

            console.log("✅ Ruta generada")
            return resolve({ step: 'route', success: true })

        } catch (ex) {
            console.log(ex);
            return reject({ step: 'route', success: false })
        }
    })
}

const mcr = (name) => {
    console.log("📝 Generando modelo, controlador y ruta para " + name + "...")
    Promise.all([model(name), controller(name), route(name)]).then(results => {
        console.log("✅ Modelo, controlador y ruta generados")
        return true;
    })
}

module.exports = {
    logger,
    controllerExporter,
    modelExporter,
    routeExporter,
    appCreator,
    indexCreator,
    addProperties,
    addDependences,
    addCommonFunctions,
    controller,
    model,
    route,mcr
}