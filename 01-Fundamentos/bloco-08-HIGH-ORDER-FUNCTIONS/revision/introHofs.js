const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
// Adicione seu código aqui

emailListInData.forEach((email) => {
  // console.log(`O email ${email} está cadastrado em nosso banco de dados!.`);
})
  
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];
const result = numbers.find((num) => num % 2 === 0 || num % 5 === 0)
// console.log(result);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const result2 = names.find((num) => num.length === 5)
//  console.log(result2);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
const result3 = musicas.find((id) => id.id === '31031685')
// console.log(result3);


