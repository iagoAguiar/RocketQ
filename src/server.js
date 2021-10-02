const express = require('express');  // importar express
const route = require('./route.js')
const path = require('path');

const server = express();

server.set('view engine', 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true}));

server.use(route);

server.listen(3000, () => console.log('Hello World'));

