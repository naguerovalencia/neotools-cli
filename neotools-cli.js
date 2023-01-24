
const args = process.argv.slice(2);
args.forEach(arg => {
    if (arg == 'full') require('./lib/start.js')()
    if (arg == 'add-logs') require('./lib/functions.js').logger()
    if (arg == 'add-helpers') require('./lib/functions.js').addCommonFunctions()
})