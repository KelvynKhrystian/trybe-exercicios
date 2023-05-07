"use strict";
var readlineSync = require('readline-sync');
var readValue = readlineSync.questionInt('Qual o valor da medida ? ');
var readBase = readlineSync.question('Qual a medida atual ? ');
var readConv = readlineSync.question('Para qual medida quer converter ? ');
const medidas = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convert = (value, base, conv) => {
    const baseIndex = medidas.indexOf(base);
    const convIndex = medidas.indexOf(conv);
    const expoente = convIndex - baseIndex;
    const result = value * Math.pow(10, expoente);
    const exec = `${value}${base} é igual a ${result}${conv} `;
    return exec;
};
console.log(convert(readValue, readBase, readConv));
