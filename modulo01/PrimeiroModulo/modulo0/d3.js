/*Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.*/
var prompt = require("prompt-sync")();

let player, bot

player = +prompt("Digite um número:");


bot = Math.floor(Math.random() * 10 + 1);


if (player == bot) {
  console.log(
    `Seu número escolhido foi ${player}, da máquina foi ${bot}: Você ganhou!`
  );
} else {
  console.log(
    `Seu número escolhido foi ${player}, da máquina foi ${bot}: Você perdeu!`
  );
}
