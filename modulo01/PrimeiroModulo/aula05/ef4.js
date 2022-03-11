// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
const prompt = require('prompt-sync')();
console.clear();

let player, cont = 0;
let bot = Math.floor(Math.random()*10+1);

console.log(bot)

do { 
cont++ //CONTADOR DE TENTATIVAS
player = +prompt('Escolha um número de 0 a 10:');
if (bot > player) {
    console.log("É um número maior")
} else if (bot < player) {
    console.log('É um número menor')
} else {console.log('Mandou bem, você acertou! Você precisou de', cont,"tentativas.")}

} while (bot != player)