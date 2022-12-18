const readline = require("readline-sync");

const bmi = () => {

  const peso = readline.questionFloat('qual o seu peso ? ');
  const altC = readline.questionInt('qual a sua altura ? ');

  const altM = (altC/100);
  const result = peso / (altM * altM);
  const bmi = result.toFixed(2);

  console.log(`O seu BMI é ${bmi}`);
  
  // condições
  if (bmi < 18.5) console.log('Abaixo do peso (magreza)'); 
  if (bmi > 18.5 && bmi < 24.9) console.log('Peso normal');
  if (bmi > 25 && bmi < 29.9) console.log('Acima do peso (sobrepeso)');
  if (bmi > 30 && bmi < 34.9) console.log('Obesidade grau I');
  if (bmi > 35 && bmi < 39.9) console.log('Obesidade grau II');
  if (bmi > 40) console.log('Obesidade graus III e IV');

  
  // return bmi; 
}

bmi();
