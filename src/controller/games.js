const games = require("../models/games.json")

const getAllgames = (req, res) => {
    console.log(req.url);

    res.status(200).send(games)
}


module.exports = { 
    getAllgames,
 }