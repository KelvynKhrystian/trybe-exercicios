const xadrez = "peao";

switch (xadrez.toLowerCase()) {
  case "rei":
    console.log("todas as casas mas somente uma casa");
    break;

  case "bispo":
    console.log("se movimenta em diagonal");
    break;

  case "cavalo":
    console.log("movimento em L");
    break;

  case "torre":
    console.log("quantas casas quiser mas sempre em linha reta");
    break;
  
  case "peao":
    console.log("somente uma casa pra frente, primeiro movimento pode 2 casas, come na diagonal 1 casa");
    break;
  
  case "rainha":
    console.log("todas as direções e quantas casas quiser");
    break;

  default:
    console.log("erro peça inválida");
    break; 

  
}