const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const questionControler = require("./controllers/QuestionController");
const RoomController = require('./controllers/RoomController');
const roomController = require("./controllers/RoomController")

const route = express.Router();

route.get('/', (req, res) =>{  res.render("index", {page: 'enter-room'})}) 

route.get('/create-pass', (req, res) =>{  res.render("index", {page: 'create-pass'})}) 

route.get('/room/:room', roomController.open) 
route.post('/create-room', roomController.create);
route.post('/enterroom', RoomController.enter);

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', questionControler.index)

module.exports = route
