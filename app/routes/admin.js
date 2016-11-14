module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        var db = app.config.db();
        var noticias = new app.app.models.Noticias(db);

        noticias.new(noticia, function() {
            res.redirect('/noticias');
        });
    });
}