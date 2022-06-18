// aprendendo reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// faça uma função que some todos os números do array:

const soma = numbers.reduce((acc, current) => acc + current , 0);
console.log(soma);

// faça uma função que some todos os números pares do array:


const maiorNum = numbers.reduce((acc, current) => ((acc > current) ? acc : current ));
console.log(maiorNum);

// faça uma função que some todos os números pares do array:

const somaPar = numbers.reduce((acc, current) =>
    ((current % 2 === 0) ? acc + current : acc)
);
console.log(somaPar);