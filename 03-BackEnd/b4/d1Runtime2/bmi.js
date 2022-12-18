const peso = 93;
const altura = 168;

const bmi = (peso, altura) => {

  altura = (altura/100);
  const result = peso / (altura * altura);
  const bmi = result.toFixed(2)
  return bmi; 
}

console.log(bmi(peso, altura));
