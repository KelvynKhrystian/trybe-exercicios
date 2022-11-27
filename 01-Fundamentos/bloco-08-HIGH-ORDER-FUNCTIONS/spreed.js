// Faça uma lista com as suas frutas favoritas
const specialFruit = ['cereja', 'uva', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'maçã', 'tanja'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));