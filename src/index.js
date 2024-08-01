const calculadoraNutriCalc = require('./config/server');
const port = calculadoraNutriCalc.get('port')

require('./routes')(calculadoraNutriCalc);

calculadoraNutriCalc.listen(port, () => {
  console.log(`Calculadora escuchando en http://localhost puerto:${port}`)
})
