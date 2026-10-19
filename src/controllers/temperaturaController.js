const Temperatura = require("../models/Temperatura")

const receberTemperatura = (req,res) => {

    const {temperatura} = req.body

    const resultado = await Temperatura.criar(temperatura)

    res.json(resultado)
}

  const listarTemperaturas = async ( req, res) =>{
    const dados = await Temperatura.listar()
    res.json(dados)
}
    
module.exports = {
    receberTemperatura,
    listarTemperaturas
}
