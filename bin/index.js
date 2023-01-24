#!/usr/bin/env node

const args = process.argv.slice(2);

if (args[0] == 'start') require('../lib/start.js')()
else if (args[0] == '--add') {
    for (let x = 1; x < args.length; x++) {
        if (args[x] == 'logs') require('../lib/functions.js').logger()
        if (args[x] == 'helpers') require('../lib/functions.js').addCommonFunctions()
        if (args[x] == 'dependences') require('../lib/functions.js').addDependences()
    }
}
else if (args[0] == '--help') {
    console.log(`
    Usage: neotools [command] [options]

    Commands:
        start           Instala las herramientas necesarias para el proyecto
        --add           Agrega funcionalidades al proyecto
            logs        Agrega el logger al proyecto
            helpers     Agrega funciones comunes al proyecto
            dependences Agrega dependencias al proyecto
    `)
} else {
    console.log("Comando no encontrado")
}
