SHOW DATABASES;

CREATE DATABASE osamasalem1234;

DROP DATABASE osamasalem1234;

DROP TABLE users;

DROP TABLE Post;

CREATE TABLE
    users (
        idUser INT AUTO_INCREMENT NOT NULL,
        NAME VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        Passowrd VARCHAR(255) NOT NULL,
        Phone VARCHAR(255) NOT NULL,
        Country VARCHAR(255) NOT NULL,
        Image VARCHAR(255) NOT NULL,
        UNIQUE KEY unique_email (Email),
        PRIMARY KEY(idUser)
    );

CREATE TABLE
    post (
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

CREATE TABLE
    category (
        idCategory INT AUTO_INCREMENT NOT NULL,
        name_Category VARCHAR (100),
        Images_Category VARCHAR(255),
        PRIMARY KEY (idCategory)
    );

CREATE TABLE
    COMMENT(
        idComment INT AUTO_INCREMENT NOT NULL,
        idUser INT,
        idPost INT,
        COMMENT VARCHAR(100) NOT NULL,
        date_comment VARCHAR(100) NOT NULL,
        PRIMARY KEY (idComment),
        FOREIGN KEY (idUser) REFERENCES users (idUser),
        FOREIGN KEY (idPost) REFERENCES post (idPost)
    );

CREATE TABLE
    likee(
        idLike INT AUTO_INCREMENT NOT NULL,
        idUser INT,
        idPost INT,
        Likee VARCHAR(100) NOT NULL,
        PRIMARY KEY (idLike),
        FOREIGN KEY (idUser) REFERENCES users (idUser),
        FOREIGN KEY (idPost) REFERENCES post (idPost)
    );

CREATE TABLE
    massage(
        idMassage INT AUTO_INCREMENT NOT NULL,
        idUser INT,
        idUser2 INT,
        sender VARCHAR(255),
        receiver VARCHAR(255),
        PRIMARY KEY (idMassage),
        FOREIGN KEY (idUser) REFERENCES users (idUser)
    );