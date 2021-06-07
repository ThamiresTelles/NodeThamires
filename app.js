const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send('Olá, Thamires');
});

app.get("/josemires", (req,res) => {
    res.send('Olá, josemires');
});

app.post("/josemires", (req,res) => {
    console.log(req.body);
    console.log(typeof req.body.altura);
    console.log(typeof req.body.idade);
    res.send(`Olá, ${req.body.nome} ${req.body.sobrenome} de altura ${req.body.altura}m e na idade ${req.body.idade}`);
});

app.listen(8080,() => {
    console.log("Servido iniciado na porta 8080: http://localhost:8080/");
});