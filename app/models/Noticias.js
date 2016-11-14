function Noticias(db) {
    this._db = db;
};

Noticias.prototype.all = function (callback) {
    this._db.query('select * from noticias', callback);
}
Noticias.prototype.get = function (id, callback) {
    this._db.query(`select * from noticias where id_noticia = ${id}`, callback);
}
Noticias.prototype.new = function(noticia, callback) {
    this._db.query('insert into noticias set ?', noticia, callback)
}

module.exports = function (){
    return Noticias;
}