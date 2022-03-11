/*Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
var prompt = require("prompt-sync")();

let saque,
  notas = [];
const notasValor = [100, 50, 10, 5, 1];
do {
  saque = +prompt("Digite o valor do saque: ");
  if (saque >= 10 && saque <= 600) {
    notas[0] = Math.floor(saque / notasValor[0]);
    notas[1] = Math.floor((saque % notasValor[0]) / notasValor[1]);
    notas[2] = Math.floor((saque % notasValor[1]) / notasValor[2]);
    notas[3] = Math.floor((saque % notasValor[2]) / notasValor[3]);
    notas[4] = Math.floor((saque % notasValor[3]) / notasValor[4]);
    console.log(
      `Você receberá ${notas[0]} nota de 100 reais\n${notas[1]} nota de 50 reais\n${notas[2]} nota de 10 reais\n${notas[3]} notas de 5 reais\n${notas[4]} nota de um real.\n`
    );
    validador = false;
  } else {
    console.log(
      "O saque mínimo é de 10 reais e o máximo de 600 reais.Tente com outro Valor."
    );
  }
  validador = true;
} while (validador == true);
