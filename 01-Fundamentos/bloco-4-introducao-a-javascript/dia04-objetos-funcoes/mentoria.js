let arraynumbers = [2,3,65,3,5,6,4,61,11,15,13];

function imparesPares(numeros){

    let result = {
        pares: 0,
        impares: 0,
    }

    for(i=0; i < numeros.length; i++){

        if(numeros[i] %2 === 0){
            result.pares +=1;
        }
        else{
            result.impares +=1;
        }
    }
    return result;
}
console.log(imparesPares(arraynumbers));