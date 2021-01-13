--mysql -u root -P
drop database if EXISTS logistico;
create database logistico;
use logistico;
create table entregador(
    id integer not null auto_increment,
    habilitacao varchar(30) not null,
    veiculo varchar(30) not null,
    valorKM decimal(5,2) not null,
    primary key (id));
show tables;
describe entregador;
create table entrega(
    cod integer not null auto_increment,
    data date not null,
    hora time not null,
    endereco varchar(50) not null,
    KMRodado decimal(5,2) not null,
    primary key(cod));

alter table entrega add id_entregador integer not null; 
alter table entrega add
CONSTRAINT FK_entregador_entrega
foreign key
(id_entregador) references entregador
(id) ;
show tables;

--manipulacao de dados

insert into entregador(habilitacao,veiculo,valorKM) values 
("A/B","Titan",1);
insert into entrega
    (data,hora,endereco,KMRodado,id_entregador)
values
    (curdate(), curtime(), "rua tal avenida tals", 20.5, 1);
    insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("A/B/c", "van", 3);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("A/B", "fiorino", 1.50);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("A/B", "caravan", 2);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("d", "fh16", 8);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("c", "van", 3);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("c", "minivan", 2.50);insert into entregador
    (habilitacao,veiculo,valorKM)
values
    ("A/B", "uno", 2);
    insert into entrega
    (data,hora,endereco,KMRodado,id_entregador) values (curdate(), curtime(), "rua travessa angelo rosseti", 80,5);