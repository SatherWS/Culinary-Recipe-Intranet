create database killerr;
use killerr;

create table recipes (
    id int primary key auto_increment,
    title varchar(75) not null,
    total_time datetime not null,
    yields float not null,
    ingredients varchar(1000) not null,
    pic varchar(1000),
    host varchar(75) not null,
    nutrients varchar(100)
);