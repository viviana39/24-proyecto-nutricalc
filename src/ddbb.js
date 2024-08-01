const mysql = require("mysql");

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

// Devuelve un ARRAY de usuarios (podria estar vacio)
function consultarUsuario(name, callback) {
  const query = `SELECT * FROM usuario WHERE name = '${name}';`

  conexion.query(query, function (err, result) {
    if (err) {
      throw err;
    };
    // console.log(`USUARIOS ENCONTRADO(S): ${result.length}`)
    callback(result)
  })
}

function consultarUsuarios() {
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

module.exports = { 
  consultarUsuario,
  consultarUsuarios,
  consultarMedidas 
};

/*
  // Inserta medidas
  // INSERT INTO `nutrikal`.`medida` (`id_usuario`, `altura`, `peso`, `objetivo`) VALUES ('2', '180', '147', 'bajar');

  const bcrypt = require("bcrypt");

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

  // consultraUsuarios con hash
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
*/