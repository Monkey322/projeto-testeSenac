const express = require("express");
const router = express.Router();
const controller = require("../controller/games")

router.get("/", controller.getAllgames);
router.post("/", controller.creategames);

module.exports = router;