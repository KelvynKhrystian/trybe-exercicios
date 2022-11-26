const { searchEmployee, professionalBoard } = require('./bonus');

describe('Exercício Bônus', () => {

  it ('A função searchEmployee existe', () => {
    expect(searchEmployee).toBeInstanceOf(Function);
  });

  it.todo('A função searchEmployee retorna corretamente a informação com id correto');
  it.todo('A função searchEmployee retorna - ID não identificada');
  it.todo('A função searchEmployee retorna - Informação indisponível');

})

// console.log(searchEmployee);
// console.log(professionalBoard);
// expect(info).toHaveProperty('personagem');