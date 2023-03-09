-- Active: 1663621767455@@35.226.146.116@3306@alves-andressa-darze
create table Precato_Forms_Answer(
    id varchar(255) primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    cpf varchar(255) not null unique,
    phone varchar(255) not null unique,
    created_at DATE not null
);

select * from `Precato_Forms_Answer`;

insert into `Precato_Forms_Answer`(id, name, email, cpf, phone, created_at)
values("111", "Fernando", "fernando@gmail.com", "11111111111", "111111111", "2023-03-01"),
("222", "Beatriz", "beatriz@gmail.com", "22222222222", "222222222", "2023-03-02"),
("333", "Gabriel", "gabriel@gmail.com", "33333333333", "333333333", "2023-03-03"),
("444", "Felipe", "felipe@gmail.com", "44444444444", "444444444", "2023-03-04"),
("555", "Catarina", "catarina@gmail.com", "55555555555", "555555555", "2023-03-05"),
("666", "Ana", "ana@gmail.com", "66666666666", "666666666", "2023-03-06"),
("777", "João", "joao@gmail.com", "77777777777", "777777777", "2023-03-07");

-- drop Table `Precato_Forms_Answer`;