const express = require("express")
const bodyParser = require('body-parser');
const calculadoraNutriCalc = express()
const port = 3000

calculadoraNutriCalc.use(bodyParser.urlencoded({ extended: true }));
calculadoraNutriCalc.use(express.static('static'))

// defining a route for the form
calculadoraNutriCalc.post('/submit', (req, res) => {
  // accessing form fields from req.body
  const username = req.body.username;
  const password = req.body.password;
  // verification steps 
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }
  // sending a response
  res.send(`Received: Username - ${username}, Password - ${password}`);
});

calculadoraNutriCalc.listen(port, () => {
  console.log(`Calculadora escuchando en http://localhost puerto:${port}`)
})
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "krono",
  database: "nutrikal"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM usuario", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  con.end()
});
