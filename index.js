const express = require("express")
const calculadoraNutriCalc = express()
const port = 3000
calculadoraNutriCalc.use(express.static('static/front'))

calculadoraNutriCalc.get("", (req, res) =>{
    res.send("Hola Nutricalc")
})
calculadoraNutriCalc.get("")

calculadoraNutriCalc.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})