const a = 90;
const b = 45;
const c = 45;
let soma3angulos = a + b + c ;
let positivos = a > 0 && b > 0 && c > 0 ;

if  (positivos) {
  if (soma3angulos === 180){
    console.log(true);
  }else{
    console.log(false);
  }
}else {
  console.log("erro, ângulo inválido");
}