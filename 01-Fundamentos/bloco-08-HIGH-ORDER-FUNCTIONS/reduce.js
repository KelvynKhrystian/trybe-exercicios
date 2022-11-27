const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const redfil = numbers.filter((num) => num % 2 === 0).reduce((acc,curr) => acc + curr,0)
console.log(redfil);

const fil = (num) => num%2===0;
const red = (acc,curr) => acc + curr;
const redfil2 = numbers.filter(fil).reduce(red,0);
console.log(redfil2);

// somente usando reducer

const redu = numbers.reduce((acc,curr) => {
  return curr % 2 === 0 ? (acc+curr) : acc
},0)

console.log(redu);