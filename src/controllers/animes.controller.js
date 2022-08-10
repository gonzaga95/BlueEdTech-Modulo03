const animeService = require('../services/animes.service');

function findAllAnimes(req, res) {
    const allAnimes = animeService.findAllAnimes();
    res.send(allAnimes);
}

function findAnimeById(req, res) {
    const id = req.params.id;
    const identifiedAnime = animeService.findAnimeById(id);
    res.send(identifiedAnime);
}

function createAnime(req, res) {
    const anime = req.body;
    const animeCreated = animeService.createAnime(anime);
    res.send(animeCreated);
}

function updateAnime(req, res) {
    const anime = req.body;
    const animeUpdated = animeService.updateAnime(anime);
    res.send(animeUpdated);
}

function deleteAnime(res, req) {
    const id = req.params.id;
    const deletedAnime = animeService.deleteAnime(id);
    res.send(deletedAnime);
}

module.exports = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime,
};
