const functions = [
    require('./functions.js').logger(),
    require('./functions.js').controllerExporter(),
    require('./functions.js').routeExporter(),
    require('./functions.js').modelExporter(),
    require('./functions.js').appCreator(),
    require('./functions.js').indexCreator(),
    require('./functions.js').addProperties(),
    require('./functions.js').addCommonFunctions()
]



const start = () => {
    console.log("Inicializando instalación completa de neøtools...")
    Promise.all(functions).then(results => {
        console.log("🟢 Instalación completa de neøtools finalizada.")

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("🟡 Instalación de dependencias estándar del proyecto con neøtools. (Opcional)");
        readline.question('¿Desea AGREGAR AL PACKAGE.JSON las dependencias estándar del proyecto con neøtools? (s/n) ', async answer => {
            if (answer == 's') {
                await require('./functions.js').addDependences();
                console.log("🟢 Dependencias agregadas correctamente")
                console.log("Atención: Antes de iniciar el proyecto, recuerde instalar las dependencias agregadas con npm install.")
                readline.close();

            } else {
                console.log("🟢 Instalación finalizada sin módulos en dependencias.")
                readline.close();
            }
        })
    })
}

module.exports = start;

