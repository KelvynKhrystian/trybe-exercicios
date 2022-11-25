function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe ('🚀 Exercício 2 - A função myFizzBuzz(num)', () => {

  it ('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5', () => {
    expect("fizzbuzz").toBe(myFizzBuzz(15))
  });

  it ('Execute a função myFizzBuzz(num), sendo num um número divisível por 3', () => {
    expect("fizz").toBe(myFizzBuzz(9))
  });

  it ('Execute a função myFizzBuzz(num), sendo num um número divisível por 5', () => {
    expect("buzz").toBe(myFizzBuzz(10))
  });

  it ('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5', () => {
    expect(11).toBe(myFizzBuzz(11))
  });

  it ('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número', () => {
    expect(false).toBe(myFizzBuzz("15"))
  });

});