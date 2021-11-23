const express = require("express");
const app = express();

app.use(express.json())

const index = require("./routes/index");
const games = require("./routes/games");

app.use(function (req, res, next) {
    res.header("Access-control-Allow-Origin","*")// importado de qualquer lugar por um browser.
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, content-type, Accept"
    )

    next()
});

app.use("/", index);
app.use("/games", games);

module.exports = app;