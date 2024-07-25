const express = require("express");
const { consultaUsuarios } = require("./bd");
const calculadoraNutriCalc = express();
const port = 3000;

calculadoraNutriCalc.use(express.json());

calculadoraNutriCalc.use(express.static("static"));
calculadoraNutriCalc.listen(port, () => {
  console.log(`Calculadora escuchando en http://localhost puerto:${port}`);
});

calculadoraNutriCalc.post("/login", (req, res) => {
  const user = req.body;

  if (!user?.name) {
    res.send({ error: "Falta el nombre" });
  } else if (!user?.password) {
    res.send({ error: "Falta la contraseña" });
  }

  if (user?.name && user?.password) {
    consultaUsuarios(user.name, user.password)
      .then((user) => {
        res.send(user);
      })
      .catch((error) => {
        console.log(error);
        res.send({ error: true, message: error });
      });
  }
});
