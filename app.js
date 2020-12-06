const path = require('path');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors');
const ioModule = require('./setup/io_module')
const basicHandle404 = require('./middleware/404Middleware')
const setupMiddleware = require('./middleware/setupMiddleware')
const basicHandleError = require('./middleware/errorMiddleware')

//Initiate Module
ioModule()

//Initiate MiddleWare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(setupMiddleware)


//Initiate Routes
const autoRoutes = require('express-auto-routes')(app);
autoRoutes(path.join(__dirname, './controllers'));

app.use(basicHandle404)
app.use(basicHandleError)


module.exports = app;