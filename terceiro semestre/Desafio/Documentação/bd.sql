DROP database if exists jullyana;
CREATE DATABASE jullyana;
USE jullyana;

CREATE TABLE veiculos(
    id_v integer PRIMARY KEY NOT NULL auto_increment,
    Placa VARCHAR(7) NOT NULL,
    Tipo VARCHAR(15) NOT NULL,
    Obs VARCHAR(100) NOT NULL
);
CREATE TABLE Vagas(
    id_v integer(2) PRIMARY KEY NOT NULL,
    Dat date NOT NULL,
    Hora_E TIME NOT NULL,
    Hora_S TIME,
    constraint ligacao foreign key (id_v)
	references veiculos(id_v) 
);

CREATE view vw_Vagas as 
SELECT v.id_v, v.Placa, v.Tipo, v.obs, e.Dat , e.Hora_E, e.Hora_S ,TIMEDIFF(e.Hora_S,e.Hora_E)  AS subtotal from veiculos v left join  Vagas e 
on v.id_v = e.id_v order by id_v;

INSERT INTO veiculos VALUES
(default, "1234567", "moto"," Tanque riscado"),
(default, "2313267", "caminhao"," "),
(default, "2313155", "carro"," farol quebrado"),
(default, "2313267", "caminhao"," "),
(default, "2313145", "caminhonete"," "),
(default, "2313145", "Carro"," "),
(default, "2313144", "Carro"," "),
(default, "2313149", "Carro"," espelho quebrado"),
(default, "2313154", "Carro"," "),
(default, "2313135", "Carro"," "),
(default, "2313892", "Carro"," "),
(default, "2313187", "Carro"," "),
(default, "2313123", "Carro"," "),
(default, "2313564", "Carro"," "),
(default, "1234555", "moto"," ");

INSERT INTO Vagas VALUES
(1,"2020/12/02","14:30","15:30"),
(5,"2020/12/03","11:00",NULL),
(2,"2020/12/02","07:30","17:00"),
(4,"2020/12/02","07:00","17:00"),
(3,"2020/12/01","14:30",NULL);

select * from veiculos;
select * from Vagas;
select * from vw_Vagas;


