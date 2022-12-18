const readline = require("readline-sync");

const bmi = () => {

  const peso = readline.questionFloat('qual o seu peso ? ');
  const altC = readline.questionInt('qual a sua altura ? ');

  const altM = (altC/100);
  const result = peso / (altM * altM);
  const bmi = result.toFixed(2);

  console.log(`O seu BMI é ${bmi}`);
  // return bmi; 
}

bmi();
