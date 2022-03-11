var prompt = require("prompt-sync")();

let nome=[], dado, njogadores,jogadores

njogadores = +prompt("Quantos irão jogar? ")
for (let i = 0; i < njogadores; i++) { 
nome[i] = prompt("Digite seu nome: ")
jogadores.nome=nome[i]
}
console.log(nome)