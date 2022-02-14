// 1 - Crie uma função que receba uma string e 
// retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


function palindromo(string){
  let palindromo = string.split("").reverse().join("");
  if (string === palindromo) {
    return true;
  } else {
    return false;
  }
}


console.log(palindromo("arara"));
console.log(palindromo("kelvyn"));
