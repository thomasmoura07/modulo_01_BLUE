// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite um número par:');

while(num % 2 != 0) {
    num = +prompt('Inválido. Digite um número par:')
}