const bcrypt = require("bcrypt");
const numSaltRounds = 10; // Número de rondas de sal (ajústalo según tus necesidades)
const password = "Cronos";

// Genera el hash de la contraseña
function generarContrasena(contrasena) {
  bcrypt.hash(contrasena, numSaltRounds, (err, hash) => {
    if (err) {
      console.error("Error al generar el hash:", err);
    } else {
      console.log("Hash de la contraseña:", hash);
    }
  });
}

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "krono",
  database: "nutrikal",
});

con.connect(function (err) {
  if (err) throw err;
});

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

module.exports = { consultaUsuarios };


