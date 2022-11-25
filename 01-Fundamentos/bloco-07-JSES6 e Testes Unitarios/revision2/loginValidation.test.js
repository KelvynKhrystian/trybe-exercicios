// loginValidation.test.js
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require('./loginValidation.js');

describe('a função verifyCredentials()', () => {

  it('test1', () => {
    //veja que testamos o objeto `user`agora com outros dados
    const user = {
      userName: 'Bob',
      password: 123456,
    };

    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      'Hello, Joana! Que bom ter você de volta'
    );
  });

  it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
    expect(greetingMessage('Lucas')).toBe(
      'Hello, Lucas! Que bom ter você de volta'
    );
  });

  it('loginErrorMessage() returns a message in the format: ', () => {
    expect(loginErrorMessage('Bob')).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });
});