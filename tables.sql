-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Precato_Forms_Answer(
    id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    cpf varchar(255) not null unique,
    phone varchar(255) not null unique,
    created_at timestamp default current_timestamp
);