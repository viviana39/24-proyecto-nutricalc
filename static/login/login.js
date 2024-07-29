const alph = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function passGenerate(length = 10){
    let result = "";
    for (let i = 0; i < length; i++){
        result += alph.charAt(Math.floor(Math.random() * alph.length));
    }
    return result;
}

const pass = passGenerate();
console.log(pass);

/*
1. Crear la Base de Datos y la Tabla en MySQL
Primero, creamos una base de datos y una tabla para almacenar los usuarios y sus contraseñas.

sql
Copiar código
CREATE DATABASE user_auth;

USE user_auth;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);