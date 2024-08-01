const express = require("express")
const bodyParser = require('body-parser');
const calculadoraNutriCalc = express()
const port = 3000

// Middleware para parsear el cuerpo de las solicitudes
calculadoraNutriCalc.set('port', process.env.PORT || port);
calculadoraNutriCalc.use(bodyParser.urlencoded({ extended: true }));
calculadoraNutriCalc.use(bodyParser.json());
calculadoraNutriCalc.use(express.static('static'))

module.exports = calculadoraNutriCalc;