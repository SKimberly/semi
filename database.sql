create table user(
	id int primary key auto_increment,
	nombre varchar(100) not null,
	telefono int(10) not null,
	correo varchar(60)not null,
	password varchar(100)not null
)engine=innodb;