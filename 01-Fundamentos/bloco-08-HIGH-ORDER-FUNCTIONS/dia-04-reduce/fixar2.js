// faça uma função que some todos os números pares do array:
// com reduce e filter
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const par = (number) => (number % 2 === 0)
const acumulador = (acc, number) => acc + number;

const resultado = numbers.filter(par).reduce(acumulador) 
console.log (resultado)

