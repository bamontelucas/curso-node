create database portal_noticias;
use portal_noticias;

create table noticias (
    id_noticia integer primary key auto_increment,
    titulo varchar(100),
    noticia text,
    data_criacao timestamp default current_timestamp,
    resumo varchar(100),
    autor varchar(30),
    data_noticia date
);

insert into noticias (
    titulo, 
    noticia, 
    resumo, 
    autor, 
    data_noticia
) values (
    'Anim dolor incididunt elit fugiat id commodo.',
    'Nisi cupidatat tempor reprehenderit veniam minim amet fugiat eiusmod eu amet. Nulla in duis sit sunt aliqua ea dolor amet aliquip enim quis. Dolor cillum ea do elit esse aliquip velit sint fugiat exercitation dolore fugiat eiusmod anim. Nostrud amet aute occaecat ad proident adipisicing non. Do tempor amet officia sit magna est aliqua et exercitation nulla sint pariatur incididunt ex. Officia culpa pariatur in commodo sint occaecat nulla.',
    'Minim duis duis deserunt ut commodo.',
    'Lucas Corrêa',
    str_to_date('15-11-2016', '%d-%m-%Y')
), (
    'Ullamco reprehenderit tempor aliqua nulla labore et sit officia duis in incididunt.',
    'Ad nulla voluptate veniam tempor dolore deserunt amet nostrud fugiat reprehenderit aliquip proident occaecat minim. Labore aliqua pariatur aliqua eu deserunt Lorem nulla irure culpa ex elit. Sit sit consequat quis tempor consequat ut mollit excepteur adipisicing sunt pariatur cillum magna reprehenderit. Occaecat voluptate tempor irure laboris sint id amet dolore nostrud cupidatat consequat dolor deserunt consequat. Tempor duis quis commodo in duis nisi dolor deserunt tempor veniam nisi aliqua do. Magna consectetur elit cupidatat quis nisi cillum nisi cupidatat officia in mollit nulla laborum.',
    'Aute id reprehenderit enim ut do voluptate tempor adipisicing sint ad pariatur.',
    'Mariana Alcarria',
    str_to_date('10-11-2016', '%d-%m-%Y')   
);