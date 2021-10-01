const express = require('express');
const questionControler = require("./controllers/QuestionController")
const roomController = require("./controllers/RoomController")

const route = express.Router();

route.get('/', (req, res) =>{  res.render("index", {page: 'enter-room'})}) 
route.get('/create-pass', (req, res) =>{  res.render("index", {page: 'create-pass'})}) 

route.get('/room/:room', (req, res) =>{  res.render("room")}) 


route.post('/question/:room/:question/:action', questionControler.index)

route.post('/create-room', roomController.create);

module.exports = route
