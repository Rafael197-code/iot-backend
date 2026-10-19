const express = require("express")

const cors = require("cors")

const routes = require("./routes/temperaturaRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3333,()=>{
    console.log("Servidor Iot rodando na porta 3333")
})