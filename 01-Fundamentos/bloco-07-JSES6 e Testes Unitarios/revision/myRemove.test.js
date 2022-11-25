function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
  
// implemente seus testes aqui

describe ('🚀 Exercício 1 - A função myRemove()', () => {

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;', () => {

  });
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];', () => {

  });
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {

  });
});

describe ('🚀 Exercício 2 - A função myFizzBuzz(num)', () => {

  it ('A função myRemove', () => {

  });
});