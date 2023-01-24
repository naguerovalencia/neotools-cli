const functions = [
    require('./functions.js').logger(),
    require('./functions.js').controllerExporter(),
    require('./functions.js').routeExporter(),
    require('./functions.js').modelExporter(),
    require('./functions.js').appCreator(),
    require('./functions.js').indexCreator(),
    require('./functions.js').addProperties()
]



const start = () => {
    console.log("Inicializando instalación completa de neøtools...")
    Promise.all(functions).then(results => {
        console.log(results);
        console.log("Instalación completa de neøtools finalizada.")

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('¿Desea AGREGAR AL PACKAGE.JSON las dependencias estándar del proyecto con neøtools? (y/n) ', async answer => {
            if (answer == 'y') {
                await require('./functions.js').addDependences();
                console.log("Dependencias agregadas correctamente! :D")
                console.log("Antes de iniciar el proyecto, recuerde instalar las dependencias agregadas con npm install")
                readline.close();

            } else {
                console.log("Instalación finalizada sin módulos en dependencias.")
                readline.close();
            }
        })
    })
}

module.exports = start;

