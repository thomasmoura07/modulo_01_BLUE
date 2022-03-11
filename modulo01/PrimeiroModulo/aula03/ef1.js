//Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.
const prompt = require('prompt-sync')()
let numero1, numero2

numero1 = +prompt("Insira um número: ");
numero2 = +prompt("Insira um outro número: ");

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`O número ${numero2} é maior que o número ${numero1}`);
} else {console.log(`São números iguais.`)}
