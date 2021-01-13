mysql
-u root -P
show DATABASE;
CREATE DATABASE teste;
show database;
use teste;
create table exemplo
(
    id int not null
    auto_increment,
    nome varchar
    (30) not null,
    idade int not null,
    curso varchar
    (20) not null,
    periodo int not null,
    primary key
    (id));

show table;
describe exemplo;
    insert into exemplo
        (nome,idade,curso,periodo)
    values('fulano', '18', 'tec desenvolvimento de sistemas', '18');
    select *
    from exemplo;
    select id, nome, idade
    from exemplo;
    UPDATE exemplo set nome = 'beltrano' where id ='1';
    select *
    from exemplo;
    delete from exemplo where id = '1';
    select *
    from exemplo;
    drop table exemplo;
    show tables;
    drop databases teste;
show databases;
EXIT
EXIT