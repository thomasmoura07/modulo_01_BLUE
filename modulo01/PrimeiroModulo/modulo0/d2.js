/*Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
*/
var prompt = require('prompt-sync')();

let anoNasc,anoAtual,idade 

anoNasc = +prompt("Digite o seu ano de nascimento?")
anoAtual = +prompt("Digite o ano atual: ")
idade = anoAtual - anoNasc
console.log(idade)

if (idade < 16) {
    console.log("NEGADO")
} else if (idade >=16 && idade < 18) { 
  console.log("OPCIONAL")}
  else {console.log("OBRIGATÓRIO")}



