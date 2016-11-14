var app = require('./config/server');

require('./routes/home')();
require('./routes/formulario_inclusao_noticia')();
require('./routes/noticias')();

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});