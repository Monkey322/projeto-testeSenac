const express = require("express");
const router = express.Router();
const controller = require("../controller/games")

router.get("/", controller.getAllgames);
router.post("/", controller.creategames);
router.put("/:id", controller.updateGames);
router.get("/:id", controller.getgames);
router.get("/:Nome", controller.getgamesbyNome);
router.patch("/:id/Atualizado", controller.updateAtualizado);
router.delete("/:id", controller.deleteGames);

module.exports = router;