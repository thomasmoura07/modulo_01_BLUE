/*Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.*/

var prompt = require("prompt-sync")();

let selecao = ["","Papel","Pedra","Tesoura"]
let bot,player,rodadas,continue_

do { 
rodadas = +prompt("quantas rodadas deseja jogar:")

let = placar1 = 0, placar2= 0;

for (let i = 1; i <= rodadas; i++) { 
player = prompt("\n(1)Papel - (2)Pedra - (3)Tesoura: ")
bot = Math.floor(Math.random()*3+1)

if (player == 1 && bot == 1) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nEmpate`)
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 1 && bot == 2) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nVitória`)
    placar1++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 1 && bot == 3) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nDerrota`)
    placar2++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 2 && bot == 1) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nDerrota`)
    placar2++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 2 && bot == 2) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nEmpate`)
} else if (player == 2 && bot == 3) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nVitória`)
    placar1++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 3 && bot == 1) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nVitória`)
    placar1++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 3 && bot == 2) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nDerrota`)
    placar2++
    console.log(`O placar está ${placar1} para você, e ${placar2} para a máquina\n`)
} else if (player == 3 && bot == 3) {
    console.log(`você escolheu: ${selecao[player]} x ${selecao[bot]}(máquina).\nEmpate`)
}

}

if(placar1 > placar2) {
    console.log("\nVocê venceu a batalha contra as máquinas!")
} else if (placar1 == placar2) {
    console.log("\nEmpate. Será você um robô.")
} else {
    console.log("\nA batalha contra a máquina foi um fiasco!")
}
continue_ = prompt("\n\nvocê deseja continuar(s/n):")
} while(continue_ == "s" || continue_ == "S")