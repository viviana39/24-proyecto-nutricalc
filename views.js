const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 6000;

// Crear conexión a la base de datos
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'usuario',
});

// Conectar a la base de datos
conexion.connect(function(err) {
  if (err) throw err;
  console.log('Conectado a la base de datos');

  const medida = "SELECT * FROM actor";
  conexion.query(medida, function(err, result) {
    if (err) throw err;

    console.log(result);
    conexion.end(); // Cerrar la conexión después de la consulta
  });
});

// Ruta para manejar la solicitud 'nutrikal'
app.get('/nutrikal', (req, res) => {
  var usuario = Number(req.query.usuario);
  var medida = Number(req.query.medida);
  var nutrikalString = `${usuario}-${medida}`; // Corregir la conversión a string

  console.log(usuario);
  console.log(medida);

  res.send(`--> ${nutrikalString} <--`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Se escucha en http://localhost:${port}`);
});


-- /* 
function generarContrasena(longitud) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?~";
  let contrasena = "";
  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    contrasena += caracterAleatorio;
  }
  return contrasena;
}

// Uso: generar una contraseña de 12 caracteres
const contrasenaSegura = generarContrasena(12);
console.log(contrasenaSegura);
-- database:'usuario/* 