
module.exports = calculadoraNutriCalc => {

  const ddbb = require("./ddbb")

  calculadoraNutriCalc.get('/', (req, res) => {
    // res.send("TODO hacer cositas")
    res.redirect('/login.html')
  })

  calculadoraNutriCalc.get('/pruebas-bbdd', (req, res) => {
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

  calculadoraNutriCalc.post('/login-action', (req, res) => {

    // Se Ejecuta cuando ACABE la query SQL
    function callback(usuarios) {
      console.log("He ENCONTRADO A:")
      console.log(usuarios)
      console.log("=======================")
    
      console.log(usuarios.length)
      if (usuarios.length < 1) {
        console.log("USER NOT FOUND")
        //Se añadio la funcion de guardar Usuario. Las vairables que 
        //se envian son las de name y password.
        ddbb.guardarUsuario(name,password,
            (insertId) => {
              console.log("Nuevo usuario insertado con ID:", insertId);
              // Redirigir al usuario después de la inserción
              res.redirect('/calculadora-peso.html?user_id=1')
            });
        
        return
      }

      const user = usuarios[0]
      console.log(user.id_usuario);
      var userAndPasswordValid = (name == 'pepito')

      if (userAndPasswordValid) {
        res.redirect('/calculadora-peso.html?user_id=1')
      }
      else {
        res.redirect('/login-error.html')
      }
    }

    const name = req.body.name;
    //Se añadio la vairbale password para el guardado de usuario
    const password = req.body.password;
    ddbb.consultarUsuario(name, callback);
  })
};
