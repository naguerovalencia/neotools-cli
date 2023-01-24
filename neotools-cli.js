const args = process.argv.slice(2);
args.forEach(arg => {
    if (arg == 'start') require('./lib/start.js')()
})