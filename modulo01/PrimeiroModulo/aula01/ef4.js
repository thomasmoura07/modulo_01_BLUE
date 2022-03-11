/*Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.
 */
var prompt = require("prompt-sync")();

let dias, anos, meses;

dias = +prompt("Quantos dias você já tem na terra: ");
anos = (dias / 360).toFixed(0);
meses = ((dias % 360) / 30).toFixed(0);
dias = ((dias % 360) % 30).toFixed(0);

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias.`);
