module.exports.index = function(app, req, res) {
    
    var db = app.config.db();
    var noticias = new app.app.models.Noticias(db);

    noticias.latest(5, function(err, data) {
        res.render('home/index', {noticias: data});
    });
}