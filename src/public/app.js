"use strict";

var express = require('express');

var router = require('../API/routes');

var path = require('path');

var PORT = process.env.PORT || 3000;
var app = express();

var cors = require('cors');

app.use(express.json());
app.use('/api', cors(), router);
module.exports = app;