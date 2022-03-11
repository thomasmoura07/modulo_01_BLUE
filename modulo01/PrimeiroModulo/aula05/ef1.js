// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
const prompt = require('prompt-sync')();
console.clear();

let usuario, senha

usuario = prompt('Coloque seu nome de usuário: ');

do { 
senha = prompt('Digite sua senha:');

if (usuario == senha) {
    console.log('Insira uma senha válida');
} 
} while(usuario == senha)
