const router = require('express').Router();
const animeController = require('../controllers/animes.controller');

app.get('/animes', animeController.findAllAnimes);
app.get('/:id', animeController.findAnimeById);
app.post('/create', animeController.createAnime);
app.put('/update', animeController.updateAnime);
app.delete('/delete/:id', animeController.deleteAnime);

module.exports = router;
