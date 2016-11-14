var app = require('express')();
var config = require('./config');

app.set('view engine', 'ejs');
app.set('views', './app/views');

config.routes.forEach((r) => {
    require(`${config.directories.routes}/${r}`)(app);
});

module.exports = app;