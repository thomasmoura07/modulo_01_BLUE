// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
const prompt = require('prompt-sync')();

function soma(num1,num2,oper) {
    num1 = +prompt('digite um número');
    num2 = +prompt('digite outro número')
    oper = prompt('Dgite a operação que deseja realizar (+,-,*,/)')
    let total
    if (oper == '+') {
      total = num1 + num2;
      console.log(total)
    } else if (oper == '-') {
        total = num1 - num2
        console.log(total)
    } else if (oper == '*') {
        total = num1 * num2
        console.log(total);
    } else if (oper == '/') {
        total = num1 / num2
        console.log(total)
    } 
}
soma();
