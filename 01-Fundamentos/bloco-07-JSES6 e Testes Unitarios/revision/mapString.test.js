const {
  mapString,
  encode,
  decode,
} = require('./mapString.js');

const a = 1

// implemente seus testes aqui

describe ('🚀 Exercício 3 - A função mapString', () => {

  it ('Verifica e encode e decode são funções', () => {
    expect(encode).toBeInstanceOf(Function);
    expect(decode).toBeInstanceOf(Function);
  });

  it ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it ('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it ('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
    expect(decode('67890')).toBe('67890');
  });

  it ('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    
    const string = 'kelvyn2233'
    expect(encode(string).length).toBe(string.length);
    expect(decode(string).length).toBe(string.length);
    
  });


});