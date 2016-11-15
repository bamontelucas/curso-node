module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia', {errors: null, noticia: {}});
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty();
        req.assert('data_noticia', 'Data no formato incorreto').isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Texto da notícia é obrigatório').notEmpty();

        var errors;
        if(errors = req.validationErrors()) {
            res.render('admin/form_add_noticia', {errors, noticia});
            return;
        }

        var db = app.config.db();
        var noticias = new app.app.models.Noticias(db);

        noticias.new(noticia, function() {
            res.redirect('/noticias');
        });
    });
}