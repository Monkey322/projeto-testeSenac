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

const getgamesbyNome = (req, res) => {
    const gamesNome = req.params.Nome
    const gamesFound = games.find((games) => games.Nome == gamesNome)
    if (gamesFound) {
        res.status(200).send(gamesFound)
    } else {
        res.status(404).send({ message: "Nome não encontrado" })
    }

}


const updateGames = (req, res) => {
    try {
        const gamesId = req.params.id
        const gamesToUpdate = req.body  

        const gamesFound = games.find(games => games.id == gamesId)      
        const gamesIndex = games.indexOf(gamesFound) 

        if (gamesIndex >= 0) { 
            games.splice(gamesIndex, 1, gamesToUpdate) 
        } else {
            res.status(404).send({ message: "Game não encontrado para ser atualizado" })
        }

        fs.writeFile("./src/models/games.json", JSON.stringify(games), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err }) 
            } else {
                console.log("Games atualizado com sucesso!")
                const gamesUpdated = games.find(games => games.id == gamesId) 
                res.status(200).send(gamesUpdated) 
            }
        })
    } catch (err) {
        res.status(500).send({ message: err }) 
    }
}


module.exports = { 
    updateGames,
    getgamesbyNome,
    getgames,
    creategames,
    getAllgames,
    
    
 }