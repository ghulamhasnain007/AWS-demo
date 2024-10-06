const express = require("express")
const route = express.Router()

route.get('/one', (req, res) =>{
    res.send("Hello World from One")
})
route.get('/two', (req, res) =>{
    res.send("Hello World from Two")
})
route.get('/three', (req, res) =>{
    res.send("Hello World from Three")
})
route.get('/four', (req, res) =>{
    res.send("Hello World from Four")
})
route.get('/', (req, res) =>{
    res.send("Hello World from Users")
})

module.exports = {
    route
}