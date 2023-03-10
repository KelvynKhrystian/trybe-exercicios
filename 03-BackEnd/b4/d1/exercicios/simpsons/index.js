const fs = require('fs').promises;

const main = async () => {
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

main()