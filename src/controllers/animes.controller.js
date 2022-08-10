const animeService = require('../services/animes.service');

function findAllAnimes(req, res) {
    try {
        const allAnimes = animeService.findAllAnimes();
        res.status(200).send(allAnimes);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

function findAnimeById(req, res) {
    const id = req.params.id;
    const identifiedAnime = animeService.findAnimeById(id);
    if (identifiedAnime) {
        res.status(200).send(identifiedAnime);
    } else {
        res.status(400).send({ message: 'ID não encontrado' });
    }
}

function createAnime(req, res) {
    try {
        const anime = req.body;
        const animeCreated = animeService.createAnime(anime);
        res.status(201).send(animeCreated);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
    }
}

function updateAnime(req, res) {
    try {
        const anime = req.body;
        const animeUpdated = animeService.updateAnime(anime);
        res.status(200).send(animeUpdated);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

function deleteAnime(res, req) {
    const id = req.params.id;
    const deletedAnime = animeService.deleteAnime(id);
    if (deletedAnime) {
        res.status(200).send(deletedAnime);
    } else {
        res.status(400).send({ message: 'ID não encontrado' });
    }
}

module.exports = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime,
};
