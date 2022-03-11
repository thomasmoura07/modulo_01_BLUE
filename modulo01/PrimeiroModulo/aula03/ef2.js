//Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
const prompt = require('prompt-sync')()

let nota1, nota2, nota3, nota4

console.clear();

nota1 = +prompt("Digite a nota 01:");
nota2 = +prompt("Digite a nota 02:");
nota3 = +prompt("Digite a nota 03:");
nota4 = +prompt("Digite a nota 04:");

const media = (nota1 + nota2 + nota3 + nota4)/4

if(media >= 7) {
    console.log(`APROVADO COM A MÉDIA ${media}`);
} else if (media > 5 && media < 7) {
    console.log (`EM RECUPERAÇÃO COM A MÉDIA ${media}`);
} else {
    console.log(`REPROVADO COM A MÉDIA ${media}`);
}