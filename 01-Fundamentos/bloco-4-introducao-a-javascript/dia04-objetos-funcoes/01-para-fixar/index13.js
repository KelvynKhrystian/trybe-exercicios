// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function salario(salarioBruto){
    if (salarioBruto <= 1556.94){                                                               //salario-01
        let salario1 =  salarioBruto - (salarioBruto * 0.08);
        console.log("O salário líquido é: " + salario1);   
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){                             //salario-02
        let salario2 = salarioBruto - (salarioBruto * 0.09) ; 
        if (salario2 <= 1903.98){
            console.log("O salário líquido é: " + salario2);
        }else if (salario2 >= 1903.99){
            salario2 = ((salario2 * 1.075) - 142.80)
            console.log("O salário líquido é: " + salario2);
        }
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){                            //salario-03
        let salario3 =  salarioBruto - (salarioBruto * 0.11) ;
        if (salario3 <= 2826.65){
            salario3 = ((salario3 * 1.075) - 142.80)
            console.log("O salário líquido é: " + salario3);
        }else if (salario3 >= 2826.66 && salario3 <= 3751.05){
            salario3 = ((salario3 * 1.15) - 354.80)
            console.log("O salário líquido é: " + salario3);
        }else if (salario3 >= 3751.06 && salario3 <= 4664.68){
            salario3 = ((salario3 * 1.225) - 636.13)
            console.log("O salário líquido é: " + salario3);
        }
    } else if (salarioBruto > 5189.82){                                                         //salario-04
        let salario4 =  salarioBruto - 570.88 ;
        if (salario4 <= 4664.68){
            salario4 = ((salario4 * 1.225) - 636.13)
            console.log("O salário líquido é: " + salario4);
        }else if (salario4 >= 4664.69){
            salario4 = (salario4 * 1.275) - 869.36
            console.log("O salário líquido é: " + salario4);
        }
    }
}
salario(3000);