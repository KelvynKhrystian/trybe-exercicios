// Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três constantes com os valores que serão comparados.
function maiorDeTres(a,b,c){
    if ((a>b)&&(a>c)){
        console.log("O maior número é " + a);
        return a;
    } if ((b>a)&&(b>c)){
        console.log("O maior número é " + b);
        return b;
    } if ((c>a)&&(c>b)){
        console.log("O maior número é " + c);
        return c;
    } else {
        console.log("números iguais");
    }
}
maiorDeTres(3,3,3);