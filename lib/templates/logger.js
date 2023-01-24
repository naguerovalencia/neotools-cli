const os = require('os');

const platforms = {
  WINDOWS: 'WINDOWS',
  MAC: 'MAC',
  LINUX: 'LINUX',
  SUN: 'SUN',
  OPENBSD: 'OPENBSD',
  ANDROID: 'ANDROID',
  AIX: 'AIX',
};

const platformsNames = {
  win32: platforms.WINDOWS,
  darwin: platforms.MAC,
  linux: platforms.LINUX,
  sunos: platforms.SUN,
  openbsd: platforms.OPENBSD,
  android: platforms.ANDROID,
  aix: platforms.AIX,
};

const platform = platformsNames[os.platform()];

const logger = () => {
    console.log("Instalando Logger...")
    var _log = console.log;
    console.log = function () {
        let trace;
        if (platform == "WINDOWS") {
            trace = new Error().stack.split("\n")[2].split(')')[0].split("\\").pop() ?? null;
        } else {
            trace = new Error().stack.split("\n")[2].split("/").pop().replace('(', '').replace(')', '') ?? null;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift("[" + trace + " ⚪️ ] » ");
        _log.apply(console, args);
    };

    /*     console.jlog = function () {
            jlog(arguments);
        } */

    console.normal = function () {
        _log.apply(console, arguments);
    }

    console.error = function () {
        let trace;
        if (platform == "WINDOWS") {
            trace = new Error().stack.split("\n")[2].split(')')[0].split("\\").pop() ?? null;
        } else {
            trace = new Error().stack.split("\n")[2].split("/").pop().replace('(', '').replace(')', '') ?? null;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift("\x1b[31m" + "[" + trace + " 🔴 ] » " + "\x1b[0m");
        _log.apply(console, args);
    }

    console.success = function () {
        let trace;
        if (platform == "WINDOWS") {
            trace = new Error().stack.split("\n")[2].split(')')[0].split("\\").pop() ?? null;
        } else {
            trace = new Error().stack.split("\n")[2].split("/").pop().replace('(', '').replace(')', '') ?? null;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift("\x1b[32m" + "[" + trace + " 🟢 ] » " + "\x1b[0m");
        _log.apply(console, args);
    }

    console.warn = function () {
        let trace;
        if (platform == "WINDOWS") {
            trace = new Error().stack.split("\n")[2].split(')')[0].split("\\").pop() ?? null;
        } else {
            trace = new Error().stack.split("\n")[2].split("/").pop().replace('(', '').replace(')', '') ?? null;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift("\x1b[33m" + "[" + trace + " 🟡 ] » " + "\x1b[0m");
        _log.apply(console, args);
    }

    console.info = function () {
        let trace;
        if (platform == "WINDOWS") {
            trace = new Error().stack.split("\n")[2].split(')')[0].split("\\").pop() ?? null;
        } else {
            trace = new Error().stack.split("\n")[2].split("/").pop().replace('(', '').replace(')', '') ?? null;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift("\x1b[34m" + "[" + trace + " 🔵 ] » " + "\x1b[0m");
        _log.apply(console, args);
    }
    console.success("Logger instalado correctamente! :D")
}

module.exports = logger;