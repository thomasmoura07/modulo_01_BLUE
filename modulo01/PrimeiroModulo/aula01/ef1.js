/*Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, 
sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.
*/
var prompt = require('prompt-sync')();
let notaA, notaB, mediap

notaA = +prompt("Digite a nota A:")
notaB = +prompt("Digite a nota B:")
let nota1 = notaA * 4
let nota2 = notaB * 6
mediap = (nota1+nota2)/10
console.log(`A media das notas A: ${notaA} e nota B: ${notaB} é igual a ${mediap}`)