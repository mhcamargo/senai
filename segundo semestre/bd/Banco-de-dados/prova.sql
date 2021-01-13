drop database if exists prova;
create database prova;
use prova;
create table bebidas(
    codBebida integer not null primary key auto_increment,
    nomeBebida varchar(30)not null,
    tipoBebida varchar(30)not null,
    volumeVasihames varchar(30)not null
);

create table pateleiras(
    numPrateleira integer not null primary key auto_increment,
    posicaoDeposito varchar(30)not null,
    pesoSuportado varchar(30)not null,
    dataAquisicao varchar(20) not null
);

create table movimento(
    nPedido integer not null primary key auto_increment,
    dataMovimento varchar(20) not null,
    tipoMovimento varchar(30) not null,
    totalVasilhame integer not null,
    valorUnitario integer not null,
    codBebida integer not null,
    numPrateleira integer not null,
    constraint fk_opabebidas foreign key (codBebida) references bebidas(codBebida),
    constraint fk_prapateleiras foreign key (numPrateleira) references pateleiras(numPrateleira)

);

insert into bebidas VALUES
(default,"breja","alcoólica","300"),
(default,"wisky","alcoólica","200"),
(default,"suco natural","natural","500"),
(default,"refri","Gasosa","1000");

insert into pateleiras VALUES
(default,"P1","2tons","20/10/2k20"),
(default,"P2","500kl","20/2/2k8"),
(default,"P3","800kl","12/5/2k10"),
(default,"P7","1tons","11/8/2k18");

insert into movimento VALUES
(default,"19/10/2k20","Saida",10,100,1,2),
(default,"20/10/2k20","Saida",5,250,2,3),
(default,"19/10/2k20","entrada",1000,100,3,4),
(default,"19/10/2k20","entrada",100,600,1,2),
(default,"19/10/2k20","entrada",100,2000,2,3),
(default,"19/10/2k20","entrada",150,1500,4,1);

select * from bebidas;
select * from pateleiras;
select * from movimento;
