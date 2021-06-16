const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get("/", (req,res) => {
    res.json({ mensagem: 'Olá, Thamires que deveria se chamar Josemires' });
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
const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Servido iniciado na porta ${PORT}: http://localhost:${PORT}/`);
});