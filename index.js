const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let animes = require('./mocks/animes');

const Char = require('./entities/character.entity');

app.get('/', function (req, res) {
    const char1 = new Char({
        name: 'dudu',
        lastName: 'testson',
        skill: 'programar',
        age: '30',
        gender: 'male',
    });
    char1.validate();
    console.log(char1.getCharacter());

    res.send(animes);
});

app.get('/anime/:id', function (req, res) {
    const animeId = req.params.id;
    let animeFinded;

    animes.map((anime) => {
        if (anime.id === animeId) {
            animeFinded = anime;
        }
    });
    if (animeFinded) {
        res.send(animeFinded);
    } else {
        res.send('Nenhum anime com esse ID foi encontrado');
    }
});

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
