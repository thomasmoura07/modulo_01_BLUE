/*Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
*/
var prompt = require('prompt-sync')();
let ano,mes,dia,total

ano = +prompt("Quantos anos você tem:")
mes = +prompt("Quantos meses:")
dia = +prompt("E quantos dias:")

ano = ano * 365
mes = mes * 30
total = ano + mes + dia
console.log(`Você já viveu ${total} dias`)
