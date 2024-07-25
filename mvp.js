var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krono',
  database: 'nutrikal',
});

conexion.connect(function (err) {
  if (err) throw err;

  const medida = "SELECT * FROM medida";
  conexion.query(medida, function (err, result) {
    if (err) {
      throw err
    };

    console.log(result);
  })

  const usuario = "SELECT * FROM usuario";
  conexion.query(usuario, function (err, result) {
    if (err) {
      throw err;
    };

    console.log(result);
    conexion.end();
  })  
});
