const path = require('path');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors');
const ioModule = require('./io_module')
const PORT_IO = 5000
const server_io = require('http').createServer();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

ioModule(server_io,PORT_IO)

const autoRoutes = require('express-auto-routes')(app);
autoRoutes(path.join(__dirname, './controllers'));

module.exports = app;