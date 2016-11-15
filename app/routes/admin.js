module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        app.app.controllers.admin.form_add_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.admin.new_noticia(app, req, res);
    });
}