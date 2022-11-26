const createItem = require('./createItem');
describe('a função createItem', () => {

  it('cria um item válido', () => {
    // seus testes vão aqui!
    expect(createItem('banana','kg',1.99,20))
    .toEqual({
      name: 'banana',
      quantity: 20,
      unit: 'kg',
      price: 1.99,
    });
  });

  it.skip('o teste foi pulado', () => {
    expect(0).toBe(0);
  });

  it.todo('utiliza zero como quantidade padrão');
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});