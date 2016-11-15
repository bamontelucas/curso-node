function Noticias(db) {
    this._db = db;
};

Noticias.prototype.all = function (callback) {
    this._db.query('select * from noticias order by data_criacao desc', callback);
}
Noticias.prototype.get = function (id, callback) {
    this._db.query(`select * from noticias where id_noticia = ${id}`, callback);
}
Noticias.prototype.new = function(noticia, callback) {
    this._db.query('insert into noticias set ?', noticia, callback)
}
Noticias.prototype.latest = function(qtd, callback) {
    this._db.query(`select * from noticias order by data_criacao desc limit ${qtd}`, callback);
}

module.exports = function (){
    return Noticias;
}