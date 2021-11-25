const express = require("express");
const router = express.Router();
const controller = require("../controller/games")

router.get("/", controller.getAllgames);
router.post("/", controller.creategames);
router.get("/:genero", controller.getgamesbyGenero);
//router.get("/:id", controller.getgames);






module.exports = router;