const readline = require('readline-sync')

const weight = readline.questionFloat('Qual o seu peso ? ')
const height = readline.questionFloat('Qual a sua altura ? ')

const imc = weight / ( height * 2)

console.log(imc);