const router = require('express').Router();
const animeController = require('../controllers/animes.controller');

router.get('/animes', animeController.findAllAnimes);
router.get('/:id', animeController.findAnimeById);
router.post('/create', animeController.createAnime);
router.put('/update', animeController.updateAnime);
router.delete('/delete/:id', animeController.deleteAnime);

module.exports = router;
