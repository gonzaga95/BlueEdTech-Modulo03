const express = require('express');
const cors = require('cors');
const animeRoutes = require('./src/routes/anime.route');
const connectMongoDb = require('./src/database/mongoDb/mongo');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/anime', animeRoutes);

connectMongoDb();

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
