var app = require('express')();
var config = require('./config');

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;