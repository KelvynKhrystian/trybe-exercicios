const readline = require('readline-sync')

const weight = readline.questionInt('Qual o seu peso ? ')
const height = readline.questionInt('Qual a sua altura ? ')

const imc = weight / ( height * 2)

console.log(imc);