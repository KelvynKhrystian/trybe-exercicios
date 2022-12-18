const readline = require('readline-sync');

const weight = readline.questionFloat('What\'s your weight? (kg) ');
const heigth = readline.questionInt('What\'s your height? (cm) ');

const imc = (weight, heigth) => {
    result = weight / (heigth * heigth)
    return console.log(result)
}

console.log(imc(weight, heigth))