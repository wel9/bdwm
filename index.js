const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


consign().include('routes').include('utils').into(app);


app.listen(3000, ()=>{
    console.log("Servidor rodando!");
});

