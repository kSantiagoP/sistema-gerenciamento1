CREATE DATABASE SGerenciamento;
--\c sgerenciamento
 CREATE TABLE clientes (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nome varchar(255),
    email varchar(255),
    telefone varchar(15),
    x_coord integer NOT NULL,
    y_coord integer NOT NULL);