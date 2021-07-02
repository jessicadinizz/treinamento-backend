CREATE TABLE funcoes (
id INT auto_increment,
nome VARCHAR(45),
primary key(id)
);

CREATE TABLE cursos (
id INT auto_increment,
nome VARCHAR(45),
primary key(id)
);

CREATE TABLE integrantes (
id INT auto_increment,
nome VARCHAR(45),
cpf VARCHAR(45),
cursos int not null,
funcoes int not null,
FOREIGN key(cursos) REFERENCES cursos(id),
FOREIGN key(funcoes) REFERENCES funcoes(id),
primary key(id)
);

INSERT INTO funcoes (nome) VALUES 
("diretoria"), ("assessoria");


INSERT INTO cursos (nome) VALUES
("computacao"), ("mecanica");


INSERT INTO integrantes (nome, cpf, funcoes, cursos) VALUES
("Jessica", "5678", 2, 1), ("Leticia", "1234", 1, 1), ("Pedro", "91011", 2, 1), ("Thiago", "121314", 2, 1);
