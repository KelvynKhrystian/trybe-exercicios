const fs = require('fs').promises;
const readline = require('readline-sync')
const path = require('path')

const diretorio = './simpsons.json'

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

const simpsonsFilter = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, diretorio));
    const result = JSON.parse(data)
    const personFiltered = await result.filter((p) => Number(p.id) !== 6 && Number(p.id) !== 10)
    console.log(result);
    await fs.writeFile(path.resolve(__dirname, diretorio), JSON.stringify(personFiltered));
    console.log('Arquivo escrito com sucesso!');
    console.log(personFiltered);

  } catch (err) {
    return `Erro ao editar: ${err.message}`;
  }
}

const main = () => {

  // simpsonsAll()
  // simpsonsId();
  simpsonsFilter();
}


main();