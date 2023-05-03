var numberInput = 7;
var isItAPrime = function (param) {
    for (var i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
isItAPrime(numberInput)
    ? console.log(numberInput + " \u00E9 primo")
    : console.log(numberInput + " n\u00E3o \u00E9 primo");
// Essa função é responsável por validar se o formato do e-mail está correto.
var emailInput = 'email@email.com';
var validateEmailFormat = function (param) {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.
var numberList = [10, 5, 18, 2, 8, 23];
var sortInput = function (param) {
    return param.sort(function (a, b) { return a - b; });
};
console.log(sortInput(numberList));
