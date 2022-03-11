// Faça um programa que leia um número, e informe se ele é par ou impar
const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Insira um número:');

if (num % 2 == 0) {console.log(`${num} é um número par.`)}
else {console.log(`${num} é um número ímpar.`)}
