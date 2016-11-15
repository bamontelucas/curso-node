module.exports.noticias = function(app, req, res) {
    var db = app.config.db();
    var noticias = new app.app.models.Noticias(db);
    
    noticias.all(function(err, data) {
        res.render('noticias/noticias', {
            noticias: data
        });
    });
}

module.exports.noticia = function(app, req, res) {
    var db = app.config.db();
    var noticias = new app.app.models.Noticias(db);
    
    noticias.get(req.query.id_noticia, function(err, data) {
        res.render('noticias/noticia', {
            noticia: data[0]
        });
    });
}