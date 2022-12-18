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

const removeSimpson = async () => {
  
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsData = JSON.parse(data);
    // console.log(simpsonsData);
    const newList = simpsonsData.filter(el => Number(el.id) !== 6 && Number(el.id) !== 10);
    // console.log(newList);
    await fs.writeFile('./simpsons.json', JSON.stringify(newList));
    console.log('Arquivo escrito com sucesso!');
    
  } catch (err) {
    console.error(`Erro ao reescrever o arquivo: ${err.message}`);
  }
}

const simpsonFamily = async () => {
  
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsData = JSON.parse(data);
    // console.log(simpsonsData);
    const newList2 = simpsonsData.filter(el => Number(el.id) === 1 || Number(el.id) === 4);
    // console.log(newList2);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newList2));
    console.log('Arquivo criado com sucesso!');
    
  } catch (err) {
    console.error(`Erro ao criar o arquivo: ${err.message}`);
  }
}

const addSimpsonFamily = async () => {
  try {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const result = JSON.parse(data)
    const newId = String(result.length + 1);

    const newList3 = [
      ...result,
      {id: newId, name: 'Nelson Muntz'}
    ]

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newList3));
    console.log('Arquivo modificado com sucesso!');


  } catch (erro) {
    console.error(`Erro ao ler/rescrever o arquivo: ${erro.message}`);
  }
}

const handleSimpsonAdd = async () => {
  try {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const result = JSON.parse(data)
    // console.log(result);

    result.forEach(el => {
      if (el.name === 'Nelson Muntz') el.name = 'Maggie Simpson'
    });
    // console.log(result);

    // await fs.writeFile('./simpsonFamily.json', JSON.stringify(newList4));
    console.log('Arquivo modificado com sucesso!');


  } catch (erro) {
    console.error(`Erro ao ler/rescrever o arquivo: ${erro.message}`);
  }
}

const main = async () => {

  // await lerArquivo();
  // await searchSimpson(11);
  // await removeSimpson()
  // await simpsonFamily()
  // await addSimpsonFamily()
  await handleSimpsonAdd()
  
}

main()




