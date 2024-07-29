const express = require("express")
const bodyParser = require('body-parser');
const ddbb = require("./ddbb")

const calculadoraNutriCalc = express()
const port = 3000
// Middleware para parsear el cuerpo de las solicitudes
calculadoraNutriCalc.use(bodyParser.urlencoded({ extended: true }));
calculadoraNutriCalc.use(bodyParser.json());

calculadoraNutriCalc.use(express.static('static'))

// Ruta para manejar la solicitud 'nutrikal'
calculadoraNutriCalc.get('/nutrikal', (req, res) => {
  const usuario = Number(req.query.usuario);
  const medida = Number(req.query.medida);
  const nutrikalString = `${usuario}-${medida}`;

  console.log(usuario);
  console.log(medida);

  if (usuario == 1) {
    ddbb.consultarUsuarios()
  }
  
  if (medida == 1) {
    ddbb.consultarMedidas()
  }

  res.send(`--> ${nutrikalString} <--`);
});

calculadoraNutriCalc.listen(port, () => {
  console.log(`Calculadora escuchando en http://localhost puerto:${port}`)
})
