const games = require("../models/games.json")
const fs = require("fs")




const getAllgames = (req, res) => {
    console.log(req.url)
    res.status(200).send(games)
}

const creategames = (req, res) => {
    const { id, Nome, Gênero, Ano, Desenvolvedora } = req.body
    games.push({ id, Nome, Gênero, Ano, Desenvolvedora })
    fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const gamesFound = games.find(games => games.id == id)     
            res.status(200).send(gamesFound)
        }


    })
}
const getgames = (req, res) => {
    const gamesId = req.params.id
    const gamesFound = games.find((games) => games.id == gamesId)
    if (gamesFound) {
        res.status(200).send(gamesFound)
    } else {
        res.status(404).send({ message: "Game não encontrado" })
    }
}

const getgamesbyGenero = (req, res) => {
    const gamesGenero = req.params.Genero
    const gamesFound = games.find((games) => games.Gênero == gamesGenero)
    if (gamesFound) {
        res.status(200).send(gamesFound)
    } else {
        res.status(404).send({ message: "Gênero não encontrado" })
    }

}

module.exports = { 
    getgamesbyGenero,
    getgames,
    creategames,
    getAllgames,
    
    
 }