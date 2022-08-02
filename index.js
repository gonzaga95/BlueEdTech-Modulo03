const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/raiz/:numer", function (req, res) {
    let number = req.params.number;

    const result = number ** 0.5;
    if (result % 1 === 0) {
        res.send({
            message: "A raiz quadrada do número " + number,
            result: `${result}`,
        });
    } else {
        res.send({
            message: `O número ${number} não possui raiz exata`,
        });
    }
});

app.listen(3000, () => {
    console.log(`A aplicação está rodando na porta 3000`);
    console.log(`Acesse em http://localhost:3000`);
});
