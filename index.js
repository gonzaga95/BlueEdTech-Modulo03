const express = require('express');
const cors = require('cors');

const app = express();

const controller = require('./controllers/animes.controller');

app.use(cors());

// let animes = require('./mocks/animes');

// const Char = require('./entities/character.entity');

app.get('/', controller.findAllAnimes);
app.get('/anime/:id', controller.findAnimeById);
app.get('/anime', controller.createAnime);
app.get('/anime', controller.updateAnime);
app.get('/anime/:id', controller.deleteAnime);

// app.get('/', function (req, res) {
//     const char1 = new Char({
//         name: 'dudu',
//         lastName: 'testson',
//         skill: 'programar',
//         age: '30',
//         gender: 'male',
//     });
//     char1.validate();

//     res.send(animes);
// });

// app.get('/anime/:id', function (req, res) {
//     const animeId = req.params.id;
//     let animeFinded;

//     animes.map((anime) => {
//         if (anime.id === animeId) {
//             animeFinded = anime;
//         }
//     });
//     if (animeFinded) {
//         res.send(animeFinded);
//     } else {
//         res.send('Nenhum anime com esse ID foi encontrado');
//     }
// });

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
