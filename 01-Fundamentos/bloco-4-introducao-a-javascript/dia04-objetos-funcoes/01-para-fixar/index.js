let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld:{
        
    }
}
player.fullName = player.name + " " + player.lastName;
player.bestInTheWorld.datas = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora" + " " +player["fullName"] + " " + "tem" + " " + player["age"] + " " + "anos de idade.");

console.log("A jogadora" + " " +player["fullName"] + " " + "foi eleita a melhor do mundo" + " " + player["age"] + " 6 vezes");

console.log("A jogadora possui " + player["medals"]["golden"] + " medalhas de ouro e " + player["medals"]["silver"] + " medalhas de prata.");


