// printMessageTest.test.js
const { info, printMessage } = require('./printMessage.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('teste função printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
})