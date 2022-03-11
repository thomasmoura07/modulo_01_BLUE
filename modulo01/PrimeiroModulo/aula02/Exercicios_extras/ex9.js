// 9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.
const prompt = require('prompt-sync')();

 const dolar = 0.20
 
 console.clear();
 let valorEmReal = +prompt("Insira um valor em reais a ser convertido: ")
 
 const converter = valorEmReal * dolar;

 console.log(`Valor em reais:R$ ${valorEmReal}\nValor em Dólar:$ ${converter.toFixed(2)} dólares.`);
