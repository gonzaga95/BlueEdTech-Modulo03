const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./database/mongoDb/mongo');

const app = express();
app.use(cors());

const controller = require('./controllers/animes.controller');

connectMongoDb();

app.get('/', controller.findAllAnimes);
app.get('/anime/:id', controller.findAnimeById);
app.get('/anime', controller.createAnime);
app.get('/anime', controller.updateAnime);
app.get('/anime/:id', controller.deleteAnime);

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
