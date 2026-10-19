const express = require("express")

const router = express.Router()

const temperaturaController = require("../controllers/temperaturaController")

router.post("/temperatura", temperaturaController.receberTemperatura)


module.exports = router