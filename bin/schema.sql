create database killerr;
use killerr;

/*
-- Recipe Object Definition
{
    name: "",
    ingredients: [],
    instructions: [],
    tags: [],
    servings: "",
    image: "",
    time: {
      prep: "",
      cook: "",
      active: "",
      inactive: "",
      ready: "",
      total: ""
    }
}
*/

create table recipes (
  id int primary key auto_increment,
  title varchar(75) not null,
  ingredients varchar(1000) not null,
  instructions varchar(1000),
  link varchar(300) not null,
  date_posted datetime DEFAULT current_timestamp()
);

create table recipes_old (
  id int primary key auto_increment,
  title varchar(75) not null,
  total_time datetime not null,
  yields float not null,
  ingredients varchar(1000) not null,
  pic varchar(1000),
  host varchar(75) not null,
  nutrients varchar(100)
);