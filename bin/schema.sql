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

-- vvv LATEST TABLE

create table recipes (
  id int primary key auto_increment,
  title varchar(75) not null,
  ingredients varchar(1000) not null,
  instructions varchar(10000),
  link varchar(300) not null,
  date_posted datetime DEFAULT current_timestamp()
);

-- ^^^