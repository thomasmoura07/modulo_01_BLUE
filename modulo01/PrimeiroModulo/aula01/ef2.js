/*Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1,
 o número de peças1 que o usuário quer, o valor unitário de cada peça1,
  o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. 
  Após, calcule e mostre o valor a ser pago.
  */
var prompt = require("prompt-sync")();

let peca1,
  peca1Valor = 2.6,
  peca2,
  peca2Valor = 3.5,
  total;
peca1 = +prompt("Quantas unidades deseja:");
peca2 = +prompt("Quantas unidades deseja:");
total = (peca1 * peca1Valor + (peca2 + peca2Valor)).toFixed(2);
console.log(`O total da compra foi de R$ ${total}.`);
