const games = require("../model/games.json")

const getAll = (req, res) => {
    console.log(req.url);

    res.send(games);
};



module.expots = { getAll };