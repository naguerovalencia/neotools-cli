#!/usr/bin/env node

const args = process.argv.slice(2);
const readline = require('readline');

if (args[0] == 'start') require('../lib/start.js')()
else if (args[0] == '--add') {
    for (let x = 1; x < args.length; x++) {
        if (args[x] == 'logs') require('../lib/functions.js').logger()
        if (args[x] == 'helpers') require('../lib/functions.js').addCommonFunctions()
        if (args[x] == 'dependences') require('../lib/functions.js').addDependences()
    }
}
else if (args[0] == '--version' || args[0] == '-v') {
    let package = require('../package.json');
    console.log(`NeøTools v${package.version}`)
}
else if (args[0] == '--generate' || args[0] == '-g') {
    if (args[1] == 'model' || args[1] == 'm') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Ingrese el nombre del modelo: ', (modelName) => {
            require('../lib/functions.js').model(modelName)
            rl.close();
        });
    }
    else if (args[1] == 'controller' || args[1] == 'c') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Ingrese el nombre del controlador: ', (controllerName) => {
            require('../lib/functions.js').controller(controllerName)
            rl.close();
        });
    }
    else if (args[1] == 'route' || args[1] == 'r') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Ingrese el nombre de la ruta: ', (routeName) => {
            require('../lib/functions.js').route(routeName)
            rl.close();
        });
    }
    else if (args[1] == 'all' || args[1] == 'a') {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Ingrese el nombre de los elementos a definir: ', (name) => {
            require('../lib/functions.js').mcr(name)
            rl.close();
        });

    }
    else console.log("Comando no encontrado")
}
else if (args[0] == '--help' || args[0] == '-h') {
    let package = require('../package.json');
    console.log(`
    NeøTools v${package.version}
    author: naguerodev@gmail.com

    Usage: neotools [command] [options]

    Commands:
        start           Instala herramientas y genera la estructura del proyecto
        --add           Agrega funcionalidades al proyecto
            logs        Agrega el logger al proyecto
            helpers     Agrega funciones comunes al proyecto
            dependences Agrega dependencias al proyecto
        --generate      Genera elementos para el proyecto
            model       Genera un modelo para el proyecto
            controller  Genera un controlador para el proyecto
            route       Genera una ruta para el proyecto
            all         Genera un modelo, controlador y ruta para el proyecto
        --version       Muestra la versión de neotools
        --help          Muestra la ayuda de neotools

    `)
} else {
    console.log("Comando no encontrado")
}
