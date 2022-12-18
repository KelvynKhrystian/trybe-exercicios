const fs = require('fs').promises;

const lerArquivo = async () => {
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

const searchSimpson = async (id) => {

  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsData = JSON.parse(data);
  const busca = simpsonsData.find(simpson => {
    return Number(simpson.id) === id;
  });
  
  if (busca === undefined) throw new Error('id não encontrado');
  console.log(busca);
  console.log(" ");
  // return busca;

}


const main = async () => {

  // await lerArquivo();
  await searchSimpson(11);
  
}

main()




