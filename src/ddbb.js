const bcrypt = require("bcrypt");
const mysql = require("mysql");

// Genera el hash de la contraseña
function generarContrasena(contrasena) {
  const numSaltRounds = 10; // Número de rondas de sal (ajústalo según tus necesidades)
  bcrypt.hash(contrasena, numSaltRounds, (err, hash) => {
    if (err) {
      console.error("Error al generar el hash:", err);
    } else {
      console.log("Hash de la contraseña:", hash);
    }
  });
}

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krono',
  database: 'nutrikal',
});

conexion.connect(function (err) {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
})

function consultarUsuarios() {
  // Conectar a la base de datos
  const usuario = "SELECT * FROM usuario";
  conexion.query(usuario, function (err, result) {
    if (err) {
      throw err;
    };

    console.log(result);
  })

}

function consultarMedidas() {
  const medida = "SELECT * FROM medida";
  conexion.query(medida, function (err, result) {
    if (err) {
      throw err
    };

    console.log(result);
  })

}



// INSERT INTO `nutrikal`.`medida` (`id_usuario`, `altura`, `peso`, `objetivo`) VALUES ('2', '180', '147', 'bajar');



async function consultaUsuarios(usuario, contrasena) {
  var sql = "SELECT * FROM usuario WHERE name = ? LIMIT 1";

  return new Promise((success, reject) => {
    const result = con.query(sql, [usuario], function (err, result) {
      if (err) {
        reject(err);
      }
      if (result.length) {
        const usuario = result[0];
        bcrypt.compare(
          contrasena,
          usuario.password,
          function (err, comparation) {
            if (comparation) {
              return success(usuario);
            } else {
              reject("contraseña invalida");
            }
          }
        );
      } else {
        reject("el usuarion no existe");
      }
    });
  });
}

module.exports = { consultaUsuarios, consultarUsuarios, consultarMedidas };