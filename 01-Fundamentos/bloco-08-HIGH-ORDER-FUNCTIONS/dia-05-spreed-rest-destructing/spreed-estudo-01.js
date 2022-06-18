const carros = ['Gol','D','Roger']
const carros2 = ['Golaa','Daa','aaaRoger']

// const veiculos = [carros, carros2]
const veiculos = [...carros, ...carros2]
console.log(veiculos)

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76