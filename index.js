const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./database/mongoDb/mongo');

const app = express();
app.use(cors());

const controller = require('./controllers/animes.controller');

connectMongoDb();

app.get('/', controller.findAllAnimes);
app.get('/anime/:id', controller.findAnimeById);
app.post('/anime/create', controller.createAnime);
app.put('/anime/update/:id', controller.updateAnime);
app.delete('/anime/delete/:id', controller.deleteAnime);

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
