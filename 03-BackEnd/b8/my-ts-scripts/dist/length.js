"use strict";
const medidas = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convert = (value, base, conv) => {
    const baseIndex = medidas.indexOf(base);
    const convIndex = medidas.indexOf(conv);
    const expoente = convIndex - baseIndex;
    const result = value * Math.pow(10, expoente);
    return result;
};
console.log(convert(15, 'm', 'km'));
