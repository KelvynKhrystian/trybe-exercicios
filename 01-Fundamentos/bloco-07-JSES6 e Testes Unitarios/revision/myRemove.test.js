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

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    const arrayTest = [1, 2, 3, 4]
    expect([1, 2, 4]).toEqual(myRemove(arrayTest, 3))
  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];', () => {
    const arrayTest = [1, 2, 3, 4]
    expect(myRemove(arrayTest, 3)).not.toContain(3)
  });

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    const arrayTest = [1, 2, 3, 4]
    expect([1, 2, 3, 4]).toEqual(myRemove(arrayTest, 5))
  });
});
