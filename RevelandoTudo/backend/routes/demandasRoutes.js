const express = require("express")

const router = express.Router()

const controller = require("../controllers/demandasController")

router.get("/", controller.getDemandas)

router.post("/", controller.createDemanda)

router.put("/:id/status", controller.updateStatus)

router.get("/:id/atualizacoes", controller.getAtualizacoesDemanda)

module.exports = router