//Lembrar de baixr o NodeJs, usar o comando npm install express
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3333;

const api_key = "fd8a55d9c61d6c5e4c41593c0bc82f67";
const base_url = "https://api.themoviedb.org/3";

app.get('/movies', (req, res) => {
  const url = `${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc`;
  axios.get(url)
    .then(response => {
      const movies = response.data.results;
      res.json(movies);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Error fetching movies' });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});