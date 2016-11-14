module.exports = (app) => {

    app.get('/noticia', function (req, res) {
        var db = app.config.db();
        var noticias = new app.app.models.Noticias(db);
        
        noticias.get(1, function(err, data) {
            res.render('noticias/noticia', {
                noticia: data[0]
            });
        });

    });
}