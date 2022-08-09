const mongoose = require('mongoose');

function connect() {
    mongoose
        .connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Banco de dados conectado');
        })
        .catch((err) => {
            console.log('Ocorreu um erro:', err);
        });
}

module.exports = connect;
