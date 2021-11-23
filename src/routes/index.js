const express = require("express");
const router = express.Router();


router.get('/', function(req, res) { 
    res.send({
        titulo: "games para se divertir",
        data: "19/11/2021"

    })
})

module.exports = router; 