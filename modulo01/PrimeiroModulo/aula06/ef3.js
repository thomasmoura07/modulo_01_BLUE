// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
const prompt = require("prompt-sync")();
console.clear();

let alunoSize;
const aluno = [];
const nota = [];
let media = 0;

alunoSize = +prompt("Quantos alunos serão cadastrados:");
console.clear();

for (let i = 0; i < alunoSize; i++) {
  aluno.push(prompt("Digite o nome do aluno:"));
  nota.push(+prompt("Digite a nota do aluno:"));
  console.clear();
}
console.log("LISTA DE ALUNOS CADASTRADOS");
for (let i = 0; i < alunoSize; i++) {
  console.log(`ALUNO: ${aluno[i]}--------NOTA:${nota[i]}`);

  media = media + nota[i];
}
media = media / nota.length;
console.log();
console.log(`MÉDIA: ${media.toFixed(2)}`);
