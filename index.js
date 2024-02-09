const express = require('express');
const app = express();
const  port = 3001;
const router = require('./rotas')

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log("o servideor estar rodando na porta 3001");
});