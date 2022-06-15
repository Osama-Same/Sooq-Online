show databases;
create database osamasalem1234;
drop database osamasalem1234;
drop TABLE users;
drop TABLE Post;
CREATE TABLE users (
    idUser INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Passowrd VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    Image VARCHAR(255) NOT NULL,
    UNIQUE KEY unique_email (Email),
    PRIMARY KEY(idUser)
);
CREATE TABLE post (
    idPost INT AUTO_INCREMENT NOT NULL,
    idUser INT,
    Name_Post VARCHAR(100) NOT NULL,
    Category_Post VARCHAR (100) NOT NULL,
    Images_Post VARCHAR(255) NOT NULL,
    Country_Post VARCHAR (100) NOT NULL,
    Price_Post DOUBLE(6, 2) NOT NULL,
    Date_Post VARCHAR (100) NOT NULL,
    PRIMARY KEY (idPost),
    FOREIGN KEY (idUser) REFERENCES users (idUser)
);
CREATE TABLE category (
    idCategory INT AUTO_INCREMENT NOT NULL,
    name_Category VARCHAR (100),
    Images_Category varchar(255),
    PRIMARY KEY (idCategory),
);
CREATE TABLE comment(
    idComment INT AUTO_INCREMENT NOT NULL,
    idUser int,
    idPost int,
    comment VARCHAR(100) NOT NULL,
    date_comment VARCHAR(100) NOT NULL,
    PRIMARY KEY (idComment),
    FOREIGN KEY (idUser) REFERENCES users (idUser),
    FOREIGN KEY (idPost) REFERENCES post (idPost)
);
CREATE TABLE likee(
    idLike INT AUTO_INCREMENT NOT NULL,
    idUser int,
    idPost int,
    Likee VARCHAR(100) NOT NULL,
    PRIMARY KEY (idLike),
    FOREIGN KEY (idUser) REFERENCES users (idUser),
    FOREIGN KEY (idPost) REFERENCES post (idPost)
);