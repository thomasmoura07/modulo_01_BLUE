/*Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:
*/
var prompt = require('prompt-sync')();

let largura, comprimento

largura = +prompt("Digite o valor da Largura: ")
comprimento = +prompt("Digite o valor do comprimento: ")

let result = largura * comprimento

console.log(`Com a largura de ${largura}, e com comprimento de ${comprimento}, tem-se a área no valor de ${result}`)