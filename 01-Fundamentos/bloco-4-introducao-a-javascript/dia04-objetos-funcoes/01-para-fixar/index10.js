// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function numberPar(num1,num2,num3){
    if ((num1%2 === 0) || (num2%2===0) || (num3%2===0)){
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

numberPar(10,10,10);
