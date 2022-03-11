var prompt = require('prompt-sync')();
/*Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. 
Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
*/

let num, lista = []

let i = 0 
let res,controle

 do { 
num = +prompt("Digite um número:")
lista[i] = num
repetidor=0

for (k=0;k<=lista.length;k++){
    repetidor=0
  for(j = 0; j<=lista.length; j++) {
    if (lista[k]==lista[j]) {
      repetidor++
    }
    if(repetidor>1){
      controle = lista[j]
      do {
        lista[k] = +prompt("Número já existente, digite outro número:")
      } while(lista==controle)
      
    }
}
}
console.log(lista)
i++
res = prompt("Deseja adicionar um novo número?")
} while(res == "s" || res == "Sim "|| res == "SIM" || res == "sim")

console.log(lista)