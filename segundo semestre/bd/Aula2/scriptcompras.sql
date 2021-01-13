mysql
-u root -p;

show DATABASE;

CREATE DATABASE compras;

show DATABASE;

use compras;

CREATE TABLE Produtos
(
    codigo int
    auto_incremet,
    nome VARCHAR
    (30) ,
    descricao varchar
    (20),
    marca VARCHAR
    (10) ,
    preco int,
    quantidade int,
    PRIMARY key
    (codigo));

    show TABLE

    ALTER TABLE Produtos drop COLUMN codigos;
    describe produtos;