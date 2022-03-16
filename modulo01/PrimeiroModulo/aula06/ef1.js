// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
const prompt = require('prompt-sync')();
console.clear();


const numpares= [];
const numimpar = [];
let num = [];

for(let i = 20; i > 0; i--) {
    let numrandom = Math.floor(Math.random() * 100 + 1);
    num.push(numrandom);
    if (numrandom % 2 == 0) {
        numpares.push(numrandom);
    } else {numimpar.push(numrandom)}
    
}
console.log(`Números sorteados:${num}`);
console.log(`Números pares:${numpares}`)
console.log(`Números ímpares:${numimpar}`);


