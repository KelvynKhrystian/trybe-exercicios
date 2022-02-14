// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorNome (array){
    let maior
    for(i=0;i<array.length;i++){
        for(j=1;j<array.length;j++){
            if(array[i].length > array[j].length){
                maior = array[i];
            } else if (array[i].length < array[j].length){
                maior = array[j];
            }
        }


    }
    console.log(maior);
}
maiorNome(["paul","kelvyn","abacate"])