var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
var cors = require('cors')
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({qextended: false}));
app.use(bodyParser.json({limit:'1gb'}));
app.use(cookieParser());

var routes = require('./routes');
app.use('/', routes);

module.exports = app;