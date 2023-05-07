var readlineSync = require('readline-sync');

var readValue: number = readlineSync.questionInt('Qual o valor da medida ? ');
var readBase: string = readlineSync.question('Qual a medida atual ? ')
var readConv: string = readlineSync.question('Para qual medida quer converter ? ');

const medidas = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (value: number, base: string, conv: string): number => {

  const baseIndex = medidas.indexOf(base);
  const convIndex = medidas.indexOf(conv);
  const expoente = convIndex - baseIndex;
  const result: number = value * Math.pow(10, expoente)
  const exec: any = `${value}${base} é igual a ${result}${conv} `
  return exec
};

console.log(convert(readValue,readBase,readConv))