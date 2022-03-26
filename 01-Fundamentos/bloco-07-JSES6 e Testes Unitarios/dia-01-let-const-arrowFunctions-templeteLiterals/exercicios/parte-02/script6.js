const array = ["HTML", "CSS", "JAVASCRIPT", "NODE.JS", "REACT"]; //ARAAY GLOBAL
// primeira função;
// const changeString = string => `Tryber ${string} aqui!`;
// let retorno = changeString("Khrystian");
// segunda função
// const arraysConcatenadas = callback => {
//     let novoRetorno = `${callback} Minhas cinco principais habilidades são:
//     ${array[0]}
//     ${array[1]}
//     ${array[2]}
//     ${array[3]}
//     ${array[4]}`
//     console.log(novoRetorno);

// }

function principal (parametro) {
    //primeira função
    const changeString = string => `Tryber ${string} aqui!`;
    let retorno = `${changeString(parametro)} 
Minhas 5 principais habilidades são:`;

    let retorno2 = `${retorno} 
${array[0]}
${array[1]}
${array[2]}
${array[3]}
${array[4]}
#goTrybe`
        console.log(retorno2);  
}

principal("khrystian");