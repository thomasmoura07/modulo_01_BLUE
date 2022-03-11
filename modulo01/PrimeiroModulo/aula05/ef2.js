// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
const prompt = require('prompt-sync')();
console.clear();

let nome, idade, salario, estadoCivil
let nomeSlice

console.log('-----------------CADASTRO DE USUÁRIO-----------------------')
// VALIDAÇÃO DO NOME
do { 
nome = prompt('Digite seu nome:');
nomeSlice = nome.slice(0,nome.length);
if(nomeSlice.length < 4) {
    console.log('Digite um nome válido');
}
} while(nomeSlice.length < 4)

console.clear();
console.log('-----------------CADASTRO DE USUÁRIO-----------------------')

//VALIDAÇÃO DA IDADE
do { 
idade = +prompt("Digite sua idade:");
if(idade <= 0 || idade >=150) {
    console.log('Digite uma idade válida')
}
} while(idade <= 0 || idade >=150)

console.clear();
console.log('-----------------CADASTRO DE USUÁRIO-----------------------')

//VALIDAÇÃO DE SALÁRIO
do { 
salario = +prompt('Digite seu salário:');
if (salario <= 0) {
    console.log('Digite um valor válido para o salário');
}
} while(salario <= 0)

console.clear();
console.log('-----------------CADASTRO DE USUÁRIO-----------------------')

//VALIDAÇÃO DE ESTADO CIVIL


estadoCivil = prompt("Digite a letra correspodendente.\nSolteiro(s)   Casado(c)   Divorcidado(d)  Viúvo(v)");
while (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'd' && estadoCivil != 'v'){ 
if (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'd' && estadoCivil != 'v') {
    console.log('Insira um valor válido. Apenas a letra correspondente ao seu estado civil.');
    estadoCivil = prompt("Digite a letra correspodendente.\nSolteiro(s)   Casado(c)   Divorcidado(d)  Viúvo(v)");
}
}
console.clear();
console.log('-----------------CADASTRO DE USUÁRIO-----------------------')
console.log(`Nome: ${nome}\nIdade:${idade}\nSalário:${salario}\nEstado Civil:${estadoCivil}`)