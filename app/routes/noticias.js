module.exports = (app) => {

    app.get('/noticias', function (req, res) {
        var db = app.config.db();
        var noticias = new app.app.models.Noticias(db);
        
        noticias.all(function(err, data) {
            res.render('noticias/noticias', {
                noticias: data
            });
        });

    });
}