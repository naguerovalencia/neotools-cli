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
    console.log("Inicializando instalaci贸n completa de ne酶tools...")
    Promise.all(functions).then(results => {
        console.log("馃煝 Instalaci贸n completa de ne酶tools finalizada.")

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("馃煛 Instalaci贸n de dependencias est谩ndar del proyecto con ne酶tools. (Opcional)");
        readline.question('驴Desea AGREGAR AL PACKAGE.JSON las dependencias est谩ndar del proyecto con ne酶tools? (s/n) ', async answer => {
            if (answer == 's') {
                await require('./functions.js').addDependences();
                console.log("馃煝 Dependencias agregadas correctamente")
                console.log("Atenci贸n: Antes de iniciar el proyecto, recuerde instalar las dependencias agregadas con npm install.")
                readline.close();

            } else {
                console.log("馃煝 Instalaci贸n finalizada sin m贸dulos en dependencias.")
                readline.close();
            }
        })
    })
}

module.exports = start;

