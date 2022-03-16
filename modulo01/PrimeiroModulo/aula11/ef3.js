// Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

const prompt = require("prompt-sync")();

function TempConverter(typeChoice, value, typeConv) {
  let result;
  switch (typeChoice) {
    case "C":
      switch (typeConv) {
        case "F":
          result = value * 1.8 + 32;
          console.log(`Célsios:${value} para Fahrenheit:${result}`)
          break;
        case "K":
          result = value + 273.15;
          console.log(`Célsios:${value} para Kelvin:${result}`)

          break;
      }
      break;
    case "F":
      switch (typeConv) {
        case "C":
          result = ((value - 32) * 5) / 9;
          console.log(`Fahrenheit:${value} para Célsius:${result}`)
          break;
        case "K":
          (result = ((value - 32) * 5) / 9 + 273), 15;
          console.log(`Fahrenheit:${value} para Kelvin:${result}`)

          break;
      }
      break;
    case "K":
      switch (typeConv) {
        case "C":
          result = value - 273.15;
          console.log(`Kelvin:${value} para Célsius:${result}`)

          break;
        case "F":
          result = ((value - 273, 15) * 9) / 5 + 32;
          console.log(`Kelvin:${value} para Fahrenheit:${result}`)

          break;
      }
      break;
  }
}

TempConverter("F");


