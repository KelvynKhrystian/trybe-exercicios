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

module.exports = app;