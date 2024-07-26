var mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'usuario',
});


var mysql = require('mysql');

conexion.connect(function (err) {
  if (err) throw err;

  const medida = "SELECT * FROM actor";
  conexion.query(medida, function (err, result) {
    if (err) {
      throw err
    };

    console.log(result);
    conexion.end();
  })  
});

exports.nutrikal = (req.res) => {
  var usuario = Number(req.query.usuario)
  var medida = Number(req.query.medida)
  var nutrikalString = nutrikal.tostring()
  console.log(usuario)
  console.log(medida)

  res.send (--> ${nutrikalString}<--)
}

app.listen(port,() => {
  console.log(`se escucha en http://localhost:$(port)´
}
   


/* 
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
 database:'usuario'
