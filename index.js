const express = require("express")
const calculadoraNutriCalc = express()
const port = 3000

calculadoraNutriCalc.use(express.static('static'))
calculadoraNutriCalc.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost puerto:${port}`)
})
