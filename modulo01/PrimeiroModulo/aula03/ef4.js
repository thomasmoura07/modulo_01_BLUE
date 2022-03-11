// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
const prompt = require('prompt-sync')();
console.clear();

let num = +prompt('Digite um número:');
let num2 = +prompt('Digite outro número:')

if (num2 % num == 0) {
    console.log("São múltiplos!");
} else {
    console.log("Não são múltiplos!");
}