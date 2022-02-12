// Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.

function maiorValor(a,b){
    if (a > b){
        console.log("O maior número é " + a);
        return a;
        
    }else{
        console.log("O maior número é " + b);
        return b;
    }

}
maiorValor(10,20);