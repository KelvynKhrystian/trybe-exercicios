// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
function pecasXardez(peca){
    let pedra = peca.toLowerCase();
    switch (pedra) {
        case "rei":
            console.log("uma casa, para qualquer lado");
            break;

        case "rainha":
            console.log("qualquer casa, para qualquer lado");
            break;

        case "cavalo":
            console.log("em L");
            break;

        case "bispo":
            console.log("diagonal, qualquer casa");
            break;

        case "torre":
            console.log("reto, qualquer casa");
            break;

        case "peao":
            console.log("uma casa, para frente");
            break;

        default:
            console.log("erro");

    }
}
pecasXardez("dama");