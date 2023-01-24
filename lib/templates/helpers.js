const crypto = require('crypto');

const unformateRut = rut => {
    let unformat = rut;
    if (rut) {
        unformat = rut.split("-");
        unformat = unformat[0];
        unformat = unformat.replace(/\./g, "");
        return unformat;
    } else {
        return null;
    }

};

const formatRut = (value) => {

    let rut = String(value);
    let dvOrigin = rut.split("-")[1];

    if (!value) {
        return value;
    }

    if (rut.indexOf("-") > 0) {
        rut = rut.split("-");
        rut = rut[0];
        rut = rut.replace(/\./g, "");
        value = value.split("-");
        value = value[0];
        value = value.replace(/\./g, "");
    }

    var inputValue = rut.replace('.', '').split("").reverse().join(""); // reverse
    var newValue = '';
    for (var i = 0; i < inputValue.length; i++) {
        if (i % 3 == 0) {
            newValue += '.';
        }
        newValue += inputValue[i];
    }
    rut = newValue.split("").reverse().join("");
    rut = rut.replace(/.(?=[^.]*$)/, '-')

    var M = 0, S = 1;
    for (; value; value = Math.floor(value / 10))
        S = (S + value % 10 * (9 - M++ % 6)) % 11;
    let ver = S ? S - 1 : 'K';

    if (ver == "K" && dvOrigin == "k") {
        return rut + ver
    } else if (dvOrigin != null && dvOrigin != undefined &&
        (dvOrigin != ver)) {
        return false;
    }

    return rut + ver

};

const validateRut = (value) => {
    if (!value) {
        return false;
    }

    value = formatRut(value);

    if (!value) {
        return false;
    }

    value = value.replace(/\./g, "");
    rut = String(value)

    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
        return false;
    }

    let tmp = rut.split('-');
    let digv = tmp[1];
    rut = tmp[0];

    if (digv == 'K') {
        digv = 'k';
    }

    return (String(validator_dig(rut)) == String(digv));

    function validator_dig(T) {

        let M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }


};

const setPasswordSHA = (pass) => {
    const sha = crypto.createHash('sha1');
    sha.update(pass);
    const ret = sha.digest('base64');
    return "{SHA}" + ret;
};

module.exports = { unformateRut, formatRut, validateRut, setPasswordSHA }