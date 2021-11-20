const express = require("express");
const router = express.router();
const controller = require("../controller/games")

router.get("/", controller.getAll);
router.get("/games", controller.getAll);

module.exports = router;