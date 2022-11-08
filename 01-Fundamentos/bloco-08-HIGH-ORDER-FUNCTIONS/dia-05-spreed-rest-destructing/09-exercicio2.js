// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) =>  numbers.reduce((acc,current) => acc + current)

console.log(sum(10,20,3030,9))