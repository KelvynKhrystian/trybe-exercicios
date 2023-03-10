const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
// app.express(json());

const moviesPath = path.resolve(__dirname, './movies.json');

const moviesAll = async () => {
    try {
      const data = await fs.readFile(moviesPath);
      const result = JSON.parse(data)
      return result
    } catch (err) {
      console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

app.get('/movies/:id', async (req,res) => {

  try {
    const { id } = req.params
    const movies = await moviesAll()
    const moviesId = movies.filter((filme) => filme.id = Number(id))
    return res.status(200).json(moviesId)

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
    
});




module.exports = app;