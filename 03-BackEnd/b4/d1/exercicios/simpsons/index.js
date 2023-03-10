const fs = require('fs').promises;
const readline = require('readline-sync')

const simpsonsAll = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data)
    const dataSort = await result.map(({id, name}) => {
        return `${id} - ${name}`;
    });
    console.log(dataSort);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

const simpsonsId = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data)
    const id = readline.question('Qual é o ID ? ')
    const personID = await result.find((person) => id === person.id)
    console.log(personID.name);

  } catch (err) {
    return `ID não encontrado`;
  }
}

const main = () => {

  // simpsonsAll()
  simpsonsId()
}


main();