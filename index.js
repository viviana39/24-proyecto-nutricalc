const express = require("express")
const calculadoraNutriCalc = express()
const port = 3000

calculadoraNutriCalc.use(express.static('static'))
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

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM usuario", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});