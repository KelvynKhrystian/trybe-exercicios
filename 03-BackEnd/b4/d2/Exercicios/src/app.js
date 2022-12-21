const express = require('express');
const app = express();

const fs = require('fs').promises;
const path = require('path');

const diretorio = path.resolve(__dirname, './movies.json');

const movies = async () => {
  try {
    const data = await fs.readFile(diretorio);
    return JSON.parse(data);
  } catch (erro) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
}

movies();

app.get('/movies/:id', async (req, res) => {
  try {

    const read = await movies();
    const movie = read.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie);

  } catch (erro) {

    res.status(500).send({ mensagem: erro.message });
  }
});

module.exports = app;