const fs = require('fs').promises;

const main = async () => {

  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = JSON.parse(data)

    result.forEach(elem => {
      console.log(`${elem.id} - ${elem.name}`);

    })

  } catch (erro) {
    console.error(`Erro ao ler o arquivo: ${erro.message}`);
  }
}

main()