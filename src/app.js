const express = require("express");
const app = express();

const ndex = require("./routes/index");
const games = require("./require/games");

app.use((req, res, next) => {
    console.log("nova requisicao realizada");

    next()
});

app.use("/", index);
app.use("/games", games);

module.export = app;