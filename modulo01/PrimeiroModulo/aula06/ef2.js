// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
prompt = require("prompt-sync")();
console.clear();

const idade = [];
const altura = [];
let idadeMedia = 0,
  alturaMedia = 0,
  idade1,
  altura1;

for (let i = 0; i < 5; i++) {
  idade1 = +prompt(`Digite sua idade ${i}: `);
  altura1 = +prompt(`Digite sua altura ${i}:`);

  idade.push(idade1);
  altura.push(altura1);

  console.clear();
  idadeMedia = idadeMedia + idade[i];
  alturaMedia = alturaMedia + altura[i];
  
  if (idade[i] == idade[4]) { // ESSA CONDIÇÃO SERVE PARA ALTURA TAMBEM, POIS POSSUEM A MESMA QUANTIDADE DE ELEMENTOS
    idadeMedia = idadeMedia / idade.length;
    alturaMedia = alturaMedia / altura.length;
  }
}

console.log(`IDADES: ${idade} MÉDIA:${idadeMedia}`);
console.log(`ALTURAS: ${altura} MÉDIA: ${alturaMedia}`);
